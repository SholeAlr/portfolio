"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import type { Stage } from "../types";
import {
  validateContactMessage,
  validateEmail,
  validateName,
} from "../utils/validation";

const BOOT_DELAY = 450;

const bootLines = [
  "initializing communication system...",
  "scanning communication channels...",
  "email       [ONLINE]",
  "linkedin    [ONLINE]",
  "github      [ONLINE]",
  "connection established.",
];

export function useContactProtocol() {
  const [stage, setStage] = useState<Stage>("booting");
  const [bootIndex, setBootIndex] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [transmissionId, setTransmissionId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (stage !== "booting") return;

    if (bootIndex >= bootLines.length) {
      const timeout = setTimeout(() => {
        setStage("connected");
      }, BOOT_DELAY);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setBootIndex((current) => current + 1);
    }, BOOT_DELAY);

    return () => clearTimeout(timeout);
  }, [stage, bootIndex]);

  useEffect(() => {
    if (stage !== "connected") return;

    const timeout = setTimeout(() => {
      setStage("name");
    }, 700);

    return () => clearTimeout(timeout);
  }, [stage]);

  useEffect(() => {
    if (stage === "name" || stage === "email" || stage === "message") {
      inputRef.current?.focus();
    }
  }, [stage]);

  const handleNameSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateName(name);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setStage("email");
  };

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setStage("message");
  };

  const handleMessageSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateContactMessage({
      name,
      email,
      message,
    });

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setStage("transmitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save message.");
      }

      setTransmissionId(
        `#SHL-${data.id.replace(/-/g, "").substring(0, 6).toUpperCase()}`,
      );

      setStage("success");
    } catch (error) {
      console.error("Contact submission error:", error);

      setError(
        error instanceof Error ? error.message : "Failed to save your message.",
      );

      setStage("message");
    }
  };

  return {
    stage,
    bootIndex,
    bootLines,

    name,
    email,
    message,

    transmissionId,
    error,

    inputRef,

    setName,
    setEmail,
    setMessage,

    handleNameSubmit,
    handleEmailSubmit,
    handleMessageSubmit,
  };
}
