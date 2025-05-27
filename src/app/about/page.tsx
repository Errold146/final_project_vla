import HeroSection from "@/components/layout/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Nosotros | MicroWeb-cr",
    description: "Conoce más sobre MicroWeb-cr, nuestro equipo y nuestra misión en el mundo del e-commerce.",
};

export default function AboutPage() {
    return (
        <div className="min-h-[calc(100vh-FOOTER_HEIGHT)] max-w-7xl mx-auto p-6">
            <HeroSection
                title="Sobre Nosotros"
                subtitle="Construimos soluciones e-commerce innovadoras para negocios modernos."
            />

            <section className="mt-8 text-gray-400 font-semibold space-y-6">
                <p>MicroWeb-cr nació con la visión de revolucionar el comercio electrónico, brindando herramientas inteligentes para negocios de cualquier tamaño.</p>
                <p>Nuestro equipo combina tecnología de vanguardia con un enfoque centrado en el usuario, permitiendo que cada tienda digital tenga una presencia única y atractiva.</p>
                <p>Desde la optimización de la UI/UX hasta la integración de APIs personalizadas, nuestra misión es crear experiencias fluidas que impulsen las conversiones y fidelicen clientes.</p>
            </section>
        </div>
    );
}