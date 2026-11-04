import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Chaos Confections",
  description: "Cookies, cakes, cupcakes, and pastries fresh out of the Chaos Confections kitchen.",
};

type Photo = {
  title: string;
  caption: string;
  // path under /public, e.g. "/gallery/pile-up.jpg"; leave unset to show a placeholder
  src?: string;
  panel: string;
};

const photos: Photo[] = [
  {
    title: "The Pile-Up",
    caption: "Brown-butter chocolate chip, finished with too much sea salt.",
    panel: "bg-yellow sm:col-span-2 lg:col-span-4 aspect-[16/10]",
  },
  {
    title: "Chocolate Fudge Cake",
    caption: "Fudge frosting, zero restraint.",
    panel: "bg-cyan lg:col-span-2 aspect-[4/5] lg:aspect-auto",
  },
  {
    title: "Cupcakes by the dozen",
    caption: "Frosted a little too high on purpose.",
    panel: "bg-red lg:col-span-2 aspect-square",
  },
  {
    title: "Almond Croissant",
    caption: "Laminated past the point of reason.",
    panel: "bg-paper lg:col-span-2 aspect-square",
  },
  {
    title: "Seasonal Fruit Tart",
    caption: "Whatever's ripe, piled on uneven.",
    panel: "bg-yellow lg:col-span-2 aspect-square",
  },
  {
    title: "Celebration Cakes",
    caption: "Tell us the occasion — we'll design the chaos together.",
    panel: "bg-blue sm:col-span-2 lg:col-span-6 aspect-[16/10] lg:aspect-[3/1]",
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="sfx -rotate-1 font-display text-5xl text-yellow sm:text-7xl">
        The Gallery
      </h1>
      <p className="balloon mt-6 max-w-xl text-lg">
        A look at what comes out of the oven. Everything here is baked
        in-house, in small batches, every day.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {photos.map((photo) => (
          <figure key={photo.title} className={`panel halftone relative overflow-hidden ${photo.panel}`}>
            {photo.src ? (
              <Image
                src={photo.src}
                alt={`${photo.title}: ${photo.caption}`}
                fill
                sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <span className="border-3 border-dashed border-ink bg-paper px-4 py-2 text-center">
                  Photo coming soon
                </span>
              </div>
            )}
            <figcaption className="absolute bottom-0 left-0 right-0 border-t-4 border-ink bg-paper px-4 py-2">
              <span className="font-display text-lg tracking-wide">{photo.title}</span>
              <span className="block font-normal">{photo.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="panel mt-14 flex flex-wrap items-center justify-between gap-6 bg-paper p-6 sm:p-8">
        <p className="max-w-lg text-lg">
          Want something like this for your next occasion? Tell us what
          you&apos;re celebrating and we&apos;ll bake it.
        </p>
        <Link href="/contact" className="btn bg-red text-paper">
          Order a cake
        </Link>
      </div>
    </div>
  );
}
