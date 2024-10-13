// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionLayout from "@/components/SessionLayout";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionLayout>
          <Navbar />
          {children}
          <Footer />
        </SessionLayout>
      </body>
    </html>
  );
}
