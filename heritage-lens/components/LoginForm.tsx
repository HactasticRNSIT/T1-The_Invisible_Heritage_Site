"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "./ui";

type LoginResponse = {
  message?: string;
  success: boolean;
  token?: string;
  user?: {
    email: string;
    id: string;
    name: string;
    role: string;
  };
};

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://localhost:5000";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as LoginResponse;

      if (!response.ok || !data.success || !data.token) {
        throw new Error(data.message ?? "Unable to log in. Please try again.");
      }

      window.localStorage.setItem("heritageLensToken", data.token);
      window.localStorage.setItem("heritageLensUser", JSON.stringify(data.user));
      router.push("/");
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to log in. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold text-foreground/78">
        Email
        <input
          className="h-12 rounded-xl border border-white/10 bg-background/55 px-4 text-base text-foreground outline-none transition duration-300 placeholder:text-foreground/35 focus:border-gold/70 focus:bg-background/75 focus:ring-4 focus:ring-gold/10"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-foreground/78">
        Password
        <input
          className="h-12 rounded-xl border border-white/10 bg-background/55 px-4 text-base text-foreground outline-none transition duration-300 placeholder:text-foreground/35 focus:border-gold/70 focus:bg-background/75 focus:ring-4 focus:ring-gold/10"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>

      {error ? (
        <p className="rounded-xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-100">
          {error}
        </p>
      ) : null}

      <Button
        className="mt-1 w-full"
        disabled={isSubmitting}
        type="submit"
        variant="gold"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
