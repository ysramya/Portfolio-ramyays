"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I can tell you about Ramya's work, process, and background. What would you like to know?",
    },
  ]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: next.slice(-14) }),
      });
      const data = await res.json().catch(() => ({}));
      // 503 means the server has no API key configured — that's a setup
      // problem, not a transient one, so retrying won't help and the copy
      // shouldn't imply it might.
      const fallback =
        res.status === 503
          ? "The chat assistant is offline right now, but Ramya reads every email — ys.ramya@gmail.com."
          : "Something went wrong on my end. You can reach Ramya at ys.ramya@gmail.com!";
      const reply: string = data.reply ?? fallback;
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Something went wrong. You can reach Ramya at ys.ramya@gmail.com!",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong w-[320px] rounded-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="Chat with Ramya's assistant"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <p className="text-sm font-semibold">Ramya&rsquo;s Assistant</p>
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[300px] min-h-[160px] p-3 flex flex-col gap-2">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "self-end bg-[var(--color-green)] text-black"
                      : "glass self-start text-[var(--color-ink-muted)]"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {busy && (
                <div className="glass self-start rounded-lg px-3 py-2 text-sm text-[var(--color-ink-faint)]">
                  Typing…
                </div>
              )}
            </div>
            <div className="flex gap-2 p-3 border-t border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about Ramya's work…"
                className="glass flex-1 rounded-full px-3 py-2 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-green)]"
              />
              <button
                onClick={send}
                aria-label="Send message"
                className="w-9 h-9 shrink-0 rounded-full bg-[var(--color-green)] text-black flex items-center justify-center"
              >
                ↑
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-[var(--color-green)] text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
}
