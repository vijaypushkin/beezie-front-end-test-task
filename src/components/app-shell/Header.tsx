import Image from "next/image";
import { Input } from "../ui/Input";

const Header: React.FC = () => {
  return (
    <header className="text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Image src="/logo.svg" alt="Logo" width={94} height={40} />

          {/* Search Bar */}
          <div className="relative w-[370px]">
            <Input
              isFullwidth
              placeholder="Search Collectibles"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              icon={
                <Image
                  src="/assets/icons/search.svg"
                  alt="Search"
                  width={16}
                  height={16}
                />
              }
            />
          </div>
        </div>

        {/* Right: Nav Links + Sign Up */}
        <div className="flex items-center gap-6">
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-yellow-400">
              Marketplace
            </a>
            <a href="#" className="hover:text-yellow-400">
              Drops
            </a>
            <a href="#" className="hover:text-yellow-400">
              More
            </a>
          </nav>

          <button className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-300 transition">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
