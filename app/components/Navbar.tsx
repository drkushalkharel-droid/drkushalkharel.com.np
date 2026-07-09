"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaThreads } from "react-icons/fa6";

type NavLink = { href: string; label: string };

const aboutLinks: NavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience & Training" },
  { href: "/#awards", label: "Awards & Certificates" },
];

const conditionsLinks: NavLink[] = [
  { href: "/conditions", label: "Conditions Library (A-Z)" },
  { href: "/knowledge", label: "Nepali Patient Articles" },
];

const toolsLinks: NavLink[] = [
  { href: "/screening", label: "Mental Health Screening" },
  { href: "/resources", label: "Patient Resources & Leaflets" },
];

const findCareLinks: NavLink[] = [
  { href: "/#cities", label: "Cities We Serve" },
  { href: "/nepalese-abroad", label: "Nepalese Abroad" },
  { href: "/expatriates-in-nepal", label: "For Expatriates in Nepal" },
  { href: "/english-speaking-psychiatrist", label: "English Speaking Psychiatrist" },
  { href: "/tourists-in-nepal", label: "For Tourists in Nepal" },
  { href: "/counselling-in-nepal", label: "Counselling Services" },
];

const mobileGroups: { label: string; links: NavLink[] }[] = [
  { label: "", links: [{ href: "/", label: "Home" }] },
  { label: "About", links: aboutLinks },
  { label: "Conditions", links: conditionsLinks },
  { label: "Tools", links: toolsLinks },
  { label: "Find Care", links: findCareLinks },
  { label: "", links: [{ href: "/#contact", label: "Contact" }] },
];

function NavDropdown({ label, links }: { label: string; links: NavLink[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 font-medium text-gray-700 transition hover:text-blue-700"
      >
        {label}
        <ChevronDown size={16} aria-hidden="true" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-64 rounded-lg border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://facebook.com/cooshal.kharel",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/cusalnova",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://www.twitter.com/Drkushalpsych",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@drkushalkharel",
    },
    {
      name: "Threads",
      icon: FaThreads,
      url: "https://www.threads.net/@cusalnova",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-md">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}

          <Link href="/" className="flex flex-col">

            <span className="text-2xl font-extrabold text-blue-900">
              Dr. Kushal Kharel
            </span>

            <span className="text-sm text-gray-500">
              Consultant Psychiatrist
            </span>

          </Link>

          {/* MENU */}

          <nav className="hidden xl:flex items-center gap-6">

            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Home
            </Link>

            <NavDropdown label="About" links={aboutLinks} />
            <NavDropdown label="Conditions" links={conditionsLinks} />
            <NavDropdown label="Tools" links={toolsLinks} />
            <NavDropdown label="Find Care" links={findCareLinks} />

            <Link
              href="/#contact"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Contact
            </Link>

          </nav>

          {/* SOCIAL ICONS - Hidden on mobile */}

          <div className="hidden 2xl:flex items-center gap-3 px-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.name}`}
                  title={`Follow on ${social.name}`}
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* RIGHT BUTTONS */}

          <div className="flex items-center gap-3">

            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-5 py-3 rounded-xl border border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition"
            >
              WhatsApp
            </a>

            <a
              href="tel:+9779861800547"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 transition hover:bg-gray-100 xl:hidden"
            >
              {mobileOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        {mobileOpen && (
          <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-100 py-4 xl:hidden">
            <div className="flex flex-col gap-1">
              {mobileGroups.map((group) => (
                <div key={group.label || group.links[0].href} className="mb-2">
                  {group.label && (
                    <p className="mt-3 px-3 text-xs font-bold uppercase tracking-[2px] text-slate-400">
                      {group.label}
                    </p>
                  )}
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/9779861800547"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block rounded-xl border border-green-500 px-5 py-3 text-center font-semibold text-green-600 transition hover:bg-green-500 hover:text-white"
            >
              WhatsApp
            </a>

            <div className="mt-4 flex items-center justify-center gap-5 border-t border-gray-100 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.name}`}
                    title={`Follow on ${social.name}`}
                    className="text-gray-600 hover:text-blue-700 transition"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </nav>
        )}

      </div>

    </header>
  );
}
