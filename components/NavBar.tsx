import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-white hover:underline">About Me</Link>
                    <Link href="/about" className="text-white hover:underline">Achievements</Link>
                    <Link href="/feedback" className="text-white hover:underline">Background</Link>
                    <Link href="/school" className="text-white hover:underline">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-blue-700 rounded-lg shadow-lg p-4 space-y-4">
                    <Link href="/" className="block text-white hover:underline">About Me</Link>
                    <Link href="/about" className="block text-white hover:underline">Achievements</Link>
                    <Link href="/feedback" className="block text-white hover:underline">Background</Link>
                    <Link href="/school" className="block text-white hover:underline">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
