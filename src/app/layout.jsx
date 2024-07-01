import siteConfig from "@/config/siteConfig.json";

import { AppContextProvider } from "@/context/app.context";
import { Toaster } from "sonner";

import "@/style/main.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="shortcut icon" href={siteConfig.site_info.favicon} />
      </head>
      <body suppressHydrationWarning={true}>
        <AppContextProvider>
          <div id="overlay-container"></div>
          {children}
          <Toaster />
        </AppContextProvider>
      </body>
    </html>
  );
}
