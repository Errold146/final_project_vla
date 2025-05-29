"use client";

import Link from "next/link";
import Image from "next/image";
import { useCategories } from "@/hooks/useCategories";
import { useCartStore } from "@/store/cartStore";
import { useState, useEffect } from "react";
import NavMenu from "../ui/NavMenu";
import SearchBar from "../ui/SearchBar"; // Sin prop `onSearch`

export default function Navbar() {
    const { categories, loading, error } = useCategories();
    const { cart } = useCartStore();
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setTotalItems(cart.reduce((acc, item) => acc + item.quantity, 0));
    }, [cart]);

    return (
        <nav className="bg-gradient-to-r from-blue-300 via-cyan-400 to-green-400 shadow-md p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center gap-4 cursor-pointer">
                        <Image src="/Fronty.png" alt="Logo MicroWeb-cr" width={38} height={38} priority className="h-8 w-auto" />
                        <span className="text-2xl font-bold text-white">MicroWeb-cr Store</span>
                    </div>
                </Link>

                {/* Barra de búsqueda */}
                <div className="hidden md:block flex-1 px-4  text-gray-600 mx-5">
                    <SearchBar /> 
                </div>

                {/* Enlaces de navegación */}
                <div className="flex items-center gap-6">
                    <NavMenu /> {/* Menú desplegable */}

                    {/* Icono del carrito con cantidad dinámica */}
                    <Link href="/cart">
                        <div className="relative cursor-pointer">
                            <span className="text-2xl text-white">🛒</span>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-3 bg-green-500 text-white rounded-full px-2 text-xs">
                                    {totalItems}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}