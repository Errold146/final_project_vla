"use client";

import { useState, useEffect } from "react";
import axiosClient from "@/lib/api/axiosClient";

export function useProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axiosClient.get("/products");
                setProducts(response.data);
            } catch (err: any) {
                console.error("Error al obtener productos:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return { products, loading, error };
}