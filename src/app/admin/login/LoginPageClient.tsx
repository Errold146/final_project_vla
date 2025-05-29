"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPageClient() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("authToken", data.token);
                toast.success("✅ Inicio de sesión exitoso.");
                router.push("/");
            } else {
                toast.error("❌ Credenciales incorrectas. Intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("⚠️ Hubo un problema con el inicio de sesión.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-8 text-center text-cyan-500">Iniciar Sesión</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-lg">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-lg">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
                            placeholder="🔑"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition text-lg font-semibold">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}