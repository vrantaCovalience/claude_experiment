import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login">Go to Dashboard</Link>

      <Link href="/register">Go to Register</Link>
    </>
  );
}
