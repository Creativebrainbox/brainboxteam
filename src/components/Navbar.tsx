import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/#about" },
  { label: "SERVICES", path: "/#services" },
  { label: "PORTFOLIOS", path: "/portfolio" },
  { label: "PACKAGES", path: "/packages" },
  { label: "EXPERIENCE", path: "/experience" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-primary">BRAIN</span>
            <span className="text-navy">BOXWORLD</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              className="block text-sm font-medium text-foreground hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
