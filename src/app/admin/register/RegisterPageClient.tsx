"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPageClient() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password,
        };

        try {
            const response = await fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                alert("Cuenta creada con éxito. Ahora inicia sesión.");
                router.push("/login");
            } else {
                alert("Error al registrar usuario.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema con el registro.");
        }
    };

    return (
        <div className="h-[1100px] flex justify-center items-center overflow-hidden">
            <div className="max-w-lg w-full p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center text-cyan-500">Crear Cuenta</h1>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                        Crear Cuenta
                    </button>
                </form>
            </div>
        </div>
    );
}