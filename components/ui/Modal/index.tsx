"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
};

export function Modal({
  open,
  onClose,
  title,
  children,
  maxWidth = "max-w-md",
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      role='dialog'
      aria-modal='true'
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        className='absolute inset-0 bg-black/70 backdrop-blur-md'
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        className={`relative w-full ${maxWidth} rounded-2xl p-[2px] bg-gradient-to-br from-pink-500 to-purple-600 shadow-[0_0_30px_rgba(217,70,239,0.4)] animate-in fade-in zoom-in-95 duration-150`}
      >
        <div className='max-h-[85vh] overflow-y-auto rounded-2xl bg-zinc-950 p-6'>
          <div className='mb-4 flex items-center justify-between'>
            {title ? (
              <h3
                id='modal-title'
                className='text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'
              >
                {title}
              </h3>
            ) : (
              <span />
            )}
            <button
              onClick={onClose}
              aria-label='Close'
              className='rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-pink-400'
            >
              <FiX size={18} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
