import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/HomePage/Header/Header";
import ThemeProvider from "@/context/Theme";

import "./globals.css";
import Wrapper from "@/UI/Wrapper";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZEN - peaceful shopping",
  description:
    "See how we can help with making your shopping experience and money management more ZEN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={nunito.className}>
          <Wrapper>
            <Header />
            {children}
          </Wrapper>
        </body>
      </html>
    </ThemeProvider>
  );
}
