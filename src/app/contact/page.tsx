
import HeroSection from "@/components/layout/HeroSection";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | MicroWeb-cr",
    description: "Contáctanos para soporte, consultas o información sobre MicroWeb-cr. ¡Estamos para ayudarte!",
};

export default function ContactPage() {
    return (
        <div className="min-h-[calc(100vh-FOOTER_HEIGHT)] max-w-7xl mx-auto p-6">
            <HeroSection
                title="Contacto"
                subtitle="¿Tienes dudas o necesitas asistencia? Estamos aquí para ayudarte."
            />

            <section className="mt-8 text-gray-400 font-semibold space-y-6">
                <p>Puedes contactarnos a través de los siguientes medios:</p>
                <ul className="space-y-4">
                    <li>📧 Email: <span className="font-semibold">soporte@microweb-cr.com</span></li>
                    <li>📞 Teléfono: <span className="font-semibold">+506 8888-9999</span></li>
                    <li>📍 Dirección: <span className="font-semibold">San José, Costa Rica</span></li>
                </ul>
                <Button text="Enviar Mensaje" link="/contact/form" />
            </section>
        </div>
    );
}
