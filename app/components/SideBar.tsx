"use client";

import { LuX as Xicon } from "react-icons/lu";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({ open, onClose }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close icon */}
        <div className="flex justify-end p-4">
          <Xicon className="w-7 h-7 cursor-pointer" onClick={onClose} />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 px-6 font-bold text-lg">
          <a href="#about" onClick={onClose}>
            About
          </a>
          <a href="#skills" onClick={onClose}>
            Skills
          </a>
          <a href="#projects" onClick={onClose}>
            Projects
          </a>
          <a href="#services" onClick={onClose}>
            Services
          </a>
        </nav>
      </div>
    </>
  );
}
