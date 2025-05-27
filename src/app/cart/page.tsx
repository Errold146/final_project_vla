import CartTable from "@/components/cart/CartTable";

export const metadata = {
    title: "Carrito de compras",
    description: "Revisa y gestiona los productos en tu carrito de compras.",
};

export default function CartPage() {
    return <CartTable />;
}