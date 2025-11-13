import React, { useState } from 'react';
import './App.css'
import GeneralThingsGrid from './components/GeneralThingsGrid';
import ExperienceAndSkills from './components/ExperienceAndSkills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { scrollToSection } from './utils/logic';

function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleMobileMenuClick = (sectionId: string) => {
		scrollToSection(sectionId);
		setIsMobileMenuOpen(false); // Close menu after clicking
	};
	return (
	  <div className="min-h-screen text-black"
	  	style={{
			backgroundImage: "linear-gradient(#204d58,#46a6be)",
		}}
	  >
		{/* Top Navbar */}
		<nav className="relative px-4 sm:px-8 md:px-14 py-2 flex justify-between items-center shadow-md">
		  {/* Logo / Brand */}
			<div className="flex-shrink-0 z-20 relative">
				<img
					src="./src/assets/verian_logo-removebg-preview.png"
					alt="logo"
					className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto" />
			</div>

		  {/* Horizontal Menu Items - Hidden on mobile, shown on larger screens */}
		  <ul className="text-white hidden md:flex text-sm md:text-base lg:text-lg space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 font-bold font-roboto">
			<li onClick={() => scrollToSection("about-me")}
				className="hover:text-gray-300 cursor-pointer transition-colors duration-200">About Me</li>
			<li onClick={() => scrollToSection("experience")}
				className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Experience</li>
			<li onClick={() => scrollToSection("education")}
				className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Education</li>
			<li onClick={() => scrollToSection("portfolio")}
				className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Portfolio</li>
			<li onClick={() => scrollToSection("contact")}
				className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Contact</li>
		  </ul>

		  {/* Mobile Menu Button - Show only on mobile */}
		  <div className="md:hidden z-20 relative">
			<button 
				onClick={toggleMobileMenu}
				className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
				aria-label="Toggle mobile menu"
			>
			  <svg 
				className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
				fill="none" 
				stroke="currentColor" 
				viewBox="0 0 24 24"
			  >
				{isMobileMenuOpen ? (
				  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				) : (
				  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				)}
			  </svg>
			</button>
		  </div>

		  {/* Mobile Menu Overlay */}
		  <div 
			className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 md:hidden ${
			  isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
			onClick={toggleMobileMenu}
		  ></div>

		  {/* Mobile Menu */}
		  <div 
			className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-slate-800 to-slate-900 shadow-xl z-10 transform transition-transform duration-300 ease-in-out md:hidden ${
			  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		  >
			<div className="pt-20 px-6">
			  <ul className="space-y-6 font-bold font-roboto">
				<li onClick={() => handleMobileMenuClick("about-me")}
					className="text-white hover:text-gray-300 cursor-pointer transition-all duration-200 text-lg border-b border-gray-600 pb-2 hover:border-gray-400">
					About Me
				</li>
				<li onClick={() => handleMobileMenuClick("experience")}
					className="text-white hover:text-gray-300 cursor-pointer transition-all duration-200 text-lg border-b border-gray-600 pb-2 hover:border-gray-400">
					Experience
				</li>
				<li onClick={() => handleMobileMenuClick("education")}
					className="text-white hover:text-gray-300 cursor-pointer transition-all duration-200 text-lg border-b border-gray-600 pb-2 hover:border-gray-400">
					Education
				</li>
				<li onClick={() => handleMobileMenuClick("portfolio")}
					className="text-white hover:text-gray-300 cursor-pointer transition-all duration-200 text-lg border-b border-gray-600 pb-2 hover:border-gray-400">
					Portfolio
				</li>
				<li onClick={() => handleMobileMenuClick("contact")}
					className="text-white hover:text-gray-300 cursor-pointer transition-all duration-200 text-lg border-b border-gray-600 pb-2 hover:border-gray-400">
					Contact
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
  
		{/* Main content */}
		<main>
		  {/* Hero Section */}
		  <div className="flex flex-col md:flex-row py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 items-center justify-center
		  	text-base sm:text-lg md:text-xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="rounded-full overflow-hidden shadow-md
                w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-54 lg:h-54 xl:w-60 xl:h-60">
                <img
                    src="./src/assets/me_round.png"
                    alt="image"
                    className="w-full h-full object-cover aspect-square"/>
            </div>
            <div className="text-center md:text-left font-bold text-gray-300 max-w-none md:max-w-lg lg:max-w-xl">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Hello there 👋🏻</span>
                <br/><br/>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl">
                    I'm Dorian, computer science enthusiast and software engineer
                </span>
                <br/><br/>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                    I work on building high scalable systems, below you can find my personal portfolio as well as my CV
                </span>
            </div>
          </div>

		  {/* About Me Section */}
		  <div
		  	id="about-me"
		  	className="text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8">
			<div className="text-center px-4 sm:px-6 md:px-8 font-bold text-gray-100 mb-4">
				<span className="text-lg sm:text-xl md:text-2xl">Some general things about me 🪐</span>
			</div>
			<GeneralThingsGrid />
		  </div>

		  {/* Experience Section */}
		  <div
		  	id="experience"
		  	className="text-base sm:text-lg md:text-xl">
		  	<ExperienceAndSkills />
		  </div>

		  {/* Education Section */}
		  <div
		  	id="education"
		  	className="text-base sm:text-lg md:text-xl">
			<div className="text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 font-bold text-gray-100">
				<span className="text-lg sm:text-xl md:text-2xl">Education plays a key part in my life 📖</span>
			</div>
			<Education />
		  </div>

		  {/* Portfolio Section */}
		  <div
		  	id="portfolio"
		  	className="text-base sm:text-lg md:text-xl">
			<div className="text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 font-bold text-gray-100">
				<span className="text-lg sm:text-xl md:text-2xl">Check out some of my projects 📌</span>
			</div>
			<Portfolio />
		  </div>

		  {/* Contact Section */}
		  <div
		  	id="contact"
		  	className="text-base sm:text-lg md:text-xl">
			<Contact />
		  </div>
		</main>
	  </div>
	);
  }
  
  export default App;