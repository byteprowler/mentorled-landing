import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ByteProwler",
  description: "A Portfolio Landing Page by ByteProwler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex-col flex min-h-screen`}>
        <Header />
        <div className="flex-grow">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
