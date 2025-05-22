"use client";

import Link from "next/link";

export default function CheckoutPage() {
    return (
        <div className="max-w-7xl mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-6">Proceso de Pago 💳</h1>
            <p className="text-gray-500">Por favor, inicia sesión o crea una cuenta para continuar con la compra.</p>

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