import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import AuthenticationForm from "@/components/Authentication/AuthenticationForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/dashboard"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <PanelsTopLeft className="w-6 h-6 mr-3" />
            <span className="font-bold">Crypto Recovery</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button asChild variant="default">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Crypto Recovery Dashboard
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Recuperare fonduri crypto trimise către scamerinused bandwidth and earn passive income. Monitor your earnings, bandwidth usage, and get paid automatically.
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
