"use client";

import { ComposeChildren } from "@/shared/lib/react/composeChildren";
import { ThemeProvider } from "./themeProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
}
