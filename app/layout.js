import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Maintenance from './components/maintenance/Maintenance';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cinepedia",
  description:
    "Discover the ultimate guide to packed movies! Find top-rated thrillers, reviews, trailers, and release dates. Your one-stop shop for adrenaline-fueled entertainment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Maintenance />
        <Footer />
      </body>
    </html>
  );
}
