import { useState } from 'react';
import { scrollToSection } from '../utils/logic';

export default function GeneralThingsGrid() {
  // State to track which column is being hovered
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  
  // Content for the grid
  const gridContent = [
    {
      name: "experience",
      text: "Software engineer with experience in development, DevOps and site reliability engineering. Always looking forward to new challenges",
      emoji: "{ 💻 }"
    },
    {
      name: "education",
      text: "Computer Science and Engineering student, lifelong learner",
      emoji: "{ 📚 }"
    },
    {
      name: "portfolio",
      text: "Personal projects are one of the keys to becoming a better version of yourself",
      emoji: "{ 💡 }"
    }
  ];
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      {/* Mobile Layout: Stacked cards */}
      <div className="block md:hidden space-y-6">
        {gridContent.map((item, index) => (
          <div 
            key={index}
            className={`bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 transition-all duration-300 transform hover:scale-105 ${
              hoveredColumn === index ? 'bg-gray-700/40 border-gray-600/70 cursor-pointer' : ''
            }`}
            onMouseEnter={() => setHoveredColumn(index)}
            onMouseLeave={() => setHoveredColumn(null)}
            onClick={() => {
              if (item.name.includes("experience")) {
                scrollToSection("experience");
              } else if (item.name.includes("education")) {
                scrollToSection("education");
              } else if (item.name.includes("portfolio")) {
                scrollToSection("portfolio");
              }
            }}
          >
            <div className="text-center">
              <div className={`text-4xl mb-4 transition-colors duration-300 ${
                hoveredColumn === index ? 'text-gray-300' : 'text-gray-400'
              }`}>
                {item.emoji}
              </div>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                hoveredColumn === index ? 'text-gray-200' : 'text-gray-300'
              }`}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout: Grid with text and emoji rows */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
		  {gridContent.map((item, index) => (
			<div
				key={`${index}`}
				className={`grid grid-rows-2 ${
						hoveredColumn === index ? 'text-gray-200 bg-gray-800/30 cursor-pointer rounded-lg' : 'text-gray-300'
					}`}
			>
				<div 
					className={`text-center p-4 transition-all duration-300 cursor-pointer rounded-lg`}
					onMouseEnter={() => setHoveredColumn(index)}
					onMouseLeave={() => setHoveredColumn(null)}
					onClick={() => {
						if (item.name.includes("experience")) {
						scrollToSection("experience");
						} else if (item.name.includes("education")) {
						scrollToSection("education");
						} else if (item.name.includes("portfolio")) {
						scrollToSection("portfolio");
						}
					}}
				>
					<p className="text-sm md:text-base lg:text-lg font-medium leading-relaxed">
						{item.text}
					</p>
				</div>
			
				<div className="gap-4 lg:gap-6 xl:gap-10 mt-6 lg:mt-10">
					<div 
					className={`text-center transition-all duration-300 cursor-pointer rounded-lg`}
					onMouseEnter={() => setHoveredColumn(index)}
					onMouseLeave={() => setHoveredColumn(null)}
					onClick={() => {
						if (item.name.includes("experience")) {
						scrollToSection("experience");
						} else if (item.name.includes("education")) {
						scrollToSection("education");
						} else if (item.name.includes("portfolio")) {
						scrollToSection("portfolio");
						}
					}}
					>
						<div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
							{item.emoji}
						</div>
					</div>
				</div>
			</div>
		  ))}
		</div>
	  </div>
    </div>
  );
}