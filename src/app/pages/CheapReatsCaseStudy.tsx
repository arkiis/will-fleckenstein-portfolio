import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import avatarImg from "figma:asset/8b444409ed312b92316d661b42dd210f01c80cf8.png";
import rnWebImg from "figma:asset/737ce3c0834f68605e870509d46d0d23f5bdee20.png";
import dropdownImg from "figma:asset/4301ef9d3558a7ea3ace84a3fd607a5bdfddcd3a.png";
import socialProofImg from "figma:asset/00cbdeb68fdbeb7769e0d7ac8c301ee76e738bff.png";
import specialOfferImg from "figma:asset/c584e229ab7a455e856784922d907e180f36541d.png";
import reportIssueImg from "figma:asset/3173c103f4ea7097334f52b3ad6bf034a75ef567.png";
import dataTableImg from "figma:asset/f9343e2247e1943a4ff9e74fce46cd31a8ada01e.png";
import { useVisitorTracking } from "../hooks/useVisitorTracking";
import Footer from "../components/Footer";
import SideNavigation from "../components/SideNavigation";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "migration", label: "Migration" },
  { id: "components", label: "Components" },
];

export default function CheapReatsCaseStudy() {
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
        <div className="inline-block bg-green-50 text-green-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
          Frontend Developer
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 leading-tight max-w-4xl mx-auto">
          CheapReats
        </h1>
      </section>

      {/* Overview */}
      <section id="overview" className="px-6 md:px-12 max-w-7xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            For CheapReats, I was assigned to migrate their app to the web and also to build additional components in their UI library. This involved both architectural decisions and hands-on development work.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Role</h3>
          <p className="font-medium text-gray-900 mb-6">Frontend Developer</p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Timeline</h3>
          <p className="font-medium text-gray-900 mb-6">6 Months</p>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tools</h3>
          <p className="font-medium text-gray-900">React Native Web, TypeScript</p>
        </div>
      </section>

      {/* Cross-Platform Migration */}
      <section id="migration" className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Cross-Platform Migration</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I migrated their React app to the web utilizing <strong>react-native-web</strong>. This cross-platform approach allowed us to share a single codebase across iOS, Android, web browsers, and desktop applications (macOS and Electron), significantly reducing development overhead while maintaining native-like performance and consistency.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
          <img src={rnWebImg} alt="React Native Web cross-platform deployment on iOS, Android, macOS, Web, and Electron" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Component Library */}
      <section id="components" className="px-6 md:px-12 max-w-7xl mx-auto mb-24 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Component Library</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          I functionally built and integrated a variety of accessible and responsive components into the CheapReats UI library. These elements were designed to be robust and highly reusable across the different platforms we supported.
        </p>

        {/* Component Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Component 1: Dropdown */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center">
            <img src={dropdownImg} alt="Dropdown Menu Component" className="max-w-full h-auto drop-shadow-sm" />
            <p className="mt-8 text-gray-600 font-medium text-center">Interactive Dropdown Menu</p>
          </div>

          {/* Component 2: Social Proof Toast */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center">
            <img src={socialProofImg} alt="Social Proof Notification Component" className="max-w-full h-auto drop-shadow-sm" />
            <p className="mt-8 text-gray-600 font-medium text-center">Social Proof Notification</p>
          </div>

          {/* Component 3: Newsletter Form */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center md:col-span-2">
            <img src={specialOfferImg} alt="Special Offer Form Component" className="max-w-full h-auto rounded shadow-sm" />
            <p className="mt-8 text-gray-600 font-medium text-center">Newsletter & Special Offer Modal</p>
          </div>

          {/* Component 4: Report Issue Form */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center">
            <img src={reportIssueImg} alt="Report Issue Form Component" className="max-w-full h-auto rounded shadow-sm" />
            <p className="mt-8 text-gray-600 font-medium text-center">Dynamic Issue Reporting Form</p>
          </div>

          {/* Component 5: Data Table */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center">
            <img src={dataTableImg} alt="Data Table Component" className="max-w-full h-auto rounded shadow-sm" />
            <p className="mt-8 text-gray-600 font-medium text-center">Sortable Products Data Table</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}