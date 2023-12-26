import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, Box } from "@mui/material";
import grey from "@mui/material/colors/grey";

const font = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Userbase Admin",
    template: "%s | Userbase Admin",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            minHeight="100vh"
            minWidth="100vw"
            bgcolor={grey["100"]}
          >
            {children}
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
