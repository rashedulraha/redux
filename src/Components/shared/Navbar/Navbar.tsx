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
    <nav className="w-full border-b border-zinc-200 bg-white">
      <Container>
        <div className="flex h-16  items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-semibold tracking-tight text-zinc-900">
            Redux
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {Navigation.map((data) => (
              <Link
                key={data.nav}
                to={data.to}
                className="text-sm text-zinc-600 transition hover:text-zinc-950">
                {data.nav}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 md:block">
            Get Started
          </a>

          {/* Mobile Button */}
          <button
            type="button"
            className="rounded-md p-2 text-zinc-900 md:hidden"
            aria-label="Open menu">
            ☰
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
