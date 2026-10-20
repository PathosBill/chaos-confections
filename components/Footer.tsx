import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <Image
            src="/logo.jpg"
            alt="Chaos Confections"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div>
            <p className="font-display text-xl tracking-wide text-orange">
              Chaos Confections
            </p>
            <p className="mt-2 text-cream/70">
              Wildly frosted, loudly flavored, baked fresh every morning.
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-gold">Find Us</p>
          <p className="mt-2 text-cream/70">214 Maple Street</p>
          <p className="text-cream/70">Riverton, OH 44101</p>
        </div>
        <div>
          <p className="font-bold text-ocean-light">Hours</p>
          <p className="mt-2 text-cream/70">Tue–Fri: 7am – 5pm</p>
          <p className="text-cream/70">Sat: 8am – 3pm</p>
          <p className="text-cream/70">Sun–Mon: Closed</p>
        </div>
      </div>
      <div className="border-t border-cream/15 px-6 py-4 text-center text-xs text-cream/50">
        © 2026 Chaos Confections. All rights reserved.
      </div>
    </footer>
  );
}
