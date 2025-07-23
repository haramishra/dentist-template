import type { SiteConfig } from "@/types";
import { ArrowRight } from "lucide-react";

export const siteConfig: SiteConfig = {
  //meta config
  name: "smiles.co",
  title: "smiles.co - Your Brightest Smile Starts Here",
  description:
    "smiles.co provides comprehensive dental care for the whole family, ensuring healthy and radiant smiles with personalized treatment and advanced technology.",
  ogImage:
    "https://res.cloudinary.com/dq1btdcg9/image/upload/v1723759144/og-image_vkv36y.jpg",
  socialLinks: [
    {
      type: "Github",
      link: "https://github.com",
      //icon name using astro-icon
      Icon: "ri:github-fill",
    },
  ],
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Replace with your GA ID
  },
  //logo should be stored on assets folder to enable image optimization
  Logo: {
    path: "",
    alt: "",
    width: 150,
    height: 80,
  },
  settings: {
    search: true,
    sticky_header: true,
    // theme_switcher: true,
    // default_theme: "system",
    pagination: 10,
    summary_length: 200,
  },
  params: {
    contact_form_action: "",
    copyright: `Made with ❤️ by <a href="https://kohi.studio" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">Kohi studio</a>`,
  },

  mainCTA: {
    title: "Book Appointment",
    href: `/contact`,
    icon: ArrowRight,
  },
  secondaryCTA: {
    title: "Our Services",
    href: `/services`,
  },
  contact: {
    email: [{ link: "mailto:info@smiles.co", title: "info@smiles.co" }],
    phone: [{ link: "tel:+15559876543", title: "+1 (555) 987-6543" }],
    address: [
      {
        link: "https://maps.google.com/?q=456+Dental+Drive",
        title: "456 Dental Drive, Smile City, CA 90210",
      },
    ],
  },
};
