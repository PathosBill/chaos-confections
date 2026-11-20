import Image from "next/image";
import SocialBadges from "@/components/SocialBadges";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-ink bg-blue text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <Image
            src="/logo.jpg"
            alt="Chaos Confections"
            width={48}
            height={48}
            className="rounded-full border-3 border-ink"
          />
          <div>
            <p className="font-display text-xl tracking-wide text-yellow">
              Chaos Confections
            </p>
            <p className="mt-2">
              A little chaos, a lotta YUM!
            </p>
            <div className="mt-4">
              <SocialBadges />
            </div>
          </div>
        </div>
        <div>
          <p className="font-display text-lg tracking-wide text-yellow">Located in</p>
          <p className="mt-2">Crestview, Austin, TX</p>
        </div>
        <div>
          <p className="font-display text-lg tracking-wide text-yellow">Hours</p>
          <p className="mt-2">Tue–Fri: 7am – 5pm</p>
          <p>Sat: 8am – 3pm</p>
          <p>Sun–Mon: Closed</p>
        </div>
      </div>
      <div className="border-t-4 border-ink bg-ink px-6 py-3 text-center text-sm text-paper/80">
        © 2026 Chaos Confections. All rights reserved.
      </div>
    </footer>
  );
}
