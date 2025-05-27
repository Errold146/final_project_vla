import CheckoutPageClient from "./CheckoutPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout | MicroWeb-cr",
    description: "Completa el proceso de pago de tus productos en MicroWeb-cr.",
};

export default function CheckoutPage() {
    return <CheckoutPageClient />;
}