import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { FaSun as SunIcon } from "react-icons/fa";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="flex flex-col w-full h-full pt-0" lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
