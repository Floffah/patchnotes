import { useContext } from "react";
import { ThemeContext } from "styled-components";

export interface Theme {
    name?: string;

    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    back: string;
    front: string;

    shiftfront: "darken" | "lighten"; // shift to front by, e.g. in light mode, lighten
    shiftback: "darken" | "lighten"; // shift to back by, e.g. in dark mode, darken
}

export const Themes = new Map<string, Theme>([]);

export const useTheme = () => useContext(ThemeContext) as Theme;
