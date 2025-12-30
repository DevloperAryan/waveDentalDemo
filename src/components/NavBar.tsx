import React, { useState, useEffect } from "react";
import { Menu, Waves, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { hash, pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/#services" },
    { name: "Testimonials", to: "/#testimonials" },
    { name: "Our Team", to: "/#about" },
    { name: "Gallery", to: "/Gallery" },
  ];

  const isActiveLink = (to: string) => {
    // Home: active only on "/" with NO hash
  if (to === "/") {
    return pathname === "/" && !hash;
  }

  // Section links
  if (to.includes("#")) {
    return hash === `#${to.split("#")[1]}`;
  }

  // Normal routes
  return pathname === to;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? "bg-wave-50 text-wave-600"
                  : "bg-white text-wave-600 shadow-md"
              }`}
            >
              <Waves size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight leading-none text-slate-900">
                Wave<span className="text-wave-600">Dental</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-500">
                CALIFORNIA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.to);

              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-sm xl:text-[17px] font-semibold tracking-wide transition-colors hover:text-wave-600 ${
                    isActive
                      ? "text-wave-600"
                      : isScrolled
                      ? "text-slate-600"
                      : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <Link
                to="tel:+18189889959"
                className="flex items-center gap-2 font-semibold text-slate-900"
              >
                <Phone size={18} className="text-wave-600" />
                (818) 988-9959
              </Link>
              <Link
                to="/Appointment"
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-wave-600 transition-all shadow-lg hover:shadow-wave-200 hover:-translate-y-0.5"
              >
                Book Online
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              name="MobileMenu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-wave-600 transition-colors bg-white/50 rounded-lg backdrop-blur-sm"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-fade-in-up">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.to);

            return (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 pl-8 border-b border-slate-50 transition-all ${
                  isActive
                    ? "text-wave-600"
                    : "text-slate-700 hover:text-wave-600 hover:pl-12"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4 flex flex-col gap-3">
            <Link
              to="tel:+18189889959"
              className="flex items-center justify-center gap-2 text-slate-600 font-semibold py-2 bg-stone-200 rounded-xl"
            >
              <Phone size={18} /> (818) 988-9959
            </Link>
            <Link
              to="/Appointment"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center w-full px-5 py-4 rounded-xl bg-wave-600 text-white font-bold shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
