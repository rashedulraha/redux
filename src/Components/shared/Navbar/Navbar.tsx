import Container from "@/Components/Container/Container";
import { Link } from "react-router";

const Navbar = () => {
  const Navigation = [
    {
      nav: "Home",
      to: "/",
    },
    {
      nav: "About",
      to: "/about",
    },
    {
      nav: "Service",
      to: "/service",
    },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-zinc-950 text-xs font-bold">
              R
            </span>
            <span>Redux</span>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {Navigation.map((data) => (
              <Link
                key={data.nav}
                to={data.to}
                className="text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {data.nav}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Link
              to="#contact"
              className="hidden rounded-md bg-zinc-100 px-3.5 py-1.5 text-xs font-medium text-zinc-950 transition-colors hover:bg-white md:block"
            >
              Get Started
            </Link>

            {/* Mobile Button */}
            <button
              type="button"
              className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 md:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
