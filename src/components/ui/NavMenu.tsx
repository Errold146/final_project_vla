"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCategories } from "@/hooks/useCategories";

// Mapeo de categorías para presentar las etiquetas en español.
const categoryMap: { [key: string]: string } = {
    "electronics": "Electrónica",
    "jewelery": "Joyería",
    "men's clothing": "Ropa de Hombre",
    "women's clothing": "Ropa de Mujer",
};

export default function NavMenu() {
    const { categories, loading, error } = useCategories();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Modo desplegado en pantallas grandes */}
            <div className="hidden md:flex items-center gap-4">
                <div className="hidden md:flex gap-4">
                    <Link href="/admin/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                        Iniciar Sesión
                    </Link>
                    <Link href="/admin/register" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                        Crear Cuenta
                    </Link>
                </div>
                {!loading &&
                    categories.map((category) => (
                        <Link key={category} href={`/categories/${category}`} className="text-white hover:text-gray-500">
                            {categoryMap[category] || category}
                        </Link>
                    ))}
            </div>

            {/* Modo desplegable en móviles */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white text-xl p-2 focus:outline-none"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute right-0 top-12 bg-white shadow-md rounded-lg p-4 w-56 md:hidden"
                >
                    <ul className="space-y-2">
                        <Link href="/admin/login" className="block text-gray-700 hover:text-cyan-500">
                            Iniciar Sesión
                        </Link>
                        <Link href="/admin/register" className="block text-gray-700 hover:text-green-500">
                            Crear Cuenta
                        </Link>
                        {!loading &&
                            categories.map((category) => (
                                <Link key={category} href={`/categories/${category}`} className="block text-gray-700 hover:text-gray-500">
                                    {categoryMap[category] || category}
                                </Link>
                            ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
}