import { useEffect, useState } from "react";
import type { AppContext, AppProps } from "next/app";

import "../styles/globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";
import { darkTheme, lightTheme, customTheme } from "../themes";

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = "dark" }: Props) {
  // console.log({theme})

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    const selectedTheme =
      cookieTheme === "light"
        ? lightTheme
        : cookieTheme === "dark"
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const cookies = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: "light" };
//   return {};
// };

export default MyApp;
