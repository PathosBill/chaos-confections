type SquiggleProps = {
  color?: "red" | "blue" | "yellow" | "cyan";
  className?: string;
};

const fillByColor: Record<string, string> = {
  red: "var(--red)",
  blue: "var(--blue)",
  yellow: "var(--yellow)",
  cyan: "var(--cyan)",
};

export default function Squiggle({ color = "red", className = "" }: SquiggleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-8 w-8 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M13 2 L4 14 H10.5 L9 22 L20 9 H13.5 L13 2 Z"
        fill={fillByColor[color]}
        stroke="var(--ink)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
