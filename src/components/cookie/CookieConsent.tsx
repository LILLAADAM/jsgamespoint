"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { CloseIcon } from "@/components/Icons";
import {
  acceptedAllPreferences,
  COOKIE_CONSENT_VERSION,
  defaultRejectedPreferences,
  getStoredConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
  storeConsent,
  type CookiePreferences,
} from "@/lib/cookies";

type SettingsState = {
  analytics: boolean;
  functional: boolean;
  preferences: boolean;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<SettingsState>({
    analytics: false,
    functional: false,
    preferences: false,
  });

  const savePreferences = useCallback((prefs: CookiePreferences) => {
    storeConsent(prefs);
    setVisible(false);
    setShowSettings(false);
  }, []);

  const handleAcceptAll = useCallback(() => {
    savePreferences({
      ...acceptedAllPreferences,
      timestamp: new Date().toISOString(),
    });
  }, [savePreferences]);

  const handleRejectAll = useCallback(() => {
    savePreferences({
      ...defaultRejectedPreferences,
      timestamp: new Date().toISOString(),
    });
  }, [savePreferences]);

  const handleSaveSettings = useCallback(() => {
    savePreferences({
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: settings.analytics,
      functional: settings.functional,
      preferences: settings.preferences,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  }, [savePreferences, settings]);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const stored = getStoredConsent();
      if (stored) {
        setSettings({
          analytics: stored.analytics,
          functional: stored.functional,
          preferences: stored.preferences,
        });
      }
      setShowSettings(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      aria-modal="true"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div
        className={`mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl shadow-blue-500/10 backdrop-blur-xl transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {!showSettings ? (
          <div className="p-5 sm:p-6">
            <h2 id="cookie-consent-title" className="font-display text-lg font-semibold text-white sm:text-xl">
              We Value Your Privacy
            </h2>
            <p id="cookie-consent-desc" className="mt-2 text-sm leading-6 text-zinc-400">
              JSGamesPoint uses cookies and localStorage to ensure core functionality, improve performance, and
              enhance your experience. Necessary cookies are always active. You can accept all, reject non-essential
              cookies, or manage your preferences.{" "}
              <Link href="/cookie-policy" className="text-blue-400 underline-offset-2 hover:underline">
                Cookie Policy
              </Link>
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:bg-white/5"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-400 transition-colors hover:bg-blue-500/20"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-lg font-semibold text-white">Cookie Settings</h2>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="rounded-lg p-1 text-zinc-400 hover:bg-white/10 hover:text-white"
                aria-label="Close settings"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Manage your cookie preferences. Necessary cookies cannot be disabled.
            </p>

            <div className="mt-5 space-y-4">
              <CookieToggle
                label="Necessary Cookies"
                description="Required for security, consent storage, and core site functionality."
                checked
                disabled
              />
              <CookieToggle
                label="Analytics Cookies"
                description="Help us understand site usage and improve performance."
                checked={settings.analytics}
                onChange={(v) => setSettings((s) => ({ ...s, analytics: v }))}
              />
              <CookieToggle
                label="Functional Cookies"
                description="Enable enhanced features and personalization."
                checked={settings.functional}
                onChange={(v) => setSettings((s) => ({ ...s, functional: v }))}
              />
              <CookieToggle
                label="Preference Cookies"
                description="Remember your choices for a better return experience."
                checked={settings.preferences}
                onChange={(v) => setSettings((s) => ({ ...s, preferences: v }))}
              />
              <CookieToggle
                label="Marketing Cookies"
                description="Not currently used by JSGamesPoint."
                checked={false}
                disabled
              />
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleSaveSettings}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-white/5"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CookieToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-black/50 p-4">
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="mt-1 text-xs text-zinc-500">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-blue-600" : "bg-zinc-700"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
