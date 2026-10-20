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
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-5xl text-navy sm:text-6xl">
        Get in Touch
      </h1>
      <p className="mt-4 max-w-xl text-navy/70">
        Questions, custom cake orders, or catering requests — tear off a
        number and call, or just send a message below.
      </p>

      <div className="mt-10 border-2 border-dashed border-navy bg-white">
        <div className="grid gap-x-10 gap-y-8 p-8 sm:grid-cols-2 sm:p-10">
          <div>
            <h2 className="font-display text-xl text-orange">Contact Details</h2>
            <dl className="mt-4 space-y-3 text-navy/80">
              <div>
                <dt className="font-bold text-navy">Phone</dt>
                <dd>{PHONE}</dd>
              </div>
              <div>
                <dt className="font-bold text-navy">Email</dt>
                <dd>hello@chaosconfections.example</dd>
              </div>
              <div>
                <dt className="font-bold text-navy">Address</dt>
                <dd>214 Maple Street, Riverton, OH 44101</dd>
              </div>
              <div>
                <dt className="font-bold text-navy">Hours</dt>
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
            <h2 className="font-display text-xl text-ocean">Send a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="flex border-t-2 border-dashed border-navy">
          {Array.from({ length: tabCount }).map((_, i) => (
            <div
              key={i}
              className={`flex flex-1 items-center justify-center py-3 ${
                i > 0 ? "border-l-2 border-dashed border-navy" : ""
              }`}
            >
              <span className="rotate-90 whitespace-nowrap text-[11px] font-bold tracking-wide text-navy/70">
                {PHONE}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
