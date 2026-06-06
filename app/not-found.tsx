import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black px-6 text-white">
            <div className="max-w-xl text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">404</p>

                <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
                    Page not found
                </h1>

                <p className="mt-4 text-white/60">
                    You may have followed a broken link or entered the wrong address.
                </p>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}
