import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-yellow">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Chaos Confections"
            width={48}
            height={48}
            className="rounded-full border-3 border-ink"
            priority
          />
          <span className="font-display text-2xl tracking-wide text-ink sm:text-3xl">
            Chaos Confections
          </span>
        </Link>
        <nav className="flex gap-1 font-display text-base tracking-wide sm:text-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-3 border-transparent px-2.5 py-1 text-ink hover:border-ink hover:bg-red hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
