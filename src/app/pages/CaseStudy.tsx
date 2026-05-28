import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import avatarImg from "figma:asset/8b444409ed312b92316d661b42dd210f01c80cf8.png";
import teamPhoto from "figma:asset/a8684d13b10e4325c2669339525b0103e0f267a7.png";
import researchTable from "figma:asset/e49445b00b9eb788b803481ca43d7d41187da349.png";
import whiteboardSketch from "figma:asset/b2cfd02b0f0703a2241b72cbf370a25094ba9cd6.png";
import userPersonas from "figma:asset/17c2d7d4e90f8559d415960644b2b3e425f15964.png";
import painPoints from "figma:asset/7a31dd713f84de0d08a6ecefe9d1ee5edcc39ffd.png";
import colorScheme from "figma:asset/b2e341e873f37043cf571addbfd29e2280200295.png";
import loFiWireframes from "figma:asset/6fde7f22d1818573da3cee4e01538db939b5d7ca.png";
import hiFiScreens from "figma:asset/94f0f78aaf41148dc8312761563c8862dda8d10d.png";
import { useVisitorTracking } from "../hooks/useVisitorTracking";
import Footer from "../components/Footer";
import SideNavigation from "../components/SideNavigation";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "personas", label: "User Personas" },
  { id: "pain-points", label: "Pain Points" },
  { id: "lo-fi", label: "Lo-Fi" },
  { id: "hi-fi", label: "Hi-Fi" },
  { id: "retrospective", label: "Retrospective" },
  { id: "conclusion", label: "Conclusion" },
];

export default function CaseStudy() {
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
        <div className="inline-block bg-purple-50 text-purple-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
          UX Design
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 leading-tight max-w-4xl mx-auto">
          Roommate Management App for College Students
        </h1>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-20 drop-shadow-xl bg-gray-50">
          <video src="https://i.imgur.com/urNT9fU.mp4" autoPlay loop muted playsInline className="w-full h-auto" />
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="px-6 md:px-12 max-w-7xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            As part of my design team in the Gator UI Club, we came together to focus on a common pain point students have, and ultimately voted on creating a better way to manage roommate communication and tasks.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            A total of six students worked on this project, contributing to the full design process from brainstorming solutions to presenting the final prototype.
          </p>
          <a
            href="https://www.figma.com/proto/d1QtSnRM2ik6eKBblYYbKg/FYDT-Spring-2026?node-id=552-1295&t=iVL0QclOmlYVxE0b-1&starting-point-node-id=552%3A1295"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gray-900 text-white hover:bg-gray-700 transition-colors shadow-md"
          >
            View Figma Prototype
          </a>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Role</h3>
          <p className="font-medium text-gray-900 mb-6">UX Designer</p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Timeline</h3>
          <p className="font-medium text-gray-900 mb-6"> 3 Months</p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Team</h3>
          <p className="font-medium text-gray-900">6 UI/UX Designers</p>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Research</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Interviews were conducted with University of Florida students who have roommates. These are our findings which helped shape our user personas.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
          <img src={researchTable} alt="Research findings table" className="w-full h-auto" />
        </div>
      </section>

      {/* User Personas */}
      <section id="personas" className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">User Personas</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
          <img src={userPersonas} alt="User personas - Evelyn Brooks and Blake Jones" className="w-full h-auto" />
        </div>
      </section>

      {/* Pain Points */}
      <section id="pain-points" className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Pain Points</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          From our research we discovered these common pain points:
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
          <img src={painPoints} alt="Pain points - Irresponsibility, Unfairness, Miscommunication, Tension" className="w-full h-auto" />
        </div>
      </section>

      {/* Lo-Fi Wireframes */}
      <section id="lo-fi" className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Lo-Fi Wireframes</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">Our team got together and collectively sketched what the solution could be on a whiteboard. From that rough idea, we expanded on building out the wireframes. I was responsible for creating the "Ceate Tasks" and "Manage Household" screens.</p>
        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
            <img src={whiteboardSketch} alt="Whiteboard wireframe sketches" className="w-full h-auto" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
            <img src={loFiWireframes} alt="Lo-fi wireframe screens" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Hi-Fi Designs */}
      <section id="hi-fi" className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Hi-Fi Designs</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Following our flower gamification idea, we implemented that in addition to a flower aesthetic woven into it.
        </p>
        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
            <img src={colorScheme} alt="Design system - Color scheme, typography, logo, and icons" className="w-full h-auto" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
            <img src={hiFiScreens} alt="Hi-fi wireframe screens" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Retrospective */}
      <section id="retrospective" className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Retrospective</h2>
        <ul className="space-y-4 text-lg text-gray-600 leading-relaxed list-disc pl-6">
          <li>
            This was a fast paced project and I realize I need to optimize my time more efficiently when it comes to coming up with design solutions and prototyping
          </li>
          <li>
            I built many UI components and I was aware my teammates didn't utilize them when it was appropriate to do so on certain screens. I should have informed them on what I created and how they can be used and add documentation.
          </li>
          <li>
            Our app seems a bit bland and would have benefited from more usage of color, images, graphics, etc.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="px-6 md:px-12 max-w-7xl mx-auto mb-24 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Conclusion</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          This was presented to the Gator UI club with our final prototype done. This is when our project came to a close, but based on our user insights I believe we created a realistic solution for students to help deal with conflict in relation to tasks or hosted events.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
          <img src={teamPhoto} alt="Harmonia team" className="w-full h-auto object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  );
}