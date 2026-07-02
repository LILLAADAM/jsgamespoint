"use client";

import dynamic from "next/dynamic";

const AccountClient = dynamic(() => import("./AccountClient"), { ssr: false });

export default function AccountLoader() {
  return <AccountClient />;
}

