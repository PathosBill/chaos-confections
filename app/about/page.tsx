import type { Metadata } from "next";
import Squiggle from "@/components/Squiggle";

export const metadata: Metadata = {
  title: "About | Chaos Confections",
  description: "Our story, our manifesto, and how to find us.",
};

const manifesto = [
  {
    color: "bg-orange",
    title: "Baked from scratch, every time",
    description: "No mixes, no shortcuts. If it's in the case, someone here made it by hand this morning.",
  },
  {
    color: "bg-ocean",
    title: "Local, whatever that means this week",
    description: "Eggs, dairy, and fruit from farms within an hour — swapped whenever something better turns up.",
  },
  {
    color: "bg-gold",
    title: "Too much is the right amount",
    description: "An extra swirl, an extra layer, an extra flavor. We'd rather it be a little much than a little boring.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-5xl text-navy sm:text-6xl">Our Story</h1>

      <p className="mt-8 -rotate-1 border-l-4 border-orange pl-6 font-display text-2xl leading-snug text-navy sm:text-3xl">
        &ldquo;It started as one overloaded card table at the farmers market.
        It has not calmed down since.&rdquo;
      </p>

      <div className="mt-8 space-y-4 text-navy/80">
        <p>
          Chaos Confections started in 2016 with one oven, a stack of family
          recipes nobody followed exactly, and a card table at the Riverton
          farmers market that collapsed twice under the weight of too many
          cookies. What began as weekend baking turned into a full-time habit
          — and in 2018 we opened the doors on Maple Street.
        </p>
        <p>
          Today our small team still shows up before sunrise to mix, roll,
          and bake everything you&apos;ll find in the case. We never figured
          out how to make things smaller or simpler, and at this point we&apos;ve
          stopped trying.
        </p>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <Squiggle color="orange" />
        <h2 className="font-display text-2xl text-navy">The manifesto</h2>
      </div>
      <div className="mt-8 space-y-6">
        {manifesto.map((rule) => (
          <div key={rule.title} className="flex gap-4">
            <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${rule.color}`} />
            <div>
              <h3 className="font-bold text-navy">{rule.title}</h3>
              <p className="mt-1 text-sm text-navy/70">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-2">
        <Squiggle color="ocean" />
        <h2 className="font-display text-2xl text-navy">Visit the bakery</h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="font-bold text-navy">Address</h3>
          <p className="mt-1 text-navy/70">214 Maple Street, Riverton, OH 44101</p>
        </div>
        <div>
          <h3 className="font-bold text-navy">Hours</h3>
          <p className="mt-1 text-navy/70">
            Tue–Fri: 7am – 5pm
            <br />
            Sat: 8am – 3pm
            <br />
            Sun–Mon: Closed
          </p>
        </div>
      </div>
    </div>
  );
}
