import Image from "next/image";
import Link from "next/link";
import Squiggle from "@/components/Squiggle";

const featured = [
  {
    name: "Cookies",
    description:
      "Stuffed, stacked, and never baked the same way twice. Brown-butter chocolate chip is the one people fight over.",
  },
  {
    name: "Cakes",
    description:
      "Lopsided layers, drips that run where they want to. We build them tall and let gravity have a say.",
  },
  {
    name: "Cupcakes",
    description:
      "A rotating flavor lineup, frosted a little too high on purpose. By the dozen, no two swirled quite alike.",
  },
  {
    name: "Pastries",
    description:
      "Croissants laminated past the point of reason. Scones with whatever's ripe that week, folded in heavy-handed.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="wave-band relative overflow-hidden bg-navy pb-20 pt-14 torn-bottom sm:pb-28 sm:pt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
          <Image
            src="/logo.jpg"
            alt="Chaos Confections badge logo: a chef holding a whisk, flanked by lightning bolts over ocean waves"
            width={176}
            height={176}
            className="-rotate-3 rounded-full border-4 border-gold shadow-lg"
            priority
          />
          <div>
            <p className="text-sm font-semibold text-ocean-light">
              Riverton, Ohio — baked fresh since the oven first worked
            </p>
            <h1 className="badge-text mt-3 font-display text-6xl leading-none text-orange sm:text-8xl">
              CHAOS
              <br />
              CONFECTIONS
            </h1>
          </div>
          <p className="max-w-xl text-lg text-cream">
            Beautifully unhinged baked goods. We stack it too high, frost it
            too fast, and bake it fresh anyway — every single day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-orange px-6 py-3 font-bold text-cream shadow-md transition-transform hover:-translate-y-0.5"
            >
              See the Menu
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-gold px-6 py-3 font-bold text-cream transition-transform hover:-translate-y-0.5"
            >
              Order Chaos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3">
            <Squiggle color="orange" />
            <h2 className="font-display text-3xl text-navy sm:text-4xl">
              What we bake
            </h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <div key={item.name} className="rounded-2xl border-2 border-navy/10 bg-white p-6 shadow-sm">
                <div className="inline-block rounded-full border-2 border-gold bg-navy px-4 py-1 font-display text-lg text-orange">
                  {item.name}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wave-band bg-ocean py-16 text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <div className="flex h-32 w-32 rotate-6 items-center justify-center rounded-full border-4 border-dashed border-gold text-center font-display text-sm leading-tight">
            FRESH
            <br />
            CHAOS
            <br />
            DAILY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl">
            Planning something that calls for cake?
          </h2>
          <p className="max-w-xl text-cream/90">
            Birthdays, weddings, or a Tuesday that needs fixing — tell us the
            occasion and we&apos;ll bring the mess.
          </p>
          <Link
            href="/contact"
            className="rounded-full border-2 border-cream px-6 py-3 font-bold text-cream transition-colors hover:bg-cream hover:text-ocean"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
