import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#141414] border-b border-[#262626]">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex  items-center gap-1">
            <div className="relative w-12 h-12">
              <Image src={Logo} layout="fill" className="h-12" alt="logo" />
            </div>
            <span className="text-xl font-medium hidden sm:inline">
              CoderFlix
            </span>
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-[#303030] bg-[#1f1f1f] rounded-full focus:outline-none focus:ring-2 focus:ring-[#e50914]/40"
          />
        </div>

        {/* Profile */}
        <button className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-900 text-sm font-medium">
          JD
        </button>
      </div>
    </header>
  );
}
