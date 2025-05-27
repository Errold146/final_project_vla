import RegisterPageClient from "./RegisterPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crear cuenta",
    description: "Regístrate para acceder al panel de administración de MicroWeb-cr.",
};

export default function RegisterPage() {
    return <RegisterPageClient />;
}