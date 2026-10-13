"use client";

import { useEffect, useState } from "react";
import { COLUMN_ORDER, COLUMN_LABELS } from "@/lib/board-status";
import { SuggestionForm } from "./components/SuggestionForm";
import { BoardCard } from "./components/BoardCard";
import { BoardItem } from "./types";
import { STAGE_META } from "./constants";
import { BoardColumn } from "./components/BoardColumn";

export function MyDesk() {
  const [items, setItems] = useState<BoardItem[]>([]);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    void loadBoard();
  }, []);

  async function loadBoard() {
    setLoading(true);

    const [itemsRes, votesRes] = await Promise.all([
      fetch("/api/board-items"),
      fetch("/api/board-items/votes"),
    ]);

    const itemsData = await itemsRes.json();
    const votesData: number[] = await votesRes.json();

    setItems(itemsData);
    setLikedIds(new Set(votesData));
    setLoading(false);
  }

  async function toggleLike(itemId: number) {
    const alreadyLiked = likedIds.has(itemId);

    setLikedIds((prev) => {
      const next = new Set(prev);

      if (alreadyLiked) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }

      return next;
    });

    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              voteCount: item.voteCount + (alreadyLiked ? -1 : 1),
            }
          : item,
      ),
    );

    const res = await fetch(`/api/board-items/${itemId}/vote`, {
      method: alreadyLiked ? "DELETE" : "POST",
    });

    if (!res.ok && res.status !== 409) {
      setLikedIds((prev) => {
        const next = new Set(prev);

        if (alreadyLiked) {
          next.add(itemId);
        } else {
          next.delete(itemId);
        }

        return next;
      });

      setItems((prev) =>
        prev.map((item) =>
          item.id === itemId
            ? {
                ...item,
                voteCount: item.voteCount + (alreadyLiked ? 1 : -1),
              }
            : item,
        ),
      );
    }
  }

  if (loading) {
    return (
      <section className='w-full py-20 text-center'>
        <div className='text-sm tracking-wide text-zinc-500'>
          Loading Board...
        </div>
      </section>
    );
  }

  return (
    <section className='relative w-full overflow-hidden py-8 md:py-12'>
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute left-50 top-20 h-20 w-20 -translate-x-1/2 rounded-full bg-pink-500/60 blur-2xl' />
        <div className='absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-600/50 blur-[120px]' />
        <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-600/50 blur-[120px]' />
      </div>

      <header className='mx-auto mb-14 max-w-4xl text-center'>
        <div
          className='
            mx-auto mb-4 inline-flex items-center gap-2
            rounded-full border border-pink-500/30
            bg-pink-500/[0.06]
            px-4 py-1.5
            text-[10px] font-medium uppercase
            tracking-[0.22em] text-pink-300
            shadow-[0_0_20px_rgba(236,72,153,0.08)]
          '
        >
          <span className='text-pink-400'>✦</span>
          Ideas to Impact
        </div>

        <h1 className='text-5xl font-bold tracking-tight sm:text-6xl'>
          <span className='text-zinc-100'>My </span>
          <span
            className='
              bg-gradient-to-r from-zinc-100
              via-pink-400 to-pink-600
              bg-clip-text text-transparent
            '
          >
            Board
          </span>
        </h1>

        <p className='mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base'>
          A transparent look at what I&apos;m working on, from your suggestions
          to shipped features.
        </p>

        <div className='mt-2 text-sm text-zinc-400'>
          Have an idea? I&apos;d love to hear it.{" "}
          <button
            type='button'
            onClick={() => setShowForm(true)}
            className='
              group inline-flex items-center gap-1
              text-pink-400 underline decoration-pink-500/50
              underline-offset-4 transition
              hover:text-pink-300 cursor-pointer
            '
          >
            Suggest Something
            <span className='transition-transform group-hover:translate-x-1'>
              →
            </span>
          </button>
        </div>
      </header>

      <div
        className='
          mx-auto grid max-w-[1200px]
          grid-cols-1 gap-10
          md:grid-cols-2
          xl:grid-cols-4 xl:gap-8
        '
      >
        {COLUMN_ORDER.map((status, index) => {
          const columnItems = items.filter((item) => item.status === status);

          return (
            <BoardColumn
              status={status}
              meta={STAGE_META[index] ?? STAGE_META[0]}
              count={columnItems.length}
              key={status}
            >
              {columnItems.map((item) => (
                <BoardCard
                  key={item.id}
                  item={item}
                  liked={likedIds.has(item.id)}
                  onToggleLike={() => toggleLike(item.id)}
                />
              ))}
            </BoardColumn>
          );
        })}
      </div>

      {/* Suggestion modal */}
      {showForm && (
        <SuggestionForm
          onClose={() => setShowForm(false)}
          onSubmitted={() => {
            setShowForm(false);
            void loadBoard();
          }}
        />
      )}
    </section>
  );
}
