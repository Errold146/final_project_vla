import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // Importamos el Navbar
import { Toaster } from "sonner";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "MicroWeb-cr Store",
    description: "E-Commerce construido con Next.js y TailwindCSS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
                <Navbar /> {/* Navbar incluido para todas las páginas */}

                <main className="max-w-7xl mx-auto p-4 flex-grow">{children}</main> {/* Esto empuja el Footer hacia abajo */}

                <Toaster richColors position="top-right" />
                <Footer /> {/* Siempre estará pegado en la parte inferior */}
            </body>
        </html>
    );
}