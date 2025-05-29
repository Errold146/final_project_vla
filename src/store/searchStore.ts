import { create } from "zustand";

interface SearchState {
    query: string;
    setQuery: (query: string) => void;
    resetQuery: () => void; // 🔥 Nueva función para limpiar el input
}

export const useSearchStore = create<SearchState>((set) => ({
    query: "",
    setQuery: (query) => set({ query }),
    resetQuery: () => set({ query: "" }), // 🔄 Vacía el texto al regresar a la tienda
}));