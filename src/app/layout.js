import { CartProvider } from "@/providers/cartProvider";
import DashboardToggleProvider from "@/providers/dashboardToggleProvider";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import { cookies } from "next/headers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PiMJO | E-commerce",
  description: "PiMJO | E-commerce build using Next.js, Tailwind CSS, ReChart",
};

export default function RootLayout({ children }) {
  const theme = cookies().get("theme");
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased ${
          theme?.value === "dark" ? "dark" : ""
        }`}
      >
        <ThemeProvider>
          <DashboardToggleProvider>
            <NextAuthSessionProvider>
              <CartProvider>{children}</CartProvider>
            </NextAuthSessionProvider>
          </DashboardToggleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
