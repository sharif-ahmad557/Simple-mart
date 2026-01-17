import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
