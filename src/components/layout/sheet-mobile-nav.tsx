import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { nav } from "@/config/nav-menu";
import type { NavItem } from "@/types";
import { Menu } from "lucide-react";
import { Logo } from "../logo";

interface SheetMobileProps {
  pathname: string;
}

export function SheetMobileNav({ pathname }: SheetMobileProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden"
        >
          <Menu className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-4">
          <a href="/" className="flex items-center">
            <Logo className="size-10" />
          </a>
        </div>
        <Separator className="my-4" />
        <ScrollArea className="h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="mb-20">
            <div className="flex flex-col space-y-3">
              {nav.navItems.map((item: NavItem) =>
                item.discriminant === "plainLink" ? (
                  <a
                    key={item.value.href}
                    href={item.value.href}
                    className={cn(
                      "text-foreground",
                      pathname === item.value.href && "text-primary"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.value.title}
                  </a>
                ) : (
                  <div
                    key={item.value.title}
                    className="flex flex-col space-y-3 pt-6"
                  >
                    <h4
                      className={cn(
                        item.value.items.some((i) => pathname.includes(i.href))
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.value.title}
                    </h4>
                    <div className="border-l-border ml-5 flex flex-col space-y-2 border-l-2 pl-3">
                      {item.value.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "text-muted-foreground",
                            pathname.includes(subItem.href) && "text-foreground"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              {nav.navCTASecondary && (
                <a
                  href={nav.navCTASecondary.href}
                  className="text-muted-foreground flex items-center"
                  onClick={() => setOpen(false)}
                >
                  {nav.navCTASecondary.icon && (
                    <nav.navCTASecondary.icon className="mr-2 size-4" />
                  )}
                  {nav.navCTASecondary.title}
                </a>
              )}
              <a
                href={nav.navCTA.href}
                className="text-muted-foreground flex items-center"
                onClick={() => setOpen(false)}
              >
                {nav.navCTA.icon && <nav.navCTA.icon className="mr-2 size-4" />}
                {nav.navCTA.title}
              </a>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
