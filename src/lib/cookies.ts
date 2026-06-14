export const COOKIE_CONSENT_KEY = "jsgp_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;
export const OPEN_COOKIE_SETTINGS_EVENT = "jsgp:open-cookie-settings";

export type CookiePreferences = {
  version: number;
  necessary: true;
  analytics: boolean;
  functional: boolean;
  preferences: boolean;
  marketing: false;
  timestamp: string;
};

export const defaultRejectedPreferences: CookiePreferences = {
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  analytics: false,
  functional: false,
  preferences: false,
  marketing: false,
  timestamp: new Date().toISOString(),
};

export const acceptedAllPreferences: CookiePreferences = {
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  analytics: true,
  functional: true,
  preferences: true,
  marketing: false,
  timestamp: new Date().toISOString(),
};

export function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function storeConsent(preferences: CookiePreferences): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
}

export function openCookieSettings(): void {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
