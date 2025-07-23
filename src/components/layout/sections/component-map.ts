interface ComponentProp {
  name: string;
  type: string;
}

interface ComponentDefinition {
  name: string;
  location: string;
  description: string;
  props: ComponentProp[];
}

export const componentMap: ComponentDefinition[] = [
  {
    name: "FlexWithImage",
    location: "src/components/layout/sections/flex-with-image.astro",
    description:
      "A flexible layout section with an image and textual content, including a heading, title, description, and a call-to-action button. The layout order can be reversed.",
    props: [
      { name: "heading", type: "string" },
      { name: "title", type: "string" },
      { name: "details", type: "string" },
      { name: "cta", type: "string" },
      { name: "ctaLink", type: "string" },
      { name: "image", type: "ImageMetadata" },
      { name: "alt", type: "string" },
      { name: "reverse", type: "boolean" },
    ],
  },
  {
    name: "CardWithCTA",
    location: "src/components/layout/sections/card-with-CTA.astro",
    description:
      "A card component that displays a title, description, and optional call-to-action buttons. It supports a default slot for additional content.",
    props: [
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "CTA", type: "{ title: string; href: string; }" },
      { name: "secondaryCTA", type: "{ title: string; href: string; }" },
    ],
  },
  {
    name: "Grid",
    location: "src/components/layout/sections/grid.astro",
    description:
      "A responsive grid layout component that arranges its children in a 1, 2, or 3 column grid depending on screen size, with a default gap of 6 units. It accepts a default slot for content.",
    props: [{ name: "className", type: "string" }],
  },
];
