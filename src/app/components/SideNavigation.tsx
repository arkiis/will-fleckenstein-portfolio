import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface SideNavigationProps {
  sections: Section[];
}

export default function SideNavigation({ sections }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group flex items-center gap-3 transition-all duration-200`}
          >
            <div
              className={`h-2 rounded-full transition-all duration-200 ${
                activeSection === section.id
                  ? "w-12 bg-indigo-600"
                  : "w-6 bg-gray-400 group-hover:w-8"
              }`}
            />
            <span
              className={`text-sm font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? "text-gray-900"
                  : "text-gray-400 group-hover:text-gray-600"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
