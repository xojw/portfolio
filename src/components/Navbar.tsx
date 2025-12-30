import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "home" },
    { path: "/blog", label: "blog" },
    { path: "/projects", label: "projects" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 animate-fade-in">
      <div className="w-full bg-ctp-surface0 rounded-2xl px-4 sm:px-8 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-ctp-green font-semibold text-xl"
        >
          <img src="/favicon.ico" alt="taz logo" className="w-6 h-6" />
          ! taz
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-transform duration-200 ${
                location.pathname === link.path
                  ? "text-ctp-teal"
                  : "text-foreground"
              } hover:text-ctp-teal`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
