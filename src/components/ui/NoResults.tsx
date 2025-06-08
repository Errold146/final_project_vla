import { useEffect } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HeroSection from "../layout/HeroSection";

export default function NoResults() {
    const { filteredProducts } = useProducts();
    const router = useRouter();

    useEffect(() => {
        if (filteredProducts.length > 0) {
            router.push("/");
        }
    }, [filteredProducts, router]);

    return (
        <div className="w-full flex flex-col items-center justify-center mt-20">
            <HeroSection
                title="No hay resultados"
                subtitle="Te invitamos a volver a la página principal y buscar dentro de nuestros otros productos."
            />
            <section className="mt-8 flex flex-col items-center space-y-4">
                <span className="text-6xl text-cyan-400">🔍</span>
                <h2 className="text-2xl font-bold text-gray-500 text-center">No hay productos relacionados</h2>
                <p className="text-gray-400 text-center font-semibold">
                    Intenta con otra búsqueda o revisa las categorías disponibles.
                </p>
                <Link
                    href="/"
                    className="mt-2 inline-block bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-cyan-600 transition"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                    }}
                >
                    Volver al inicio
                </Link>
            </section>
        </div>
    );
}