"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
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
        <div className="h-[1100px] flex justify-center items-center overflow-hidden">
            <div className="max-w-lg w-full p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center text-cyan-500">Iniciar Sesión</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                            placeholder="🔑"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}