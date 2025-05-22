import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        {/* Logo and Social Icons */}
        <div className="space-y-6 col-span-1">
          <div className="text-brand text-3xl font-bold">
            <Image src="/logo.svg" alt="beezie" width={120} height={40} />
          </div>
          <div className="flex gap-4">
            <Image
              src="/assets/images/twitter.svg"
              alt="X"
              width={20}
              height={20}
            />
            <Image
              src="/assets/images/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/assets/images/discord.svg"
              alt="Discord"
              width={28}
              height={28}
            />
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-gray-placeholder font-medium">Colony</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-brand">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand">
                Team
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-gray-placeholder font-medium">Support</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-brand">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-brand">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-brand">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-brand">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Spacer (to align the right callout) */}
        <div className="hidden lg:block" />

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Sign up to join our beta access
          </h3>
          <button className="bg-yellow-brand text-black px-5 py-3 rounded-md font-medium hover:bg-yellow-400 transition">
            Join now
          </button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
