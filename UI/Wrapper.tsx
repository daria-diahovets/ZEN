"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useContext(ThemeContext);
  return <div className={`${theme} wrapper`}>{children}</div>;
}
