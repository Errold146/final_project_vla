"use client";

import Link from "next/link";
import Image from "next/image";
import { useProducts } from "@/hooks/useProducts";
import Spinner from "@/components/ui/Spinner";
import { useRouter } from "next/navigation"; // Importamos el router
import { useEffect } from "react";
import { useSearchStore } from "@/store/searchStore";
import NoResults from "@/components/ui/NoResults";

export default function HomePage() {
    const { filteredProducts, loading, error } = useProducts();
    const { resetQuery } = useSearchStore();

    useEffect(() => {
        resetQuery();
    }, []);

    if (loading) return <Spinner />;
    if (error) return <div className="max-w-7xl mx-auto p-4 text-red-500">Error al cargar los productos</div>;

    return (
        <div className="min-h-screen max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Productos</h1>
            {filteredProducts.length === 0 ? (
                <NoResults />
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all">
                            <Link href={`/product/${product.id}`}>
                                <div className="cursor-pointer">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={200}
                                        height={200}
                                        className="w-full h-48 object-contain"
                                    />
                                    <h3 className="font-bold text-lg mt-2 text-gray-800">{product.title}</h3>
                                    <p className="text-green-600 font-medium">${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}