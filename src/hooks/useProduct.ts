"use client";

import { useState, useEffect } from "react";
import axiosClient from "@/lib/api/axiosClient";

export function useProduct(productId: string | undefined) {
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        if (!productId) return;

        async function fetchProduct() {
            try {
                const response = await axiosClient.get(`/products/${productId}`);
                setProduct(response.data);
            } catch (err: any) {
                console.error("Error al obtener el producto:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    return { product, loading, error };
}