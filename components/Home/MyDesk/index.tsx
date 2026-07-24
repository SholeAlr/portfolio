// components/my-desk/my-desk.tsx
"use client";

import { useEffect, useState } from "react";
import { COLUMN_ORDER, COLUMN_LABELS } from "@/lib/board-status";
import { SuggestionForm } from "./SuggestionForm";
import { BoardCard } from "./BoardCard";
import { Button } from "@/components/ui";

type BoardItem = {
  id: number;
  title: string;
  description: string;
  status: (typeof COLUMN_ORDER)[number];
  createdByType: "owner" | "visitor";
  creatorName: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
  blogUrl: string | null;
  createdAt: string;
  voteCount: number;
};

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

    // optimistic update
    setLikedIds((prev) => {
      const next = new Set(prev);
      alreadyLiked ? next.delete(itemId) : next.add(itemId);
      return next;
    });
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, voteCount: item.voteCount + (alreadyLiked ? -1 : 1) }
          : item,
      ),
    );

    const res = await fetch(`/api/board-items/${itemId}/vote`, {
      method: alreadyLiked ? "DELETE" : "POST",
    });

    if (!res.ok && res.status !== 409) {
      // revert on real failure
      setLikedIds((prev) => {
        const next = new Set(prev);
        alreadyLiked ? next.add(itemId) : next.delete(itemId);
        return next;
      });
      setItems((prev) =>
        prev.map((item) =>
          item.id === itemId
            ? { ...item, voteCount: item.voteCount + (alreadyLiked ? 1 : -1) }
            : item,
        ),
      );
    }
  }

  if (loading) {
    return (
      <div className='py-12 text-center text-sm text-muted-foreground'>
        Loading My Desk…
      </div>
    );
  }

  return (
    <section className='w-full'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>My Desk</h2>
        <Button
          variant='ghost'
          onClick={() => setShowForm(true)}
          className='rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90'
        >
          Suggest something
        </Button>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        {COLUMN_ORDER.map((status) => (
          <div
            key={status}
            className='rounded-2xl p-[2px] bg-gradient-to-b from-pink-500 to-purple-600 shadow-[0_0_15px_rgba(217,70,239,0.35)]'
          >
            <div className='h-full rounded-2xl bg-zinc-950 p-3'>
              <h3 className='mb-3 text-sm font-semibold uppercase tracking-wide bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'>
                {COLUMN_LABELS[status]}
              </h3>
              <div className='flex flex-col gap-3'>
                {items
                  .filter((item) => item.status === status)
                  .map((item) => (
                    <BoardCard
                      key={item.id}
                      item={item}
                      liked={likedIds.has(item.id)}
                      onToggleLike={() => toggleLike(item.id)}
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

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
