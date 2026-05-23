import { Link } from "react-router";
import { ArrowLeft, FileText, Figma } from "lucide-react";
import avatarImg from "figma:asset/8b444409ed312b92316d661b42dd210f01c80cf8.png";
import heroImg from "../../imports/Frame_6.png";
import teamPhoto from "../../imports/IMG_0293.JPG";
import academicPdfNew from "../../imports/App_Design_(1)-1.pdf";
import img0 from "../../imports/image.png";
import img1 from "../../imports/image-1.png";
import img2 from "../../imports/image-2.png";
import img3 from "../../imports/image-3.png";
import img4 from "../../imports/image-4.png";
import img5 from "../../imports/image-5.png";
import img6 from "../../imports/image-6.png";
import img7 from "../../imports/image-7.png";
import img8 from "../../imports/image-8.png";
import img9 from "../../imports/image-9.png";
import img10 from "../../imports/image-10.png";
import { useVisitorTracking } from "../hooks/useVisitorTracking";
import Footer from "../components/Footer";
import SideNavigation from "../components/SideNavigation";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "branding", label: "Branding" },
  { id: "low-fi", label: "Low-fi" },
  { id: "hi-fi", label: "Hi-fi" },
  { id: "conclusion", label: "Conclusion" },
];

export default function ProductDesignCaseStudy() {
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
        <div className="inline-block bg-indigo-50 text-indigo-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
          Product Designer
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900 leading-tight max-w-4xl mx-auto">Twine Product Design Case Study</h1>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-20 drop-shadow-xl bg-gray-50">
          <img src={heroImg} alt="Product Design Case Study Cover" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="px-6 md:px-12 max-w-7xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Twine is a mobile marketplace app that helps college students find and book trusted student run services on campus. Instead of searching through Instagram, or word of mouth, students can use Twine as one central place to discover services like photography, tutoring, food, nails, and creative work
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Want a deeper dive?</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">Feel free to check out our academic article for a more in depth look at our app's design and methodology, or try out the interactive prototype!</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1UeEpDunwQ106jQZH5OxfVIeLfRQ9KPzd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium shadow-sm w-fit"
              >
                <FileText size={20} />
                Read Twine's App Design Article
              </a>
              <a 
                href="https://www.figma.com/proto/aQ9fMLBp5MEejxmnEMhLCq/Twine-App?node-id=460-1677&p=f&t=lRzDb2V4Kmb1DStL-1&scaling=scale-down&content-scaling=fixed&page-id=460%3A1675&starting-point-node-id=460%3A1677" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium shadow-sm w-fit"
              >
                <Figma size={20} />
                View Interactive Prototype
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Role</h3>
          <p className="font-medium text-gray-900 mb-6">Product Designer</p>
          
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Team</h3>
          <p className="font-medium text-gray-900 mb-6">3 UI/UX designers</p>
          
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Timeline</h3>
          <p className="font-medium text-gray-900 mb-6">3 Months</p>
          
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tools</h3>
          <p className="font-medium text-gray-900">Figma</p>
        </div>
      </section>
      
      {/* Case Study Details */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 pb-12 space-y-24">
        {/* Research */}
        <div id="research">
          <div className="mb-8 md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">Research</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Understanding the users and their needs through comprehensive research, identifying pain points, and outlining opportunities for improvement. The foundation includes our detailed User Persona, styling exploration, and logo evolution.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img0} alt="User Persona" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img1} alt="Colors and Fonts" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img2} alt="Logo Evolution" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Branding */}
        <div id="branding" className="border-t border-gray-100 pt-16">
          <div className="mb-8 md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">Branding</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Establishing a cohesive visual identity that resonates with our target audience.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img4} alt="Wireframe 2" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img5} alt="Wireframe 3" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Low-fi */}
        <div id="low-fi" className="border-t border-gray-100 pt-16">
          <div className="mb-8 md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">Low-fi Wireframes</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Translating concepts into structural wireframes to map out user flows, layout architecture, and essential functional components.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img6} alt="Wireframe 4" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Hi-fi */}
        <div id="hi-fi" className="border-t border-gray-100 pt-16">
          <div className="mb-8 md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">Hi-fi Designs</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The finalized high-fidelity screens, combining our established branding with the structural foundation to deliver a polished user experience.
            </p>
          </div>
          <div className="flex flex-col gap-12 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img7} alt="Hi-fi Screen 1" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="mb-8 md:w-2/3">
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-gray-900">Design Principles</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Using the CASA paradigm and iOS design guidelines:
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img8} alt="Design Principle 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img9} alt="Design Principle 2" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-gray-50">
              <img src={img10} alt="Design Principle 3" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="px-6 md:px-12 max-w-7xl mx-auto mb-24 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Conclusion</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          This was a project in my user experience class with a great team of my two other classmates. Go gators! 🐊
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 drop-shadow-xl bg-white">
          <img src={teamPhoto} alt="Team photo" className="w-full h-auto" />
        </div>
      </section>

      <Footer />
    </div>
  );
}