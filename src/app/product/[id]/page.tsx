import { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";

// Obtiene los datos del producto para la metadata
async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const product = await getProduct(params.id);
    if (!product) {
        return {
            title: "Producto no encontrado | MicroWeb-cr",
            description: "El producto solicitado no existe.",
        };
    }
    return {
        title: `${product.title}`,
        description: product.description,
    };
}

export default function ProductPage() {
    return <ProductPageClient />;
}