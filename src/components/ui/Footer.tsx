"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-300 via-cyan-400 to-green-400 text-white py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Logo y descripción */}
                <div className="text-center md:text-left">
                    <Link href="/">
                        <div className="flex items-center gap-4 cursor-pointer">
                            <Image
                                src="/Fronty.png"
                                alt="Logo MicroWeb-cr"
                                width={38}
                                height={38}
                                priority
                                className="h-8 w-auto"
                            />
                            <span className="text-2xl font-bold text-white">MicroWeb-cr Store</span>
                        </div>
                    </Link>
                    <p className="text-sm text-white/80 mt-4">Soluciones inteligentes para tu e-commerce.</p>
                </div>

                {/* Enlaces rápidos */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link href="/about" className="hover:underline text-white">Sobre Nosotros</Link>
                    <Link href="/contact" className="hover:underline text-white">Contacto</Link>
                    <Link href="/privacy" className="hover:underline text-white">Política de Privacidad</Link>
                    <Link href="/terms" className="hover:underline text-white">Términos y Condiciones</Link>
                </div>

                {/* Redes sociales */}
                <div className="flex gap-4">
                    <Link href="#" className="text-xl hover:text-gray-200">
                        <FaFacebook />
                    </Link>
                    <Link href="#" className="text-xl hover:text-gray-200">
                        <FaTwitter />
                    </Link>
                    <Link href="#" className="text-xl hover:text-gray-200">
                        <FaInstagram />
                    </Link>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 text-sm text-white/80">
                © {new Date().getFullYear()} MicroWeb-cr. Todos los derechos reservados.
            </div>
        </footer>
    );
}