"use client";

import { useMemo, useState } from "react";
import { challenges } from "@/content/challenges";
import { Challenge } from "@/types/challenge";

interface CodeChallengeProps {
  id: keyof typeof challenges;
}

export default function CodeChallenge({ id }: CodeChallengeProps) {
  const challenge = challenges[id];

  const { title, description, code, answer, explanation } = challenge;

  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const correct = useMemo(() => {
    return value.trim() === answer.trim();
  }, [value, answer]);

  const [before, after] = code.split("{{blank}}");

  return (
    <section
      className='
        my-12
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
      '
    >
      {/* Header */}
      <div className='border-b border-zinc-800 px-6 py-5'>
        <h3 className='text-xl font-bold text-white'>🛠 {title}</h3>

        <p className='mt-2 text-zinc-400'>{description}</p>
      </div>

      {/* Code */}
      {/* Code */}

      {challenge.type === "fill" ? (
        <pre
          className='
      overflow-x-auto
      bg-zinc-950
      p-6
      font-mono
      text-sm
      leading-7
      text-zinc-200
      whitespace-pre-wrap
    '
        >
          {before}

          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setChecked(false);
            }}
            className={`
        inline-block
        w-24
        rounded
        border
        px-2
        text-center
        outline-none
        transition
        ${
          !checked
            ? "border-pink-500 bg-pink-500/10 text-pink-300"
            : correct
              ? "border-green-500 bg-green-500/10 text-green-300"
              : "border-red-500 bg-red-500/10 text-red-300"
        }
      `}
          />

          {after}
        </pre>
      ) : (
        <div className='bg-zinc-950'>
          <pre
            className='
        overflow-x-auto
        p-6
        font-mono
        text-sm
        leading-7
        text-zinc-200
        whitespace-pre-wrap
      '
          >
            {code}
          </pre>

          <div className='border-t border-zinc-800 p-6'>
            <p className='mb-3 text-sm font-medium text-zinc-400'>
              Your Answer
            </p>

            <textarea
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setChecked(false);
              }}
              placeholder={`Example:
1
2
3`}
              spellCheck={false}
              className='
          h-32
          w-full
          resize-none
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          p-4
          font-mono
          text-white
          outline-none
          transition
          focus:border-pink-600
        '
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className='space-y-5 p-6'>
        <button
          onClick={() => setChecked(true)}
          className='
            rounded-xl
            bg-pink-600
            px-5
            py-3
            font-medium
            text-white
            transition
            hover:bg-pink-500
          '
        >
          Check Answer
        </button>

        {checked && (
          <div
            className={`rounded-xl border p-5 ${
              correct
                ? "border-green-500 bg-green-500/10"
                : "border-red-500 bg-red-500/10"
            }`}
          >
            <p className='font-semibold'>
              {correct ? "✅ Correct!" : "❌ Not quite!"}
            </p>

            <p className='mt-2 text-sm text-zinc-300'>{explanation}</p>
          </div>
        )}
      </div>
    </section>
  );
}
