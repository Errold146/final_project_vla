"use client";

import Link from "next/link";

interface ButtonProps {
    text: string;
    link: string;
}

export default function Button({ text, link }: ButtonProps) {
    return (
        <Link href={link} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            {text}
        </Link>
    );
}