import { create } from "zustand";

interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    decrementQuantity: (id: number) => void;
}

// Recuperar carrito desde localStorage
const getCartFromStorage = (): CartItem[] => {
    if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
};

export const useCartStore = create<CartStore>((set) => ({
    cart: getCartFromStorage(),

    addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        let updatedCart;

        if (existingItem) {
            updatedCart = state.cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...state.cart, { ...product, quantity: 1 }];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
        return { cart: updatedCart };
    }),

    decrementQuantity: (id) => set((state) => {
        const updatedCart = state.cart
            .map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0); // Si llega a 0, lo elimina

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),

    removeFromCart: (id) => set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
        return { cart: updatedCart };
    }),

    clearCart: () => set(() => {
        localStorage.removeItem("cart"); // Eliminar del localStorage
        return { cart: [] };
    }),
}));