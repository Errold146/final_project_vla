export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity?: number; // Opcional, porque solo se usa en el carrito
}