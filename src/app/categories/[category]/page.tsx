import { Metadata } from "next";
import CategoryPageClient from "./CategoryPageClient";

interface CategoryParams {
    category: string;
}

const categoryMap: Record<string, string> = {
    "electronics": "Electrónica",
    "jewelery": "Joyería",
    "men's%20clothing": "Ropa de Hombre",
    "women's%20clothing": "Ropa de Mujer",
};

export async function generateMetadata({ params }: { params: CategoryParams }): Promise<Metadata> {
    const { category } = params;
    const categoryEs = categoryMap[category] || category;
    return {
        title: `Categoría: ${categoryEs}`,
        description: `Productos de la categoría ${categoryEs} en MicroWeb-cr.`,
    };
}

export default function CategoryPage({ params }: { params: CategoryParams }) {
    const categoryEs = categoryMap[params.category] || params.category;
    return <CategoryPageClient category={params.category} categoryEs={categoryEs} />;
}