import Link from "next/link";

import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-5 py-10 text-foreground sm:px-8 md:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_18%,rgba(212,175,55,0.2),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(47,111,115,0.18),transparent_30%),linear-gradient(to_bottom,rgba(11,15,25,0.88),rgba(11,15,25,1))]" />
      <div className="absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full bg-gold/18 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#2f6f73]/18 blur-[130px]" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col">
        <nav className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-heading text-2xl font-semibold text-gold"
          >
            HeritageLens AI
          </Link>
          <Link
            href="/"
            className="rounded-full border border-gold/25 bg-card-background px-4 py-2 text-sm font-semibold text-foreground/78 backdrop-blur transition duration-300 hover:border-gold/60 hover:text-foreground"
          >
            Back home
          </Link>
        </nav>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.95fr_1fr] lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 w-fit rounded-full border border-gold/30 bg-card-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur">
              Authentication
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl xl:text-6xl">
              Sign in to continue preserving cultural memory.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-foreground/70 md:text-lg">
              Use your HeritageLens account to contribute stories, review mapped
              sites, and connect local knowledge with living heritage records.
            </p>
          </div>

          <div className="rounded-xl bg-[linear-gradient(135deg,rgba(212,175,55,0.62),rgba(255,255,255,0.12),rgba(47,111,115,0.44))] p-px shadow-[0_24px_70px_rgba(0,0,0,0.35),0_0_34px_rgba(212,175,55,0.08)]">
            <div className="rounded-xl border border-white/10 bg-card-background p-5 backdrop-blur-xl sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                  Welcome back
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">
                  Login
                </h2>
                <p className="mt-3 text-sm leading-6 text-foreground/62">
                  Enter your email and password. Your credentials are sent to
                  the backend authentication service.
                </p>
                <p className="mt-3 text-sm text-foreground/62">
                  New here?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-gold transition duration-300 hover:text-[#f0cb53]"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              <LoginForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
