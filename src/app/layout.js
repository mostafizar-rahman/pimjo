import { CartProvider } from "@/providers/cartProvider";
import DashboardToggleProvider from "@/providers/dashboardToggleProvider";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display:"swap",

});


export const metadata = {
  title: "PiMJO | E-commerce",
  description: "PiMJO | E-commerce build using Next.js, Tailwind CSS, ReChart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <DashboardToggleProvider>
          <NextAuthSessionProvider>
            <CartProvider>{children}</CartProvider>
          </NextAuthSessionProvider>
        </DashboardToggleProvider>
      </body>
    </html>
  );
}
