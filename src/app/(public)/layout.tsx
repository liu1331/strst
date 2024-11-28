"use client"
import {Header} from "@/widgets/Header";
import { useTheme } from "next-themes";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {theme}= useTheme()
  console.log(theme);
  
  return (
    <>
      <Header type="public" />
      {children}
    </>
  );
}
