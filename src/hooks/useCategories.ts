"use client";

import { useState, useEffect } from "react";
import axiosClient from "@/lib/api/axiosClient";

export function useCategories() {
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axiosClient.get("/products/categories");
                setCategories(response.data);
            } catch (err: any) {
                console.error("Error fetching categories:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, []);

    return { categories, loading, error };
}