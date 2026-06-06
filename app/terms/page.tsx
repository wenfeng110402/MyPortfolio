import Link from "next/link";

export default function Terms() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Terms of Service
                </h1>
                <p className="mt-3 text-2xl">
                We use CC BY-SA 4.0 for our content.
                </p>
                <div className="mt-8">
                    <Link href="/">
                        <span className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80">
                            Go back home
                        </span>
                    </Link>
                </div>
            </main>
        </div>
        
    )
}