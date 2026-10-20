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
        <label htmlFor="name" className="block text-sm font-bold text-navy">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full border-0 border-b-2 border-navy/30 bg-transparent px-1 py-2 text-navy outline-none focus:border-orange"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-navy">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full border-0 border-b-2 border-navy/30 bg-transparent px-1 py-2 text-navy outline-none focus:border-orange"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-navy">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1 w-full border-2 border-navy/30 bg-transparent px-3 py-2 text-navy outline-none focus:border-orange"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-orange px-6 py-3 font-bold text-cream shadow-md transition-transform hover:-translate-y-0.5"
      >
        Send It
      </button>
      <p className="text-xs text-navy/50">
        Opens your email app with this pre-filled to {BAKERY_EMAIL}.
      </p>
    </form>
  );
}
