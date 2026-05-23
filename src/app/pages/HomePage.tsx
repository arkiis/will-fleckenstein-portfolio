import heroBanner from "figma:asset/d1f6dcb3f86c49a15a1f897942848e2acc458df5.png";
import newCaseStudyImg from "../../imports/Frame_6__3___1_.png";
import harmoniaImg from "../../imports/Frame_4__5___1_.png";
import holidayHubImg from "../../imports/Frame_3__5___1_.png";
import cheapreatsImg from "../../imports/Frame_5__1___1_.png";
import avatarImg from "figma:asset/8b444409ed312b92316d661b42dd210f01c80cf8.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useVisitorTracking } from "../hooks/useVisitorTracking";
import Project from "../../imports/Project/Project";
import Footer from "../components/Footer";

const projects = [
  { title: "Connecting Students with Student Entrepreneurs", img: newCaseStudyImg, link: "/product-design", role: "Product Designer", date: "Spring 2026" },
  { title: "Helping Roommates Build Better Shared Living Habits", img: harmoniaImg, link: "/harmonia", role: "Product Designer", date: "Spring 2026" },
  { title: "A Festive Holiday Hub for Gainesville, Florida", img: holidayHubImg, link: "/holiday-hub", role: "Product Designer", date: "Fall 2025" },
  { title: "Bringing a Mobile Food Delivery App to the Web", img: cheapreatsImg, link: "/cheapreats", role: "Frontend Developer", date: "Summer 2020" },
];

export default function HomePage() {
  useVisitorTracking();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <img src={avatarImg} alt="Will avatar" className="w-12 h-12 object-cover rounded-[0px]" />
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-black font-semibold hover:text-gray-900 active:text-gray-700 transition-colors">
            Projects
          </a>
          <Link to="/about" className="text-gray-700 hover:text-black active:text-gray-600 transition-colors">
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
        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <a href="#work" className="text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <Link to="/about" className="text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a
            href="https://drive.google.com/file/d/1tZv0Ts7-z4SHjTG3ziMyiTe8iKFR7iyT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}

      {/* Hero */}
      <section className="px-4 md:px-12 max-w-7xl mx-auto mt-4">
        <div className="rounded-2xl overflow-hidden">
          <img src={heroBanner} alt="Will - Product Designer" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="px-4 md:px-12 max-w-7xl mx-auto mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <Link
              key={p.title}
              to={p.link}
              className="block"
            >
              <Project title={p.title} role={p.role} img={p.img} date={p.date} isFirstCard={index === 0} />
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}