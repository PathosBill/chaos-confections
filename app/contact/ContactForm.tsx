"use client";

import { useState, type FormEvent } from "react";

const BAKERY_EMAIL = "hello@chaosconfections.example";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${BAKERY_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="name" className="block font-display tracking-wide">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full border-3 border-ink bg-paper px-3 py-2 font-normal outline-none focus:bg-yellow/30 focus:shadow-[4px_4px_0_var(--ink)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-display tracking-wide">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full border-3 border-ink bg-paper px-3 py-2 font-normal outline-none focus:bg-yellow/30 focus:shadow-[4px_4px_0_var(--ink)]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-display tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1 w-full border-3 border-ink bg-paper px-3 py-2 font-normal outline-none focus:bg-yellow/30 focus:shadow-[4px_4px_0_var(--ink)]"
        />
      </div>
      <button
        type="submit"
        className="btn bg-red text-paper"
      >
        Send It
      </button>
      <p className="text-sm font-normal">
        Opens your email app with this pre-filled to {BAKERY_EMAIL}.
      </p>
    </form>
  );
}
