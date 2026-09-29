import Container from "@/Components/Container/Container";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400">
      <Container>
        <div className="px-4 py-10 sm:px-6">
          {/* Main Footer */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Brand */}
            <div className="max-w-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-zinc-950 text-[10px] font-bold">
                  R
                </span>
                <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                  Redux
                </h2>
              </div>
              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Building modern state-driven digital experiences with Redux
                Toolkit, TypeScript, and clean architecture.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <a
                href="#home"
                className="text-zinc-400 transition-colors hover:text-zinc-100"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-zinc-400 transition-colors hover:text-zinc-100"
              >
                About
              </a>
              <a
                href="#services"
                className="text-zinc-400 transition-colors hover:text-zinc-100"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-zinc-400 transition-colors hover:text-zinc-100"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col gap-3 border-t border-zinc-850 pt-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Redux Learning. All rights reserved.</p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Community
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
