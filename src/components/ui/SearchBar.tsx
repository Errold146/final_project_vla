"use client";

import { useEffect, useRef } from "react";
import { useSearchStore } from "@/store/searchStore";

export default function SearchBar() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { query, setQuery } = useSearchStore();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="relative w-full max-w-md">
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg p-2 border border-gray-300 shadow-inner outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="🔍 Buscar productos..."
            />
        </div>
    );
}