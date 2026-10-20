import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-gold bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Chaos Confections"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="font-display text-2xl tracking-wide text-orange sm:text-3xl">
            Chaos Confections
          </span>
        </Link>
        <nav className="flex gap-5 text-sm font-bold text-cream sm:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-orange hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
