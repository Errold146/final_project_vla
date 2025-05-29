"use client";

import { useState, useEffect } from "react";
import axiosClient from "@/lib/api/axiosClient";
import { useSearchStore } from "@/store/searchStore"; // Importa el store global

export function useProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | Error>(null);

    const { query } = useSearchStore(); // Obtén el query global

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axiosClient.get("/products");
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    // Filtra automáticamente cuando cambia el query o los productos
    useEffect(() => {
        if (!query.trim()) {
            setFilteredProducts(products);
            return;
        }

        const lowerQuery = query.toLowerCase().trim();

        const translationMap: Record<string, string> = {
            "ropa": "clothing",
            "joyería": "jewelery",
            "electrónica": "electronics",
            "hombres": "men's clothing",
            "mujeres": "women's clothing",
            "camisa": "shirt",
            "zapatos": "shoes",
            "reloj": "jewelery",
            "anillo": "jewelery",
            "celular": "phone",
        };

        const translatedQuery = translationMap[lowerQuery] || lowerQuery;

        const filtered = products.filter((product) => {
            const title = product.title.toLowerCase().trim();
            const category = product.category.toLowerCase().trim();

            return (
                title.includes(translatedQuery) ||
                category.includes(translatedQuery) ||
                category.startsWith(translatedQuery)
            );
        });

        setFilteredProducts(filtered);
    }, [query, products]); // <-- Escucha cambios en query y products

    return { products, filteredProducts, loading, error };
}