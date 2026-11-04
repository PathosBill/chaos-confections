// placeholder profile URLs; swap in the bakery's real handles
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/chaosconfections",
    color: "bg-cyan",
    icon: (
      <path
        d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.5V11H7v4h3v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@chaosconfections",
    color: "bg-yellow",
    icon: (
      <path
        d="M16 3c.3 2.2 1.8 3.8 4 4v3.2c-1.5 0-2.9-.5-4-1.2V15a6 6 0 1 1-6-6v3.3a2.7 2.7 0 1 0 2.7 2.7V3H16z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chaosconfections",
    color: "bg-red",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </g>
    ),
  },
];

export default function SocialBadges() {
  return (
    <ul className="flex gap-3">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chaos Confections on ${social.label}`}
            className={`btn flex h-12 w-12 items-center justify-center rounded-full p-0 text-ink ${social.color}`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {social.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
