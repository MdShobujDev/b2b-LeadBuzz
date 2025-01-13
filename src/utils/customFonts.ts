import localFont from "next/font/local";

export const OpenSansFonts = localFont({
  src: [
    {
      path: "../app/fonts/Open_Sans/static/OpenSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../app/fonts/Open_Sans/static/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/Open_Sans/static/OpenSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../app/fonts/Open_Sans/static/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "../app/fonts/Open_Sans/static/OpenSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-OpenSans",
});
