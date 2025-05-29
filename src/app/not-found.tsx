import HeroSection from "@/components/layout/HeroSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "No encontrado | MicroWeb-cr",
    description: "La página que buscas no existe o ha sido eliminada.",
};

export default function Custom404() {
    return (
        <div className="flex-1 w-full flex flex-col justify-center items-center mt-20">
            <div className="w-full max-w-4xl flex flex-col items-center justify-center">
                <HeroSection
                    title="¡Página no encontrada!"
                    subtitle="Lo sentimos, pero la página que buscas no existe."
                />

                <section className="mt-8 flex flex-col items-center space-y-4">
                    <span className="text-6xl text-red-500">🚫</span>
                    <h2 className="text-2xl font-bold text-gray-500 text-center">404 - Página no encontrada</h2>
                    <p className="text-gray-400 text-center font-semibold">
                        Es posible que la URL esté mal escrita o que el contenido haya sido eliminado.
                    </p>
                    <Link
                        href="/"
                        className="mt-2 inline-block bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-cyan-600 transition"
                    >
                        Volver al inicio ahora
                    </Link>
                </section>
            </div>
        </div>
    );
}