type SquiggleProps = {
  color?: "navy" | "orange" | "gold" | "ocean";
  className?: string;
};

const strokeByColor: Record<string, string> = {
  navy: "var(--navy)",
  orange: "var(--orange)",
  gold: "var(--gold)",
  ocean: "var(--ocean)",
};

export default function Squiggle({ color = "navy", className = "" }: SquiggleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M13 2 L4 14 H10.5 L9 22 L20 9 H13.5 L13 2 Z"
        fill={strokeByColor[color]}
      />
    </svg>
  );
}
