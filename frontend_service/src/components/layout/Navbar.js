import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">EduManage</h1>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* Login Button */}
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
