import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { nav } from "@/config/nav-menu";
import type { MenuItem, NavItem } from "@/types";

import { Logo } from "../logo";
import { siteConfig } from "@/config/site";

export function MainNavigationMenu({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {nav.navItems.map((item: NavItem) => (
          <NavigationMenuItem key={item.value.title}>
            {item.discriminant === "plainLink" ? (
              <a
                href={item.value.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === item.value.href
                    ? "text-accent-foreground"
                    : "text-foreground"
                )}
              >
                {item.value.title}
              </a>
            ) : (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    item.value.items.some((i) => pathname.includes(i.href))
                      ? "text-accent-foreground"
                      : "text-foreground"
                  )}
                >
                  {item.value.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                        href="/"
                      >
                        <Logo className="size-8" />
                        <div className="mt-3 mb-2 text-lg font-medium">
                          {siteConfig.name}
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {siteConfig.title}
                        </p>
                      </a>
                    </li>
                    {item.value.items.map((component: MenuItem) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        description={component.description}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
  forceReload,
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <a
        target={target}
        href={disabled ? undefined : href}
        {...(forceReload ? { "data-astro-reload": true } : {})}
        className={cn(
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
          disabled
            ? "text-muted-foreground hover:text-muted-foreground hover:bg-transparent"
            : ""
        )}
      >
        <div className="flex items-center text-sm leading-none font-medium">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              className="h-5 px-1.5 text-xs font-medium"
            >
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge className="h-5 bg-[#ebf5ff] px-1.5 text-xs font-medium text-[#0068d6] hover:bg-[#ebf5ff]">
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {description}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
