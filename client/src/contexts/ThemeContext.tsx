import { ThemeProvider as NextThemesProvider } from "next-themes";
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
    // If not switchable, just render children with static theme class
    return (
      <div className={defaultTheme}>
        {children}
      </div>
    );
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
