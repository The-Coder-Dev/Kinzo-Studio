import { Anton } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Kinzo - Next Gen Studio",
  description:
    "Offering Next Level Graphic Designing & Web Development services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
