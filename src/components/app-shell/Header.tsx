import Image from "next/image";
import { Input } from "../ui/Input";

const Header: React.FC = () => {
  return (
    <header className="text-white h-16">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-6 h-12">
          {/* Logo */}
          <Image
            src="/logo.svg"
            className="hidden md:block"
            alt="Logo"
            width={94}
            height={40}
          />

          <Image
            src="/logo-sm.svg"
            className="md:hidden"
            alt="Logo"
            width={22}
            height={23}
          />

          {/* Search Bar */}
          <div className="relative w-[370px] hidden md:block">
            <Input
              isFullwidth
              placeholder="Search Collectibles"
              className="h-12"
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
        <div className="items-center gap-6 hidden md:flex h-12">
          <nav className="flex gap-4 font-bold">
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

          <button className="bg-(--brand) text-black font-medium px-12 py-2 rounded-md h-12">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
