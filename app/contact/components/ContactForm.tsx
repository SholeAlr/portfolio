import type { FormEvent, RefObject } from "react";
import type { Stage } from "../types";

type ContactFormProps = {
  stage: Stage;
  name: string;
  email: string;
  message: string;
  error: string | null;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  onNameSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onEmailSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onMessageSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactForm({
  stage,
  name,
  email,
  message,
  error,
  inputRef,
  onNameChange,
  onEmailChange,
  onMessageChange,
  onNameSubmit,
  onEmailSubmit,
  onMessageSubmit,
}: ContactFormProps) {
  if (stage !== "name" && stage !== "email" && stage !== "message") {
    return null;
  }

  const getPrompt = () => {
    switch (stage) {
      case "name":
        return "What's your name?";

      case "email":
        return "Where can I reach you?";

      case "message":
        return "Let's connect. Type your message below.";

      default:
        return "";
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    switch (stage) {
      case "name":
        onNameSubmit(event);
        break;

      case "email":
        onEmailSubmit(event);
        break;

      case "message":
        onMessageSubmit(event);
        break;
    }
  };

  return (
    <div className='mt-8'>
      <div className='mb-3 font-mono text-sm text-white/70'>
        <span className='text-fuchsia-400'>&gt;</span> {getPrompt()}
      </div>

      <form onSubmit={handleSubmit}>
        <div className='flex items-start gap-3'>
          <span className='pt-3 font-mono text-sm text-fuchsia-400'>$</span>

          {stage === "message" ? (
            <textarea
              ref={inputRef as RefObject<HTMLTextAreaElement>}
              value={message}
              onChange={(event) => onMessageChange(event.target.value)}
              placeholder='Type your message...'
              rows={5}
              className='w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-white/20 focus:border-fuchsia-400/40 focus:bg-white/[0.05]'
            />
          ) : (
            <input
              ref={inputRef as RefObject<HTMLInputElement>}
              type={stage === "email" ? "email" : "text"}
              value={stage === "name" ? name : email}
              onChange={(event) => {
                if (stage === "name") {
                  onNameChange(event.target.value);
                } else {
                  onEmailChange(event.target.value);
                }
              }}
              placeholder={
                stage === "name" ? "Enter your name..." : "you@example.com"
              }
              className='w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-white/20 focus:border-fuchsia-400/40 focus:bg-white/[0.05]'
            />
          )}
        </div>

        {error && (
          <div className='mt-3 font-mono text-xs text-red-400'>
            <span>&gt; ERROR:</span> {error}
          </div>
        )}

        <button
          type='submit'
          className='mt-4 rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 font-mono text-xs text-fuchsia-300 transition hover:border-fuchsia-400/40 hover:bg-fuchsia-400/15'
        >
          {stage === "message" ? "TRANSMIT →" : "CONTINUE →"}
        </button>
      </form>
    </div>
  );
}
