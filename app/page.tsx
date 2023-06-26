import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <div className="flex flex-col items-center justify-between w-full max-w-4xl p-6">
        <Link href="/protected">Go to protected page</Link>
      </div>
    </main>
  );
}
