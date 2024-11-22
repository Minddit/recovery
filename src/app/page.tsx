import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

import AuthenticationForm from "@/components/Authentication/AuthenticationForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <PanelsTopLeft className="w-6 h-6 mr-3" />
            <span className="font-bold">Data Visualization</span>
            {/* <span className="sr-only">shadcn/ui sidebar</span> */}
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            ></Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Data Visualization Dashboard
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              This interactive dashboard, built with Next.js and TypeScript,
              enables effective data visualization and analysis. It features a
              user-friendly interface for exploring diverse datasets through
              dynamic charts and graphs, enhanced by shadcn/ui.
            </span>
          </section>
          <div className="w-full flex justify-center relative">
            <AuthenticationForm />
          </div>
        </div>
      </main>
    </div>
  );
}
