export type FooterNavigation = {
  title: string;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: MenuItem[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  title: string;
  ogImage: string;
  whatsappNumber: string;
  socialLinks: {
    type: string;
    link: string;
    Icon: string;
  }[];
  analytics?: {
    googleAnalyticsId: string;
  };
  Logo?: {
    path: string;
    alt: string;
    width: number;
    height: number;
  };
  settings?: {
    search: boolean;
    sticky_header: boolean;
    pagination: number;
    summary_length: number;
  };
  params?: {
    contact_form_action: string;
    copyright: string;
  };
  mainCTA: {
    title: string;
    href: string;
    icon?: React.ElementType;
  };
  secondaryCTA?: {
    title: string;
    href: string;
  };
  contact?: {
    email: { link: string; title: string }[];
    phone: { link: string; title: string }[];
    address: { link: string; title: string }[];
  };
};

export type PlainLink = {
  discriminant: "plainLink";
  value: {
    title: string;
    href: string;
  };
};

export type MenuItem = {
  title: string;
  href: string;
  description?: string;
  launched?: boolean;
  disabled?: boolean;
  external?: boolean;
  forceReload?: boolean;
};

export type Dropdown = {
  discriminant: "dropdown";
  value: {
    title: string;
    items: MenuItem[];
  };
};

export type NavItem = PlainLink | Dropdown;

export type NavCTA = {
  title: string;
  href: string;
  icon?: React.ElementType;
};

export type Navigation = {
  navItems: NavItem[];
  navCTA: NavCTA;
  navCTASecondary?: NavCTA;
};

export type SidebarItem = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  items?: {
    title: string;
    href: string;
    description?: string;
  }[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

// Animes types
export type Airing = {
  id: number;
  episode: number;
  airingAt: number;
  media: Media;
};

export type Media = {
  id: number;
  title: Title;
  coverImage: CoverImage;
  isAdult: boolean;
};

type Title = {
  userPreferred: string;
};

type CoverImage = {
  extraLarge: string;
  large: string;
};

export type InfoList = {
  icon: string;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
};

export type FeaturesLdg = {
  title: string;
  description: string;
  icon?: string;
  link?: string;
};
