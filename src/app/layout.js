import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";

const rubic = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Bookmark responsive landing page",
  description:
    "Frontend Mentor | Bookmark landing page | Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubic.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
