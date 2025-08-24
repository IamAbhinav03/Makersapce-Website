import React, { useState, useEffect } from "react";

// TYPE DEFINITIONS
interface IconProps extends React.SVGProps<SVGSVGElement> {}
interface AccordionItem {
  question: string;
  answer: string;
}
interface AccordionProps {
  items: AccordionItem[];
}
interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

// ICONS (using inline SVGs from Lucide Icons, as shadcn/ui does)

const ClockIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SunIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const MenuIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const TwitterIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.4 1.4-3.3 1.4c-1 .8-2.1 1.4-3.3 1.4s-3.3-1.4-3.3-1.4c-1.4 1.4-3.3 1.4-3.3 1.4s-1.4-1.4-1.4-3.3c-1.4-1.4-1.4-3.3-1.4-3.3s1.4-1.4 3.3-1.4c1.4-1.4 1.4-3.3 1.4-3.3s1.4-1.4 3.3-1.4c1.4-1.4 3.3-1.4 3.3-1.4s1.4 1.4 1.4 3.3c1.4 1.4 1.4 3.3 1.4 3.3s1.4 1.4 3.3 1.4c1.4 1.4 1.4 3.3 1.4 3.3s-1.4 1.4-3.3 1.4z" />
  </svg>
);

const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// SHADCN-LIKE ACCORDION COMPONENT
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-neutral-300 dark:border-neutral-800"
        >
          <button
            className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-colors duration-200"
            onClick={() => handleClick(index)}
          >
            <span>{item.question}</span>
            <ChevronDownIcon
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="pb-5 pr-4 text-neutral-600 dark:text-neutral-400">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// HEADER COMPONENT
const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navLinks: string[] = ["Home", "About", "FAQ", "Contact"];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
            >
              MakerSpace
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, link.toLowerCase())}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-950 focus:ring-neutral-500 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 dark:focus:ring-offset-neutral-950 focus:ring-neutral-500"
              >
                {isMenuOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-200 dark:border-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, link.toLowerCase())}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

// HERO SECTION
const HeroSection: React.FC = () => (
  <section id="home" className="pt-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="relative w-full aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/20 dark:shadow-black/40">
        <img
          src="./hero.jpeg"
          alt="Makerspace workshop"
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/1600x900/cccccc/333333?text=Image+Not+Found";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Innovate. Create. Collaborate.
          </h1>
          <p className="mt-4 text-lg md:text-3xl text-neutral-200 max-w-2xl">
            Your community workshop for digital fabrication, prototyping, and
            hands-on learning.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ABOUT SECTION
const AboutSection: React.FC = () => (
  <section
    id="about"
    className="py-12 md:py-24 bg-white/50 dark:bg-neutral-900/50"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          What is a Makerspace?
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          A place where creativity and technology converge.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
        <p>
          A makerspace is a collaborative workspace where people with common
          interests, often in computers, machining, technology, science, digital
          art, or electronic art, can meet, socialize, and collaborate. Think of
          it as a community center with tools. Makerspaces provide access to
          equipment, community, and education to enable community members to
          design, prototype, and create manufactured works that wouldn't be
          possible to create with the resources available to individuals working
          alone.
        </p>
        <p>
          These spaces are designed to be open and accessible, fostering a
          culture of experimentation and peer-to-peer learning. Whether you're a
          seasoned engineer, a curious hobbyist, or an artist exploring new
          mediums, our makerspace provides the resources and support you need to
          bring your ideas to life. From 3D printers and laser cutters to
          electronics workbenches and woodworking tools, the possibilities are
          limited only by your imagination.
        </p>
      </div>
    </div>
  </section>
);

// HOURS & LOCATION SECTION
const HoursLocationSection: React.FC = () => (
  <section id="hours" className="py-12 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Hours & Location
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Come visit us and start creating.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
        <div className="bg-white/50 dark:bg-neutral-900/50 p-8 rounded-lg">
          <ClockIcon className="w-12 h-12 mx-auto text-neutral-500 dark:text-neutral-400 mb-4" />
          <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Working Hours
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Monday - Friday
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            11:00 AM - 6:00 PM
          </p>
        </div>
        <div className="bg-white/50 dark:bg-neutral-900/50 p-8 rounded-lg">
          <MapPinIcon className="w-12 h-12 mx-auto text-neutral-500 dark:text-neutral-400 mb-4" />
          <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Our Location
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Academic Block 3
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Rooms: AC03 - 006, 007
          </p>
        </div>
      </div>
    </div>
  </section>
);

// FAQ SECTION
const FaqSection: React.FC = () => {
  const faqItems: AccordionItem[] = [
    {
      question: "Who can use the makerspace?",
      answer:
        "Our makerspace is open to all students, faculty, and staff of the university. We also offer community memberships for local residents. All you need is a passion for creating and a willingness to learn.",
    },
    {
      question: "Do I need any prior experience?",
      answer:
        "Not at all! We welcome makers of all skill levels. We offer introductory workshops and have staff on hand to help you get started with the equipment safely. The best way to learn is by doing.",
    },
    {
      question: "What kind of equipment is available?",
      answer:
        "We have a wide range of tools including 3D printers, a laser cutter, a CNC mill, soldering stations, sewing machines, and a variety of hand and power tools for woodworking and electronics.",
    },
    {
      question: "Is there a cost to use the space?",
      answer:
        "Access to the space and most tools is free for university members. There may be a small fee for materials like 3D printer filament or acrylic sheets, which can be purchased on-site.",
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Have questions? We've got answers.
          </p>
        </div>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};

// FOOTER SECTION
const Footer: React.FC = () => (
  <footer
    id="contact"
    className="bg-white/50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Get in Touch
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Ashoka University
            <br />
            Rajiv Gandhi Education City
            <br />
            Sonipat, Haryana 131029
          </p>
          <p>
            <a
              href="mailto:contact@makerspace.edu"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              makerspace@ashoka.edu.in
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="md:col-span-1">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.439839958316!2d77.1084208755106!3d28.94432787549491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da57a7e67a687%3A0x599b11874d1a69a1!2sAshoka%20University!5e0!3m2!1sen!2sin!4v1692880856123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashoka University Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8 text-center text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} Makerspace. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// MAIN APP COMPONENT
export default function App() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // On mount, check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to the root element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-transparent min-h-screen font-sans antialiased">
      {/* Background Layers: Grid, Blur, and Noise */}
      <div className="fixed inset-0 z-[-10]">
        {/* Base color */}
        <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950"></div>
        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        {/* Noise Texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://assets.codepen.io/1468070/noise.png)",
            opacity: 0.03,
          }}
        ></div>
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <HoursLocationSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
