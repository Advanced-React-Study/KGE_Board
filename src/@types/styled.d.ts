import "styled-components";

export interface BackgroundColor {
  lightorange: string;
  orange: string;
  lightgrey: string;
  grey: string;
  black: string;
  white: string;
}

export interface HoverColor {
  lightorange: string;
  orange: string;
  lightgrey: string;
  grey: string;
  none: string;
}

export interface FontColor {
  black: string;
  white: string;
}

export interface Padding {
  sm: string;
  md: string;
  lg: string;
}

export interface FontSize {
  sm: string;
  md: string;
  lg: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: BackgroundColor;
    hoverColor: HoverColor;
    fontColor: FontColor;
    padding: Padding;
    fontSize: FontSize;
  }
}
