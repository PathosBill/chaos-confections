import Image from "next/image";
import Link from "next/link";
import Squiggle from "@/components/Squiggle";

const featured = [
  {
    name: "Cookies",
    panel: "bg-paper lg:col-span-4",
    description:
      "Stuffed, stacked, and never baked the same way twice. Brown-butter chocolate chip is the one people fight over.",
  },
  {
    name: "Cakes",
    panel: "bg-cyan halftone lg:col-span-2",
    description:
      "Lopsided layers, drips that run where they want to. We build them tall and let gravity have a say.",
  },
  {
    name: "Cupcakes",
    panel: "bg-yellow halftone lg:col-span-2",
    description:
      "A rotating flavor lineup, frosted a little too high on purpose. By the dozen, no two swirled quite alike.",
  },
  {
    name: "Pastries",
    panel: "bg-paper lg:col-span-4",
    description:
      "Croissants laminated past the point of reason. Scones with whatever's ripe that week, folded in heavy-handed.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="panel halftone-burst relative mt-8 overflow-hidden bg-yellow px-5 pb-12 pt-5 sm:px-10 sm:pb-16">
        <p className="caption text-sm sm:text-base">
          Meanwhile, in Riverton, Ohio…
        </p>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="burst mx-auto flex h-80 w-80 items-center justify-center bg-red sm:h-[26rem] sm:w-[26rem]">
            <Image
              src="/logo.jpg"
              alt="Chaos Confections badge logo: a chef holding a whisk, flanked by lightning bolts over ocean waves"
              width={256}
              height={256}
              className="h-auto w-48 -rotate-6 rounded-full border-4 border-ink sm:w-64"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="sfx -rotate-2 font-display text-6xl leading-[0.95] text-red sm:text-7xl">
              Chaos
              <br />
              Confections!
            </h1>
            <div className="balloon mt-8 max-w-md text-lg md:ml-4">
              Beautifully unhinged baked goods. We stack it too high, frost it
              too fast, and bake it fresh anyway — every single day.
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link href="/gallery" className="btn bg-red text-paper">
                See the gallery
              </Link>
              <Link href="/contact" className="btn bg-paper text-ink">
                Order a cake
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center gap-3">
          <Squiggle color="red" />
          <h2 className="font-display text-3xl sm:text-4xl">What we bake</h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {featured.map((item) => (
            <div key={item.name} className={`panel ${item.panel}`}>
              <p className="caption -ml-1 -mt-1 font-display text-xl normal-case">
                {item.name}
              </p>
              <p className="max-w-prose p-5 pt-4 text-lg leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel mt-16 grid items-center gap-8 bg-blue p-8 text-paper sm:p-10 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-display text-3xl tracking-wide sm:text-4xl">
            Planning something that calls for cake?
          </h2>
          <p className="mt-3 max-w-xl text-lg">
            Birthdays, weddings, or a Tuesday that needs fixing — tell us the
            occasion and we&apos;ll bring the mess.
          </p>
        </div>
        <Link href="/contact" className="btn justify-self-start bg-yellow text-ink">
          Get in touch
        </Link>
      </section>
    </div>
  );
}
