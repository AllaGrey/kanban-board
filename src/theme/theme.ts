import { DefaultTheme } from "styled-components";

type Colors = {
  bg: string;
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
  errorColor: string;
  successColor: string;
  textColor: string;
  secondaryTextColor: string;
};

type Fonts = {
  regular: string;
  medium: string;
  bold: string;
};

type Media = {
  phone: string;
  tablet: string;
  desktop: string;
};

type FontSizes = {
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  big: string;
  huge: string;
  gigantic: string;
  mega: string;
};

type BoxShadow = {
  card: string;
  cardHover: string;
  btn: string;
  btnHover: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    media: Media;
    fontSizes: FontSizes;
    boxShadow: BoxShadow;
    transition: string;
  }
}

const fonts = {
  regular: "Roboto-Regular",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
};

const media = {
  phone: "(min-width: 480px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1280px)",
};

const fontSizes = {
  xxxs: "8px",
  xxs: "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  ml: "18px",
  lg: "20px",
  xl: "24px",
  xxl: "28px",
  xxxl: "32px",
  big: "36px",
  huge: "48px",
  gigantic: "68px",
  mega: "102px",
};

const boxShadow = {
  card: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  cardHover:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
  btn: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  btnHover: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

const transition = "300ms cubic-bezier(0.4, 0, 0.2, 1)";

const colors = {
  bg: "#2A3439",
  textColor: "#F5F5F5",
  secondaryTextColor: "#AA98A9",
  mainColor: "#242124",
  secondaryColor: "#32174D",
  accentColor: "#BF00FF",
  errorColor: "#960018",
  successColor: "#8DB600",
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  media,
  fontSizes,
  boxShadow,
  transition,
};
