import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menu = useMemo(
    () => [
      { label: "Home", path: "/home", id: "home" },
      { label: "About", path: "/about", id: "about" },
      { label: "Services", path: "/services", id: "services" },
      { label: "Projects", path: "/projects", id: "projects" },
      { label: "Expertise Area", path: "/expertise-area", id: "expertise-area" },
      { label: "Experience", path: "/experience", id: "experience" },
      { label: "Key Skills", path: "/key-skills", id: "key-skills" },
      { label: "Professional Experience", path: "/professional-experience", id: "professional-experience" },
      { label: "Education", path: "/education", id: "education" },
      { label: "Certifications", path: "/certifications", id: "certifications" },
      { label: "Key Projects", path: "/key-projects", id: "key-projects" },
      { label: "Key Achievements", path: "/key-achievements", id: "key-achievements" },
      { label: "Professional Profiles", path: "/professional-profiles", id: "professional-profiles" },
      { label: "Contact", path: "/contact", id: "contact" },
    ],
    []
  );

  const onMenuClick = (item) => {
    // Route changes (shows routing functionality) + closes mobile menu
    setOpen(false);
    navigate(item.path);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand" onClick={() => navigate("/home")} role="button" tabIndex={0}>
          <div className="logo">MP</div>
          <div className="brand-text">
            <div className="brand-title">Portfolio</div>
            {/* <div className="brand-subtitle">Frontend · React · UI</div> */}
          </div>
        </div>

        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <span className="menu-lines" />
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {menu.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={(e) => {
                e.preventDefault();
                onMenuClick(m);
              }}
            >
              {m.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
