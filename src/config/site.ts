import type { SiteConfig } from "@/types";
import { ArrowRight } from "lucide-react";

export const siteConfig: SiteConfig = {
  //meta config
  name: "Astro AI Template",
  title: "Astro AI Template - Build Smarter, Faster",
  description:
    "A cutting-edge Astro template powered by AI for intelligent web development.",
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
    title: "Get Started",
    href: `/contact`,
    icon: ArrowRight,
  },
  secondaryCTA: {
    title: "Learn More",
    href: `/about`,
  },
  contact: {
    email: [{ link: "mailto:info@astroait.com", title: "info@astroait.com" }],
    phone: [{ link: "tel:+15551234567", title: "+1 (555) 123-4567" }],
    address: [
      {
        link: "https://maps.google.com/?q=123+AI+Lane",
        title: "123 AI Lane, Tech City, CA 90210",
      },
    ],
  },
};
