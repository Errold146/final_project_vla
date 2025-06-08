import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "MicroWeb-cr Store",
    description: "E-Commerce construido con Next.js y TailwindCSS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased flex flex-col min-h-screen`}>
                <Navbar />
                <main className="max-w-7xl mx-auto p-4 flex-grow">
                    {children}
                </main>
                <Toaster richColors position="top-right" />
                <Footer />
            </body>
        </html>
    );
}