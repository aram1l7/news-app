"use client";

import { GlobalStyles, darkTheme, lightTheme } from "@/constants";
import { ThemeProvider } from "styled-components";
import Toggle from "./Toggle";
import { useDarkMode } from "@/hooks/useDarkMode";

export function Providers({ children }: { children: any }) {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      {children}
    </ThemeProvider>
  );
}
