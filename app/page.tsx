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
    name: "Cakes & Cupcakes",
    panel: "bg-cyan halftone lg:col-span-2",
    description:
      "Custom from start to finish. Let your imagination run a bit wild and we'll take care of the rest!",
  },
  {
    name: "Cupcakes",
    panel: "bg-yellow halftone lg:col-span-2",
    description:
      "A rotating flavor lineup, frosted a little too high on purpose. By the dozen, no two swirled quite alike.",
  },
  {
    name: "Cake Breads",
    panel: "bg-paper lg:col-span-4",
    description:
      "Banana, lemon, pumpkin, and whatever else is ripe - perfectly baked into loaves, moist and delicious from end to end. It's sure to be gone by morning!",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="panel halftone-burst relative mt-8 overflow-hidden bg-yellow px-5 pb-12 pt-5 sm:px-10 sm:pb-16">
        <p className="caption text-sm sm:text-base">
          Meanwhile, in Austin, Texas…
        </p>
        <h1 className="sr-only">Chaos Confections</h1>
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="flex w-full max-w-[26rem] items-center justify-center sm:max-w-[40rem]">
            <Image
              src="/logo-cutout.png"
              alt="Chaos Confections badge logo: a chef holding a whisk, flanked by lightning bolts over ocean waves"
              width={1300}
              height={1299}
              className="h-auto w-[74%]"
              priority
            />
          </div>
          <div className="balloon mt-8 max-w-md text-lg">
            Beautifully unhinged baked goods. We stack it too high, frost it
            too fast, and bake it fresh anyway — every single day.
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/gallery" className="btn bg-red text-paper">
              See the gallery
            </Link>
            <Link href="/contact" className="btn bg-paper text-ink">
              Order a cake
            </Link>
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
