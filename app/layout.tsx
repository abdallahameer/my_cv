import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Snowfall from "./components/snowFallEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="flex flex-col w-full h-full pt-0" lang="en">
      <body className="min-h-screen w-full flex flex-col">
        <Snowfall />
        <Header />
        <main className="flex-1 w-full pt-[60px] z-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
