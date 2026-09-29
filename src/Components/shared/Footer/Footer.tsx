import Container from "@/Components/Container/Container";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container>
        <div className=" px-6 py-12 ">
          {/* Main Footer */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Brand */}
            <div className="max-w-sm">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                Redux
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Building modern digital experiences with technology, creativity,
                and innovation.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a
                href="#home"
                className="text-zinc-500 transition hover:text-zinc-900">
                Home
              </a>

              <a
                href="#about"
                className="text-zinc-500 transition hover:text-zinc-900">
                About
              </a>

              <a
                href="#services"
                className="text-zinc-500 transition hover:text-zinc-900">
                Services
              </a>

              <a
                href="#contact"
                className="text-zinc-500 transition hover:text-zinc-900">
                Contact
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 EXZAZON. All rights reserved.</p>

            <div className="flex gap-5">
              <a href="#" className="transition hover:text-zinc-900">
                GitHub
              </a>

              <a href="#" className="transition hover:text-zinc-900">
                LinkedIn
              </a>

              <a href="#" className="transition hover:text-zinc-900">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
