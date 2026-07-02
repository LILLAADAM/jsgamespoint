import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import type { User } from "firebase/auth";
import { getFirebaseDb } from "./firebase";

export type AppUserDoc = {
  displayName: string | null;
  email: string | null;
  provider: string;
  photoURL: string | null;
  role: "customer";
  createdAt: unknown;
  lastLogin: unknown;
};

function getProvider(user: User): string {
  return user.providerData?.[0]?.providerId ?? "password";
}

export async function ensureUserDoc(user: User): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const payload: AppUserDoc = {
      displayName: user.displayName ?? null,
      email: user.email ?? null,
      provider: getProvider(user),
      photoURL: user.photoURL ?? null,
      role: "customer",
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
    };
    await setDoc(ref, payload, { merge: false });
    return;
  }

  await updateDoc(ref, {
    displayName: user.displayName ?? null,
    email: user.email ?? null,
    provider: getProvider(user),
    photoURL: user.photoURL ?? null,
    lastLogin: serverTimestamp(),
  });
}

