import type { Metadata } from "next";
import Squiggle from "@/components/Squiggle";

export const metadata: Metadata = {
  title: "About | Chaos Confections",
  description: "Our story, our manifesto, and how to find us.",
};

const manifesto = [
  {
    color: "bg-red text-paper",
    title: "Baked from scratch, every time",
    description: "No mixes, no shortcuts. If it's in the case, someone here made it by hand this morning.",
  },
  {
    color: "bg-cyan",
    title: "Local, whatever that means this week",
    description: "Eggs, dairy, and fruit from farms within an hour — swapped whenever something better turns up.",
  },
  {
    color: "bg-yellow",
    title: "Too much is the right amount",
    description: "An extra swirl, an extra layer, an extra flavor. We'd rather it be a little much than a little boring.",
  },
];

const partners = [
  {
    kind: "Dairy",
    name: "Hollow Creek Dairy",
    description: "The butter in every croissant and the cream in every frosting.",
  },
  {
    kind: "Eggs",
    name: "Sunny Acre Farm",
    description: "Pasture-raised eggs, delivered twice a week before we open.",
  },
  {
    kind: "Fruit",
    name: "Miller Family Orchard",
    description: "Apples, peaches, and berries for the tarts and scones, whatever's in season.",
  },
  {
    kind: "Flour",
    name: "Riverbend Mill",
    description: "Stone-ground flour for every cookie, cake, and croissant we bake.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="sfx -rotate-1 font-display text-5xl text-cyan sm:text-7xl">
        Our Story
      </h1>

      <div className="panel mt-10 bg-paper">
        <p className="caption -ml-1 -mt-1">Farmers market, 2016…</p>
        <div className="p-6 pt-8 sm:p-8">
          <p className="balloon text-xl leading-snug sm:text-2xl">
            It started as one overloaded card table at the farmers market. It
            has not calmed down since.
          </p>
          <div className="mt-12 space-y-4 text-lg font-normal leading-relaxed">
            <p>
              Chaos Confections started in 2016 with one oven, a stack of
              family recipes nobody followed exactly, and a card table at the
              Riverton farmers market that collapsed twice under the weight of
              too many cookies. What began as weekend baking turned into a
              full-time habit — and in 2018 we opened the doors on Maple
              Street.
            </p>
            <p>
              Today our small team still shows up before sunrise to mix, roll,
              and bake everything you&apos;ll find in the case. We never
              figured out how to make things smaller or simpler, and at this
              point we&apos;ve stopped trying.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <Squiggle color="red" />
        <h2 className="font-display text-3xl">The manifesto</h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {manifesto.map((rule) => (
          <div key={rule.title} className={`panel halftone p-5 ${rule.color}`}>
            <h3 className="font-display text-xl leading-tight tracking-wide">
              {rule.title}
            </h3>
            <p className="mt-3">{rule.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-2">
        <Squiggle color="yellow" />
        <h2 className="font-display text-3xl">Local partnerships</h2>
      </div>
      <p className="mt-4 max-w-xl text-lg font-normal">
        We don&apos;t do this alone. These Riverton-area neighbors supply what
        goes into the case every morning.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {partners.map((partner) => (
          <div key={partner.name} className="panel bg-paper">
            <p className="caption -ml-1 -mt-1 bg-cyan text-sm">{partner.kind}</p>
            <div className="p-5 pt-3">
              <h3 className="font-display text-xl tracking-wide">{partner.name}</h3>
              <p className="mt-1 font-normal">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-2">
        <Squiggle color="blue" />
        <h2 className="font-display text-3xl">Visit the bakery</h2>
      </div>
      <div className="panel mt-6 grid gap-6 bg-paper p-6 text-lg sm:grid-cols-2">
        <div>
          <h3 className="font-display tracking-wide text-red">Address</h3>
          <p className="mt-1">214 Maple Street, Riverton, OH 44101</p>
        </div>
        <div>
          <h3 className="font-display tracking-wide text-red">Hours</h3>
          <p className="mt-1">
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
