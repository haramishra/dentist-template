import type { FooterNavigation } from "@/types";

export const footerLinks: FooterNavigation[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Jobs", href: "#" },
      { title: "Privacy Policy", href: "/legal/privacy-policy" },
      { title: "Terms of Service", href: "/legal/terms-of-service" },
      { title: "Refund Policy", href: "/legal/refund" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Pricing", href: "/pricing" },
      { title: "Blog", href: "/blog" },
      { title: "Guides", href: "/guides" },
      { title: "Change Log", href: "/releases" },
    ],
  },
  {
    title: "Locations",
    items: [
      { title: "New York", href: "#" },
      { title: "London", href: "#" },
      { title: "Tokyo", href: "#" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Web Development", href: "#" },
      { title: "SEO", href: "#" },
      { title: "Digital Marketing", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Privacy Policy", href: "/legal/privacy-policy" },
      { title: "Terms of Service", href: "/legal/terms-of-service" },
      { title: "Refund Policy", href: "/legal/refund" },
    ],
  },
];
