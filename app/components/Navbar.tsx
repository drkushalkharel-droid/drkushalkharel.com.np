"use client";

import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaThreads } from "react-icons/fa6";

const forYouLinks = [
  { href: "/nepalese-abroad", label: "Nepalese Abroad" },
  { href: "/expatriates-in-nepal", label: "For Expatriates in Nepal" },
  { href: "/english-speaking-psychiatrist", label: "English Speaking Psychiatrist" },
  { href: "/tourists-in-nepal", label: "For Tourists in Nepal" },
  { href: "/counselling-in-nepal", label: "Counselling Services" },
];

export default function Navbar() {
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

          <nav className="hidden xl:flex items-center gap-5">

            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              About
            </Link>

            <Link
              href="/#services"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Services
            </Link>

            <Link
              href="/#awards"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Awards
            </Link>

            <Link
              href="/#conditions"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Conditions
            </Link>

            <Link
              href="/knowledge"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Articles
            </Link>

            <Link
              href="/conditions"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Conditions Library
            </Link>

            <Link
              href="/screening"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Screening
            </Link>

            <Link
              href="/#cities"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Cities
            </Link>

            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 font-medium text-gray-700 transition hover:text-blue-700"
              >
                For You
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-64 rounded-lg border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                {forYouLinks.map((link) => (
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

          </div>

        </div>

      </div>

    </header>
  );
}
