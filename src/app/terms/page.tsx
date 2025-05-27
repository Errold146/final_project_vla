import HeroSection from "@/components/layout/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos y Condiciones | MicroWeb-cr",
    description: "Consulta las reglas de uso, derechos y responsabilidades al utilizar MicroWeb-cr.",
};

export default function TermsPage() {
    return (
        <div className="min-h-[calc(100vh-FOOTER_HEIGHT)] max-w-7xl mx-auto p-6">
            <HeroSection
                title="Términos y Condiciones"
                subtitle="Conoce las reglas de uso de nuestra plataforma y servicios."
            />

            <section className="mt-8 text-gray-400 font-semibold space-y-6">
                <p>MicroWeb-cr proporciona un entorno seguro y confiable para que los clientes realicen compras y gestionen sus pedidos.</p>
                <p>Los usuarios deben cumplir con las políticas de uso establecidas y aceptar que cualquier intento de fraude o abuso será investigado.</p>
                <p>Para más información sobre derechos y responsabilidades, consulta nuestros términos y condiciones completos.</p>
            </section>
        </div>
    );
}