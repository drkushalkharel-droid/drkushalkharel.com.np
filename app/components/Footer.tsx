import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaThreads } from "react-icons/fa6";

const googleMapsUrl = "https://maps.app.goo.gl/2t5B2EqgDKYMRLE48";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://facebook.com/cooshal.kharel",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/cusalnova",
      color: "hover:text-pink-600",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://www.twitter.com/Drkushalpsych",
      color: "hover:text-blue-400",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@drkushalkharel",
      color: "hover:text-gray-300",
    },
    {
      name: "Threads",
      icon: FaThreads,
      url: "https://www.threads.net/@cusalnova",
      color: "hover:text-gray-200",
    },
  ];

  return (
    <footer id="contact" className="bg-slate-950 text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-5 md:grid-cols-2 gap-12">

        {/* Clinic */}

        <div>

          <h2 className="text-3xl font-bold text-white">
            Dr. Kushal Kharel
          </h2>

          <p className="text-blue-400 mt-2 font-medium">
            Consultant Psychiatrist
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            Center of Excellence in Neuropsychiatry & De-addiction.
            Providing compassionate, confidential and evidence-based
            psychiatric care for children, adolescents and adults.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-6">
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
                  className={`text-gray-400 transition-colors ${social.color}`}
                >
                  <Icon size={24} aria-hidden="true" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <div className="space-y-4 text-gray-400">

            <Link href="/" className="block hover:text-white transition">
              Home
            </Link>

            <Link href="/#about" className="block hover:text-white transition">
              About
            </Link>

            <Link href="/#experience" className="block hover:text-white transition">
              Experience &amp; Training
            </Link>

            <Link href="/#services" className="block hover:text-white transition">
              Services
            </Link>

            <Link href="/#awards" className="block hover:text-white transition">
              Awards & Certificates
            </Link>

            <Link href="/#contact" className="block hover:text-white transition">
              Contact
            </Link>

            <Link href="/knowledge" className="block hover:text-white transition">
              Mental Health Articles
            </Link>

            <Link href="/screening" className="block hover:text-white transition">
              Mental Health Screening
            </Link>

            <Link href="/nepalese-abroad" className="block hover:text-white transition">
              Nepalese Abroad
            </Link>

            <Link href="/#google-reviews" className="block hover:text-white transition">
              Google Reviews & Map
            </Link>

            <Link href="/#faq" className="block hover:text-white transition">
              FAQ
            </Link>

            <Link href="/expatriates-in-nepal" className="block hover:text-white transition">
              For Expatriates in Nepal
            </Link>

            <Link href="/english-speaking-psychiatrist" className="block hover:text-white transition">
              English Speaking Psychiatrist
            </Link>

            <Link href="/tourists-in-nepal" className="block hover:text-white transition">
              For Tourists in Nepal
            </Link>

            <Link href="/counselling-in-nepal" className="block hover:text-white transition">
              Counselling Services
            </Link>

            <Link href="/resources" className="block hover:text-white transition">
              Patient Resources & Leaflets
            </Link>

          </div>

        </div>

        {/* Conditions */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Conditions Treated
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>Depression</p>
            <Link href="/anxiety" className="block hover:text-white transition">
              Anxiety Disorders
            </Link>
            <p>OCD</p>
            <p>Bipolar Disorder</p>
            <p>Schizophrenia</p>
            <p>ADHD</p>
            <p>Autism Spectrum Disorder</p>
            <p>Addiction Treatment</p>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact Information
          </h3>

          <div className="space-y-5 text-gray-400">

            <address className="not-italic">
              <p className="font-semibold text-white">
                📍 Clinic
              </p>

              <p>Kalanki-14, Near Malpot Road</p>
              <p>Near Kalanki Bhatbhateni Supermarket</p>
              <p>Kathmandu 44600, Bagmati, Nepal</p>
              <p className="mt-2 text-sm text-gray-500">
                Roadside parking available nearby
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-white transition"
              >
                <MapPin size={16} aria-hidden="true" />
                Get Directions
              </a>
            </address>

            <div>
              <p className="font-semibold text-white">
                📞 Phone
              </p>

              <a href="tel:+9779861800547" className="hover:text-white transition">
                +977 9861800547
              </a>
            </div>

            <div>
              <p className="font-semibold text-white">
                ✉ Email
              </p>

              <a href="mailto:drkushalkharel@gmail.com" className="hover:text-white transition">
                drkushalkharel@gmail.com
              </a>
            </div>

            <div>
              <p className="font-semibold text-white">
                💻 Consultation
              </p>

              <p>
                In-person & Online
              </p>
            </div>

          </div>

        </div>

        {/* Follow Us */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Follow Us
          </h3>

          <p className="text-gray-400 mb-6">
            Connect with us on social media for mental health tips and updates.
          </p>

          <div className="space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition group"
              >
                <social.icon size={18} className={social.color} aria-hidden="true" />
                <span>{social.name}</span>
              </a>
            ))}
          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Dr. Kushal Kharel. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-400 text-sm mt-4 md:mt-0">

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/medical-disclaimer" className="hover:text-white">
              Medical Disclaimer
            </Link>

            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
