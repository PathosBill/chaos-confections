import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Chaos Confections",
  description: "Get in touch with Chaos Confections for orders and questions.",
};

const PHONE = "(555) 012-3456";

export default function ContactPage() {
  const tabCount = 8;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="sfx -rotate-1 font-display text-5xl text-red sm:text-7xl">
        Get in Touch
      </h1>
      <p className="balloon mt-6 max-w-xl text-lg">
        Questions, custom cake orders, or catering requests — tear off a
        number and call, or just send a message below.
      </p>

      <div className="panel mt-14">
        <div className="grid gap-x-10 gap-y-8 p-8 sm:grid-cols-2 sm:p-10">
          <div>
            <h2 className="caption font-display text-xl normal-case">Contact details</h2>
            <dl className="mt-5 space-y-3 text-lg font-normal">
              <div>
                <dt className="font-bold">Phone</dt>
                <dd>{PHONE}</dd>
              </div>
              <div>
                <dt className="font-bold">Email</dt>
                <dd>hello@chaosconfections.example</dd>
              </div>
              <div>
                <dt className="font-bold">Address</dt>
                <dd>214 Maple Street, Riverton, OH 44101</dd>
              </div>
              <div>
                <dt className="font-bold">Hours</dt>
                <dd>
                  Tue–Fri: 7am – 5pm
                  <br />
                  Sat: 8am – 3pm
                  <br />
                  Sun–Mon: Closed
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="caption bg-cyan font-display text-xl normal-case">Send a message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="halftone flex border-t-4 border-dashed border-ink bg-yellow">
          {Array.from({ length: tabCount }).map((_, i) => (
            <div
              key={i}
              className={`flex flex-1 items-center justify-center py-3 ${
                i > 0 ? "border-l-2 border-dashed border-ink" : ""
              }`}
            >
              <span className="rotate-90 whitespace-nowrap text-[11px] font-bold tracking-wide text-ink">
                {PHONE}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
