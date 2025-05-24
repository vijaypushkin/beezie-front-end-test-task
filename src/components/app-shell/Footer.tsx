import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:flex-row justify-between items-start">
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
        <div className="flex gap-20 text-md font-bold">
          <div className="space-y-8">
            <h3 className="text-(--text-secondary)">Colony</h3>
            <ul className="space-y-8">
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

          <div className="space-y-8">
            <h3 className="text-(--text-secondary)">Support</h3>
            <ul className="space-y-8">
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
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-[26px] font-semibold">
            Sign up to join our beta access
          </h3>
          <div>
            <button className="bg-(--brand) text-black px-12 py-3 rounded-md font-medium transition">
              Join now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
