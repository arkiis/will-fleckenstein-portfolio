import { useState } from "react";
import { Link } from "react-router";
import { Linkedin, Mail, Copy, Check } from "lucide-react";
import headshotImg from "../../imports/headshot-linkedIn.jpg";
import avatarImg from "figma:asset/8b444409ed312b92316d661b42dd210f01c80cf8.png";
import Footer from "../components/Footer";

const EMAIL = "william.fleckenstein@gmail.com";

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <img src={avatarImg} alt="Will avatar" className="w-12 h-12 object-cover rounded-[0px]" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-black active:text-gray-600 transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-black font-semibold hover:text-gray-900 active:text-gray-700 transition-colors">
            About
          </Link>
          <a
            href="https://drive.google.com/file/d/1tZv0Ts7-z4SHjTG3ziMyiTe8iKFR7iyT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black active:text-gray-600 transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 via-pink-100 to-amber-100">
              <img
                src={headshotImg}
                alt="Will headshot"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/william-f-b74049165/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-2xl bg-white text-gray-800 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <div className="flex items-center gap-1 text-sm pl-4 pr-1 py-1 rounded-2xl bg-white text-gray-800 border border-gray-200">
                <Mail size={16} />
                <a href={`mailto:${EMAIL}`} className="hover:text-black transition-colors">
                  {EMAIL}
                </a>
                <button
                  onClick={handleCopy}
                  aria-label="Copy email"
                  className="ml-1 flex items-center gap-1 px-2.5 py-1 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm text-indigo-600 uppercase tracking-widest mb-3">About me</p>
            <h1 className="text-gray-900 mb-6">Hi, I'm Will!</h1>

            <div className="text-gray-700 leading-relaxed">
              <p className="max-w-md">
                Curious by nature, driven by design, and always looking for better ways to build meaningful digital experiences.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-200 shadow-sm p-5 bg-white">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Focus</p>
                <p className="text-gray-900">Product & UX Design</p>
              </div>
              <div className="rounded-2xl border border-gray-200 shadow-sm p-5 bg-white">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Toolkit</p>
                <p className="text-gray-900">Figma, React, Tailwind</p>
              </div>
              <div className="rounded-2xl border border-gray-200 shadow-sm p-5 bg-white">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Based in</p>
                <p className="text-gray-900">United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
