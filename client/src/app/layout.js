import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SimpleMart | Premium E-commerce Experience",
  description: "Discover and manage a world of premium products with ease.",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
    apple: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          <main className="flex-grow">{children}</main>

          <Footer />

          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "12px",
                background: "#333",
                color: "#fff",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
