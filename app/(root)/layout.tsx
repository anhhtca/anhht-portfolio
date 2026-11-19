import { LanguageToggle } from "@/components/common/language-toggle";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-card/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-2.5">
              <LanguageToggle className="w-full justify-center" />
              <ModeToggle />
            </div>
          </MainNav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
