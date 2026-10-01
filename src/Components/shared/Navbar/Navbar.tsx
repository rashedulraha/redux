import Container from "@/Components/Container/Container";
import ThemeToggle from "@/Components/shared/ThemeToggle/ThemeToggle";
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
    <nav className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground transition-colors hover:text-primary">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
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
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                {data.nav}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="#contact"
              className="hidden rounded-md bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:block">
              Get Started
            </Link>

            {/* Mobile Button */}
            <button
              type="button"
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
              aria-label="Open menu">
              ☰
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
