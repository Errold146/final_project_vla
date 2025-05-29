import HeroSection from "@/components/layout/HeroSection";
import Link from "next/link";

export default function CheckoutPageClient() {
    return (
        <div className="max-w-7xl mx-auto p-6 text-center">

            <HeroSection
                title="¡Finaliza tu compra de forma segura!"
                subtitle="Para continuar con el proceso de pago, por favor inicia sesión o crea una cuenta. Así podrás gestionar tus pedidos y disfrutar de una mejor experiencia de compra."
            />

            <h1 className="text-3xl font-bold my-6">Proceso de Pago 💳</h1>
            <p className="text-gray-500 mb-2">
                Accede a tu cuenta o regístrate para completar tu pedido y recibir actualizaciones sobre tu compra.
            </p>

            <div className="mt-6 flex justify-center gap-6">
                <Link
                    href="/admin/login"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                >
                    Iniciar Sesión
                </Link>

                <Link
                    href="/admin/register"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
                >
                    Crear Cuenta
                </Link>
            </div>

            <Link
                href="/cart"
                className="mt-6 text-gray-500 hover:underline block"
            >
                ← Volver al carrito
            </Link>
        </div>
    );
}