"use client";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function HeroSection({ title, subtitle, ctaText, ctaHref }: HeroSectionProps) {
    return (
        <section className="relative flex flex-col items-center text-center py-20 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-white overflow-hidden">
            {/* Gradiente animado decorativo */}
            <div className="absolute inset-0 pointer-events-none animate-pulse opacity-30"
                style={{
                    background: "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.2) 0, transparent 70%)"
                }}
            />
            <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-5xl font-extrabold drop-shadow-lg">{title}</h1>
                <p className="text-2xl mt-4 mb-8 font-light">{subtitle}</p>
                {ctaText && ctaHref && (
                    <a
                        href={ctaHref}
                        className="inline-block px-8 py-3 bg-white text-cyan-600 font-semibold rounded-full shadow-lg hover:bg-cyan-100 transition"
                    >
                        {ctaText}
                    </a>
                )}
            </div>
        </section>
    );
}