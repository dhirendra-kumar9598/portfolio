import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../theme";
import { dark, light } from "../theme";

const NAV_LINKS = [
  { label: "Home",         href: "/#home" },
  { label: "About",        href: "/#about" },
  { label: "Projects",     href: "/#portfolio" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact",      href: "/#contact" },
];

const Navbar = () => {
  const { systemTheme, setSystemTheme } = useContext(ThemeContext);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("home");
  const isDark = systemTheme === dark;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-link tracking via IntersectionObserver on each section
  useEffect(() => {
    const ids = ["home", "about", "portfolio", "certificates", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleLinkClick = () => setMenuOpen(false);
  const toggleTheme = () => setSystemTheme(isDark ? light : dark);

  const isActive = (href) => activeSection === href.replace("/#", "");

  return (
    <header
      className="gh-navbar"
      style={{ boxShadow: scrolled ? "0 1px 0 var(--gh-border)" : "none" }}
    >
      <div className="gh-navbar-inner">
        {/* Brand */}
        <a href="/#home" className="gh-navbar-brand" aria-label="Home">
          <span className="gh-logo" aria-hidden="true">DK</span>
          Dhirendra
        </a>

        {/* Desktop nav */}
        <nav className="gh-navbar-links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`gh-nav-link${isActive(href) ? " active" : ""}`}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="gh-navbar-actions">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="gh-theme-toggle"
          >
            {isDark ? "☀" : "☾"}
          </button>

          <a href="/#contact" className="gh-btn gh-btn-green">
            Hire Me
          </a>

          <button
            className="gh-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="gh-hamburger-line" />
            <span className="gh-hamburger-line" />
            <span className="gh-hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile drawer — animated via max-height transition */}
      <nav
        id="mobile-menu"
        className={`gh-mobile-menu${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="gh-mobile-link"
            onClick={handleLinkClick}
          >
            {label}
          </a>
        ))}
        <a
          href="/#contact"
          className="gh-mobile-link"
          onClick={handleLinkClick}
          style={{
            marginTop: 8,
            color: "var(--gh-green)",
            borderTop: "1px solid var(--gh-border)",
            paddingTop: 12,
            fontWeight: 600,
          }}
        >
          Hire Me →
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
