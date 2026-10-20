import type { Metadata } from "next";
import Squiggle from "@/components/Squiggle";

export const metadata: Metadata = {
  title: "Menu | Chaos Confections",
  description: "Cookies, cakes, cupcakes, and pastries baked fresh daily.",
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type Category = {
  name: string;
  color: "orange" | "ocean" | "navy";
  items: MenuItem[];
};

const colorMap: Record<Category["color"], string> = {
  orange: "text-orange",
  ocean: "text-ocean",
  navy: "text-navy",
};

const menu: Category[] = [
  {
    name: "Cookies",
    color: "orange",
    items: [
      {
        name: "The Pile-Up (Brown-Butter Chocolate Chip)",
        description: "Our signature cookie, finished with too much sea salt.",
        price: "$3.50",
      },
      {
        name: "Snickerdoodle",
        description: "Soft, chewy, rolled hard in cinnamon sugar.",
        price: "$3.00",
      },
      {
        name: "Oatmeal Raisin",
        description: "Classic recipe, plump raisins, a hit of nutmeg.",
        price: "$3.00",
      },
      {
        name: "Blackout (Double Chocolate)",
        description: "Rich cocoa cookie loaded with dark chocolate chunks.",
        price: "$3.50",
      },
    ],
  },
  {
    name: "Cakes & Cupcakes",
    color: "ocean",
    items: [
      {
        name: "Classic Vanilla Layer Cake",
        description: "Vanilla bean cake, buttercream piled high. Serves 10–12.",
        price: "$42",
      },
      {
        name: "Chocolate Fudge Cake",
        description: "Deep chocolate cake, fudge frosting, zero restraint. Serves 10–12.",
        price: "$45",
      },
      {
        name: "Build-Your-Own Celebration Cake",
        description: "Tell us the occasion and flavors — we'll design the chaos together.",
        price: "From $60",
      },
      {
        name: "Cupcakes (dozen)",
        description: "Ask what's in rotation this week. It changes on a whim.",
        price: "$30 / dozen",
      },
    ],
  },
  {
    name: "Pastries",
    color: "navy",
    items: [
      {
        name: "Butter Croissant",
        description: "Laminated past the point of reason, baked each morning.",
        price: "$4.00",
      },
      {
        name: "Almond Croissant",
        description: "Filled and topped with almond cream, no apologies.",
        price: "$4.75",
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Vanilla pastry cream, fruit from local orchards, piled on uneven.",
        price: "$5.50",
      },
      {
        name: "Cinnamon Scone",
        description: "Tender scone, heavy-handed cinnamon-sugar crumble.",
        price: "$3.75",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-5xl text-navy sm:text-6xl">The Menu</h1>
      <p className="mt-4 max-w-xl text-navy/70">
        Everything below is baked in-house, in small batches, every day.
        Prices and flavors shift — call ahead for large orders.
      </p>

      <div className="mt-12 space-y-14">
        {menu.map((category) => (
          <section key={category.name}>
            <div className="flex items-center gap-2">
              <Squiggle color={category.color} />
              <h2 className={`font-display text-2xl ${colorMap[category.color]}`}>
                {category.name}
              </h2>
            </div>
            <div className="mt-6 space-y-5">
              {category.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-navy">{item.name}</span>
                    <span
                      aria-hidden="true"
                      className="flex-1 translate-y-[-3px] border-b-2 border-dotted border-navy/30"
                    />
                    <span className="font-bold text-navy">{item.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-navy/60">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
