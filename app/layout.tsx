import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "宠物洗护 | 沐爪宠物洗护中心",
  description: "为猫狗提供洗澡、吹干、护理、开结和造型服务的宠物洗护网站。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
