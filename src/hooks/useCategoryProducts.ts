"use client";

import { useState, useEffect } from "react";
import axiosClient from "@/lib/api/axiosClient";

export function useCategoryProducts(category: string | undefined) {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        if (!category) return;

        async function fetchCategoryProducts() {
            try {
                const response = await axiosClient.get(`/products/category/${category}`);
                setProducts(response.data);
            } catch (err: any) {
                console.error("Error al obtener productos por categoría:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchCategoryProducts();
    }, [category]);

    return { products, loading, error };
}