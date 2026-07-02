"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { getFirebaseAuth } from "@/features/account/firebase";
import { ensureUserDoc } from "@/features/account/userStore";

type Mode = "signin" | "signup";

export default function AccountClient() {
  const router = useRouter();
  const auth = useMemo(() => getFirebaseAuth(), []);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>("signin");

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, [auth]);

  async function handleEmailAuth(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const t = toast.loading(mode === "signin" ? "Signing in..." : "Creating your account...");
    try {
      if (mode === "signin") {
        const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
        await ensureUserDoc(cred.user);
        toast.success("Welcome back — signed in successfully.", { id: t });
        router.push("/");
        return;
      }

      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      if (displayName.trim()) {
        await updateProfile(cred.user, { displayName: displayName.trim() });
      }
      await ensureUserDoc(cred.user);
      await sendEmailVerification(cred.user);
      toast.success("Account created. Verification email sent.", { id: t });
      router.push("/");
    } catch (err: unknown) {
      toast.error(getFriendlyAuthError(err), { id: t });
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setBusy(true);
    const t = toast.loading("Signing in with Google...");
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      await ensureUserDoc(cred.user);
      toast.success("Signed in with Google.", { id: t });
      router.push("/");
    } catch (err: unknown) {
      toast.error(getFriendlyAuthError(err), { id: t });
    } finally {
      setBusy(false);
    }
  }

  async function handleForgotPassword() {
    if (!email.trim()) {
      toast.error("Enter your email first, then click “Forgot password”.");
      return;
    }
    setBusy(true);
    const t = toast.loading("Sending reset email...");
    try {
      await sendPasswordResetEmail(auth, email.trim());
      toast.success("Password reset email sent.", { id: t });
    } catch (err: unknown) {
      toast.error(getFriendlyAuthError(err), { id: t });
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    setBusy(true);
    const t = toast.loading("Logging out...");
    try {
      await signOut(auth);
      toast.success("Logged out.", { id: t });
    } catch (err: unknown) {
      toast.error(getFriendlyAuthError(err), { id: t });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <Toaster richColors position="top-right" />

      <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Account</h1>
            <p className="mt-2 text-zinc-400">
              Sign in to manage your profile and access future features like Orders, Wallet, and more.
            </p>
          </div>
        </div>

        <div className="mt-8">
          {loading ? (
            <div className="rounded-xl border border-white/10 bg-black/40 p-6 text-zinc-400">
              Loading your session...
            </div>
          ) : user ? (
            <AuthenticatedView user={user} onLogout={handleLogout} busy={busy} />
          ) : (
            <UnauthenticatedView
              mode={mode}
              setMode={setMode}
              onSubmit={handleEmailAuth}
              onGoogle={handleGoogle}
              onForgotPassword={handleForgotPassword}
              busy={busy}
              displayName={displayName}
              setDisplayName={setDisplayName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function UnauthenticatedView(props: {
  mode: Mode;
  setMode: (m: Mode) => void;
  onSubmit: (e: React.FormEvent) => void;
  onGoogle: () => void;
  onForgotPassword: () => void;
  busy: boolean;
  displayName: string;
  setDisplayName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
}) {
  const { mode, setMode, onSubmit, onGoogle, onForgotPassword, busy } = props;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              mode === "signin" ? "bg-blue-600 text-white" : "text-zinc-300 hover:bg-white/5"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              mode === "signup" ? "bg-blue-600 text-white" : "text-zinc-300 hover:bg-white/5"
            }`}
          >
            Create Account
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4" aria-label="Email authentication form">
          {mode === "signup" && (
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-zinc-300">
                Display Name
              </label>
              <input
                id="displayName"
                value={props.displayName}
                onChange={(e) => props.setDisplayName(e.target.value)}
                placeholder="Your name"
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                autoComplete="name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              id="email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
              id="password"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
              type="password"
              required
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-black px-4 py-2.5 text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              minLength={6}
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={busy}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {mode === "signin" ? "Sign In" : "Create Account"}
            </button>
            <button
              type="button"
              onClick={onForgotPassword}
              disabled={busy}
              className="text-sm font-medium text-blue-400 hover:text-blue-300 disabled:opacity-70"
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
        <h2 className="font-display text-xl font-semibold text-white">Continue with</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Use Google to sign in quickly. We’ll create your account automatically if you’re new.
        </p>

        <button
          type="button"
          onClick={onGoogle}
          disabled={busy}
          className="mt-6 w-full rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Continue with Google
        </button>

        <div className="mt-6 rounded-xl border border-white/10 bg-zinc-950 p-4 text-xs leading-6 text-zinc-500">
          By continuing, you agree to our Terms of Service and acknowledge our Privacy Policy.
        </div>
      </div>
    </div>
  );
}

function AuthenticatedView(props: { user: User; onLogout: () => void; busy: boolean }) {
  const { user, onLogout, busy } = props;
  const createdAt = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
        <h2 className="font-display text-xl font-semibold text-white">Profile</h2>
        <dl className="mt-5 space-y-3 text-sm">
          <Row label="Display name" value={user.displayName ?? "—"} />
          <Row label="Email" value={user.email ?? "—"} />
          <Row label="Email verified" value={user.emailVerified ? "Verified" : "Not verified"} />
          <Row label="Member since" value={createdAt} />
        </dl>

        {!user.emailVerified && (
          <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            Please verify your email address. Check your inbox (and spam folder).
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
        <h2 className="font-display text-xl font-semibold text-white">Actions</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Account features like Orders, Wallet, and Profile editing will appear here soon.
        </p>

        <button
          type="button"
          onClick={onLogout}
          disabled={busy}
          className="mt-6 w-full rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-zinc-950 px-4 py-3">
      <dt className="text-zinc-500">{label}</dt>
      <dd className="font-medium text-white">{value}</dd>
    </div>
  );
}

function getFriendlyAuthError(err: unknown): string {
  const message = err instanceof Error ? err.message : String(err);

  if (message.includes("auth/invalid-credential")) return "Invalid email or password.";
  if (message.includes("auth/invalid-email")) return "Please enter a valid email address.";
  if (message.includes("auth/user-not-found")) return "No account found for that email.";
  if (message.includes("auth/wrong-password")) return "Incorrect password.";
  if (message.includes("auth/email-already-in-use")) return "This email is already in use.";
  if (message.includes("auth/weak-password")) return "Password is too weak (min 6 characters).";
  if (message.includes("auth/popup-closed-by-user")) return "Google sign-in popup was closed.";
  if (message.includes("auth/cancelled-popup-request")) return "Google sign-in was cancelled.";

  return "Something went wrong. Please try again.";
}

