import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100svh] grid place-items-center grid-bg px-6">
      <div className="text-center">
        <p className="font-mono-label text-xs text-amber mb-4">SYSTEM NOT FOUND</p>
        <h1 className="font-display text-[22vw] md:text-[10rem] leading-none tracking-tight text-stroke">
          404
        </h1>
        <p className="text-text-muted mt-4 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="font-mono-label text-xs bg-amber text-bg px-6 py-3.5 inline-block"
        >
          RETURN HOME
        </Link>
      </div>
    </main>
  );
}
