import LoginPageClient from "./LoginPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Iniciar sesión",
    description: "Accede al panel de administración de MicroWeb-cr.",
};

export default function LoginPage() {
    return <LoginPageClient />;
}