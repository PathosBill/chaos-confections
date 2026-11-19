import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Chaos Confections",
  description: "Wedding cakes, birthday cakes, sugar work, and bakes from the Chaos Confections kitchen.",
};

type Photo = {
  title: string;
  // path under /public
  src: string;
};

const photos: Photo[] = [
  { title: "Four-tier wedding cake", src: "/gallery/wedding-four-tier.jpg" },
  { title: "Black and white rose tiers", src: "/gallery/black-white-rose-tiers.jpg" },
  { title: "Pink patterned tiers", src: "/gallery/pink-patterned-tiers.jpg" },
  { title: "Peach blossom tiers", src: "/gallery/peach-blossom-tiers.jpg" },
  { title: "Giant rainbow slice", src: "/gallery/rainbow-slice.jpg" },
  { title: "Royal icing gazebo", src: "/gallery/royal-icing-gazebo.jpg" },
  { title: "Robot birthday cake", src: "/gallery/robot-birthday.jpg" },
  { title: "Soccer birthday cake", src: "/gallery/soccer-birthday.jpg" },
  { title: "Block-head birthday cake", src: "/gallery/block-head-birthday.jpg" },
  { title: "Cowgirl first birthday", src: "/gallery/cowgirl-first-birthday.jpg" },
  { title: "Art deco 70th birthday", src: "/gallery/art-deco-70th.jpg" },
  { title: "Twin birthday sheet cake", src: "/gallery/twin-birthday-sheet.jpg" },
  { title: "Weightlifter cake", src: "/gallery/weightlifter.jpg" },
  { title: "Shark cake", src: "/gallery/shark.jpg" },
  { title: "Cartoon face cake", src: "/gallery/cartoon-face.jpg" },
  { title: "40th birthday cake", src: "/gallery/fortieth-birthday.jpg" },
  { title: "Evergreen showpiece", src: "/gallery/evergreen-showpiece.jpg" },
  { title: "Sage cameo cake", src: "/gallery/sage-cameo.jpg" },
  { title: "Sugar flower wreath", src: "/gallery/sugar-flower-wreath.jpg" },
  { title: "Sugar rose", src: "/gallery/sugar-rose.jpg" },
  { title: "Piped royal icing", src: "/gallery/piped-royal-icing.jpg" },
  { title: "Coconut layer cake", src: "/gallery/coconut-layer.jpg" },
  { title: "Fresh-baked cookies", src: "/gallery/cookies.jpg" },
  { title: "Loaf cakes", src: "/gallery/loaf-cakes.jpg" },
];

const panelColors = ["bg-yellow", "bg-cyan", "bg-red", "bg-blue"];

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

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className={`panel halftone flex flex-col overflow-hidden ${panelColors[i % panelColors.length]}`}
          >
            <div className="relative aspect-square">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex-1 border-t-4 border-ink bg-paper px-3 py-2 font-display text-sm tracking-wide sm:text-base">
              {photo.title}
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
