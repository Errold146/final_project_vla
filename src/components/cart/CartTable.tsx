"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";

export default function CartTable() {

    const { cart, addToCart, removeFromCart, decrementQuantity, clearCart } = useCartStore();
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🛒 Carrito de Compras</h1>

            {cart.length === 0 ? (
                <>
                    <p className="text-gray-600">Tu carrito está vacío.</p>
                    <Link
                        href="/"
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all inline-block"
                    >
                        ← Regresar a la tienda
                    </Link>
                </>
            ) : (
                <>
                    {/* 🖥️ Tabla en desktop */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="p-3 border border-gray-300">Imagen</th>
                                    <th className="p-3 border border-gray-300">Producto</th>
                                    <th className="p-3 border border-gray-300">Precio Unitario</th>
                                    <th className="p-3 border border-gray-300">Cantidad</th>
                                    <th className="p-3 border border-gray-300">Total</th>
                                    <th className="p-3 border border-gray-300">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td className="p-3 border border-gray-300">
                                            <Image src={item.image} alt={item.title} width={50} height={50} />
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            {item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
                                        </td>
                                        <td className="p-3 border border-gray-300 text-green-600 font-bold">${item.price}</td>
                                        <td className="p-3 border border-gray-300">
                                            <div className="inline-flex items-center gap-2">
                                                <button
                                                    onClick={() => addToCart({ ...item, quantity: 1 })}
                                                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition-all flex items-center gap-1"
                                                >
                                                    <FaPlus />
                                                </button>
                                                <span className="text-gray-500">{item.quantity}</span>
                                                <button
                                                    onClick={() => decrementQuantity(item.id)}
                                                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all flex items-center gap-1"
                                                >
                                                    <FaMinus />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3 border border-gray-300 text-green-600 font-bold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                        <td className="p-3 border border-gray-300 text-center">
                                            <div className="w-full flex justify-center">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 📱 Tarjetas en móviles */}
                    <div className="grid grid-cols-1 md:hidden gap-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4">
                                <div className="flex justify-center">
                                    <Image src={item.image} alt={item.title} width={80} height={80} />
                                </div>
                                <h2 className="text-lg font-bold text-center text-gray-600">{item.title}</h2>
                                <p className="text-green-600 font-bold text-center">${item.price}</p>
                                <div className="flex justify-center items-center gap-4">
                                    <button
                                        onClick={() => addToCart({ ...item, quantity: 1 })}
                                        className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-all"
                                    >
                                        <FaPlus />
                                    </button>
                                    <span className="text-gray-500">{item.quantity}</span>
                                    <button
                                        onClick={() => decrementQuantity(item.id)}
                                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-all"
                                    >
                                        <FaMinus />
                                    </button>
                                </div>
                                <p className="text-center text-green-600 font-bold">
                                    Total: ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <div className="w-full flex justify-center">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total y acciones (ubicado correctamente en ambas versiones) */}
                    <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-xl font-bold text-center md:text-left">
                            Total a pagar: ${totalPrice.toFixed(2)}
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4">
                            <button
                                onClick={clearCart}
                                className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-all inline-flex justify-center items-center"
                            >
                                Vaciar carrito
                            </button>
                            <Link
                                href="/checkout"
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all inline-flex justify-center items-center"
                            >
                                Pagar 💳
                            </Link>
                            <Link
                                href="/"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all inline-flex justify-center items-center"
                            >
                                ← Regresar a la tienda
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}