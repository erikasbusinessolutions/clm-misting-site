import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary p-4 text-white flex justify-center space-x-6">
      <Link href="/">Home</Link>
      <Link href="/about">Meet the Owners</Link>
      <Link href="/products">Products</Link>
      <Link href="/repair">Repair & Install Parts</Link>
      <Link href="/contact">Request a Quote</Link>
    </nav>
  );
}
