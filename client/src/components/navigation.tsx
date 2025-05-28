import { useState, useEffect, useRef } from "react";

const drawerLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Highlight active section
      let found = "";
      for (const link of drawerLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = link.id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // Close drawer on navigation
    }
  };

  // Close drawer when clicking outside
  useEffect(() => {
    if (!drawerOpen) return;
    const handleClick = (e: MouseEvent) => {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer && !drawer.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [drawerOpen]);

  // Close drawer with Escape key
  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen]);

  return (
    <>
      {/* Custom keyframes for slide-in */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
          bg-white/95 md:bg-white/95 md:backdrop-blur-sm md:border-b md:border-gray-100
          ${isScrolled ? "shadow-lg" : ""}
          md:bg-gradient-to-r md:from-white md:to-gray-50
          bg-blue-200 md:bg-white/95
        `}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a
                href="#home"
                role="button"
                onClick={e => { e.preventDefault(); scrollToSection("home"); }}
                className="text-2xl font-extrabold text-primary tracking-wide hover:opacity-80 rounded transition-all cursor-pointer"
                style={{ letterSpacing: '0.04em' }}
                aria-label="Go to Home"
                tabIndex={0}
              >
                Dusan R.
              </a>
            </div>
            {/* Desktop navigation */}
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-8">
                {drawerLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`text-gray-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${activeSection === link.id ? "text-primary font-bold" : ""}`}
                      tabIndex={0}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile hamburger menu */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay with blur and fade-in */}
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity animate-fade-in" />
            {/* Drawer */}
            <div
              id="mobile-drawer"
              ref={drawerRef}
              className="ml-auto w-64 h-full bg-gradient-to-b from-blue-100 via-blue-50 to-white shadow-2xl p-8 flex flex-col space-y-6 animate-slide-in-right relative rounded-l-2xl"
              style={{ minWidth: 220 }}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              <ul className="flex flex-col space-y-2 mt-8">
                {drawerLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`text-gray-700 hover:text-primary text-lg font-medium text-left transition-colors rounded px-2 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${activeSection === link.id ? "bg-blue-100 text-primary font-bold" : ""}`}
                      tabIndex={0}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
