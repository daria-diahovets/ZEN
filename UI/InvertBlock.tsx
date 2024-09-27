"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";

export default function InvertBlock({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  const { theme } = useContext(ThemeContext);

  const style = {
    filter: theme === "dark-theme" ? "invert(1)" : "invert(0)",
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
