import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: "light" | "dark" | "system";
  switchable?: boolean;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = "light",
  switchable = false
}: ThemeProviderProps) {
  if (!switchable) {
    // If not switchable, apply theme to document element for proper CSS variable cascading
    React.useEffect(() => {
      document.documentElement.className = defaultTheme;
    }, [defaultTheme]);

    return <>{children}</>;
  }

  // If switchable, use next-themes
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

export { useTheme } from "next-themes";
