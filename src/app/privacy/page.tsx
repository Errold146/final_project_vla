import HeroSection from "@/components/layout/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | MicroWeb-cr",
    description: "Conoce cómo MicroWeb-cr protege y gestiona tu información personal de forma segura y responsable.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-[calc(100vh-FOOTER_HEIGHT)] max-w-7xl mx-auto p-6">
            <HeroSection
                title="Política de Privacidad"
                subtitle="Tu privacidad es importante para nosotros. Conoce cómo protegemos tus datos."
            />

            <section className="mt-8 text-gray-400 font-semibold space-y-6">
                <p>En MicroWeb-cr valoramos la privacidad de nuestros usuarios. Toda la información personal es manejada de manera segura y bajo estrictas normativas de protección de datos.</p>
                <p>No compartimos datos con terceros sin tu consentimiento y utilizamos cifrado de última generación para proteger la integridad de la información.</p>
                <p>Consulta nuestra política completa para conocer más detalles sobre el tratamiento de datos.</p>
            </section>
        </div>
    );
}