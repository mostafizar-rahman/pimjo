import { CartProvider } from "@/providers/cartProvider";
import DashboardToggleProvider from "@/providers/dashboardToggleProvider";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { ThemeProvider } from "@/providers/themeProvider";
import { DM_Sans, Outfit } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal"
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal"
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
        className={`${dmSans.variable} ${outfit.variable} antialiased optim ${theme?.value === "dark" ? "dark" : ""
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
