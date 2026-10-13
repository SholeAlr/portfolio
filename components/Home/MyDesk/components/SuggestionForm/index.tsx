"use client";

import { useState } from "react";
import { createBoardItemSchema } from "@/lib/validations/board-item";
import { Modal } from "@/components/ui";

type Props = {
  onClose: () => void;
  onSubmitted: () => void;
};

export function SuggestionForm({ onClose, onSubmitted }: Props) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    creatorName: "",
    creatorEmail: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const parsed = createBoardItemSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const res = await fetch("/api/board-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setSubmitting(false);

    if (res.ok) {
      onSubmitted();
    } else {
      const data = await res.json();
      setErrors(data.error?.fieldErrors ?? {});
    }
  }

  return (
    <Modal
      open={true}
      onClose={onClose}
      title='Suggest something'
      maxWidth='max-w-md'
    >
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <div>
          <input
            placeholder='Title'
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className='w-full rounded-md border px-3 py-2 text-sm'
          />
          {errors.title && (
            <p className='mt-1 text-xs text-red-500'>{errors.title}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder='Describe your idea…'
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            className='w-full rounded-md border px-3 py-2 text-sm'
          />
          {errors.description && (
            <p className='mt-1 text-xs text-red-500'>{errors.description}</p>
          )}
        </div>

        <div>
          <input
            placeholder='Your name (optional)'
            value={form.creatorName}
            onChange={(e) => setForm({ ...form, creatorName: e.target.value })}
            className='w-full rounded-md border px-3 py-2 text-sm'
          />
          {errors.creatorName && (
            <p className='mt-1 text-xs text-red-500'>{errors.creatorName}</p>
          )}
        </div>

        <div>
          <input
            placeholder='Your email (optional)'
            value={form.creatorEmail}
            onChange={(e) => setForm({ ...form, creatorEmail: e.target.value })}
            className='w-full rounded-md border px-3 py-2 text-sm'
          />
          {errors.creatorEmail && (
            <p className='mt-1 text-xs text-red-500'>{errors.creatorEmail}</p>
          )}
        </div>

        <div className='mt-2 flex justify-end gap-2'>
          <button
            type='button'
            onClick={onClose}
            className='rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted'
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={submitting}
            className='rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50'
          >
            {submitting ? "Sending…" : "Send"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
