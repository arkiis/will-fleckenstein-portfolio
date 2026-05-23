import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import avatarImg from "figma:asset/8b444409ed312b92316d661b42dd210f01c80cf8.png";
import loFiSketches from "figma:asset/6c46566f3903020d985044367570c8130b402098.png";
import loFiWireframes from "figma:asset/848e0cbf161baba62116b48ee29042c5f1ab4bcc.png";
import hiFiScreens from "figma:asset/45ed54da9adb02df5d0df008f98ca69214c39f0e.png";
import teamCharacters from "figma:asset/5d998b3d2c4faeec3343638de55272fe98bd6f33.png";import aiPromptImage from "figma:asset/ada9bbe838228d057ef739947972f433ab86006d.png";
import { useVisitorTracking } from "../hooks/useVisitorTracking";
import Footer from "../components/Footer";
import SideNavigation from "../components/SideNavigation";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "lo-fi", label: "Lo-Fi" },
  { id: "hi-fi", label: "Hi-Fi" },
  { id: "ai-design", label: "AI Design" },
  { id: "retrospective", label: "Retrospective" },
];

export default function HolidayHubCaseStudy() {
  useVisitorTracking();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SideNavigation sections={sections} />

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium">
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
        <Link to="/">
          <img src={avatarImg} alt="Will avatar" className="w-12 h-12 object-cover rounded-full shadow-sm" />
        </Link>
      </nav>

      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-12 md:mt-20 text-center">
        <div className="inline-block bg-blue-50 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
          UX/UI Design
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 leading-tight max-w-4xl mx-auto">
          Holiday Hub
        </h1>
      </section>

      {/* Overview */}
      <section id="overview" className="px-6 md:px-12 max-w-7xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Holiday Hub is a personal project where I designed a platform to help people discover, plan, and organize holiday celebrations. The goal was to create an intuitive experience that brings all holiday planning into one place.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            For this project, I leveraged AI tools to assist with ideation, content generation, and refining the design process — allowing me to move faster from concept to prototype while maintaining a human-centered approach to the final design decisions.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Role</h3>
          <p className="font-medium text-gray-900 mb-6">UX/UI Designer</p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Team</h3>
          <p className="font-medium text-gray-900 mb-6">2 UI/UX designers & 2 graphic designers</p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Timeline</h3>
          <p className="font-medium text-gray-900 mb-6">1 Month</p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tools</h3>
          <p className="font-medium text-gray-900">Figma</p>
        </div>
      </section>

      {/* Lo-Fi Wireframes */}
      <section id="lo-fi" className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Lo-Fi Wireframes</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I started by sketching out the core user flows and screen layouts, focusing on the information architecture and how users would navigate between holiday discovery, event planning, and task management.
        </p>
        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
            <img src={loFiSketches} alt="Lo-fi sketches for Holiday Hub" className="w-full h-auto" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
            <img src={loFiWireframes} alt="Lo-fi wireframe screens for Holiday Hub" className="w-1/2 md:w-1/2 h-auto mx-auto" />
          </div>
        </div>
      </section>

      {/* Hi-Fi Designs */}
      <section id="hi-fi" className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Hi-Fi Designs</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The high-fidelity designs brought the lo-fi wireframes to life with a vibrant color palette and polished UI elements. AI was used to help generate copy and explore visual directions, while I made all final design decisions.
        </p>
        <div className="space-y-12">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
            <img src={hiFiScreens} alt="Holiday Hub hi-fi screens" className="w-full h-auto" />
          </div>

          <div id="ai-design" className="bg-blue-50 rounded-2xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-gray-200">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg inline-block border border-gray-200">
                <img src={aiPromptImage} alt="AI prompt version history" className="max-w-full h-auto" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">AI Design Exploration</h3>
              <p className="text-lg text-gray-600 leading-relaxed">I used AI to rapidly explore and refine many UI directions during the design process. After reviewing hundreds of variations, I selected and improved the strongest ideas to help shape the final experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retrospective */}
      <section id="retrospective" className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Retrospective</h2>
        <ul className="space-y-4 text-lg text-gray-600 leading-relaxed list-disc pl-6">
          <li>
            Using AI as a design partner helped me move through the ideation phase much faster, but I learned that the best results came when I used AI output as a starting point and iterated on it with my own design judgment.
          </li>
          <li>
            I could have spent more time on user testing to validate the information architecture before jumping into high-fidelity designs.
          </li>
          <li>
            This project reinforced the importance of designing mobile-first — several layout decisions improved significantly once I prioritized the mobile experience.
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}