// src/components/Navbar.jsx
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { id: "about", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <span className="text-xl font-bold">{t("portfolioTitle")}</span>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón móvil */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Menu móvil */}
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block border-b border-gray-300 dark:border-gray-600 py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
