"use client";

import { useCategoryProducts } from "@/hooks/useCategoryProducts";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage() {
    const { category } = useParams();
    const { products, loading, error } = useCategoryProducts(category as string);

    if (loading) {
        return <div className="max-w-7xl mx-auto p-4">Cargando productos...</div>;
    }

    if (error || products.length === 0) {
        return (
            <div className="max-w-7xl mx-auto p-4 text-red-500">
                No se encontraron productos para esta categoría.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <Link
                href="/"
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all inline-block"
            >
                ← Regresar a la tienda
            </Link>

            <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all"
                    >
                        <Link href={`/product/${product.id}`}>
                            <div className="cursor-pointer">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={200}
                                    height={200}
                                    className="w-full h-48 object-contain"
                                />
                                <h3 className="font-bold text-lg mt-2">{product.title}</h3>
                                <p className="text-green-600 font-medium">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}