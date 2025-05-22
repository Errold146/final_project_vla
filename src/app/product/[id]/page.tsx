"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import type { Product } from "@/types/Products";
import { toast } from "sonner";

export default function ProductPage() {

    const { id } = useParams(); // Obtiene el ID desde la URL
    const { product, loading, error } = useProduct(id as string);
    const { addToCart } = useCartStore(); // Hook para agregar al carrito
    const router = useRouter()
    const handleAddToCart = (product: Product) => {
        addToCart({ ...product, quantity: 1 });
        toast.success(`${product.title} agregado al carrito`);
        setTimeout(() => {
            router.push('/')
        }, 1500)
    };

    if (loading) {
        return <div className="max-w-7xl mx-auto p-4">Cargando producto...</div>;
    }

    if (error || !product) {
        return (
            <div className="max-w-7xl mx-auto p-4 text-red-500">
                Error al cargar el producto.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Imagen */}
                <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />

                {/* Información */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-xl text-green-600 font-semibold mb-4">
                        ${product.price}
                    </p>
                    <p className="text-gray-600">{product.description}</p>

                    {/* Botón para agregar al carrito */}
                    <button 
                        className="mt-6 mr-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
                        onClick={() => handleAddToCart({ ...product, quantity: 1 })} // Agrega el producto al carrito
                    >
                        Agregar al carrito
                    </button>

                    {/* Botón para regresar */}
                    <Link
                        href="/"
                        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all inline-block"
                    >
                        ← Regresar a la tienda
                    </Link>
                </div>
            </div>
        </div>
    );
}