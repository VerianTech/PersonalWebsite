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
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center text-center py-4 px-4 items-center font-bold text-gray-300 text-sm gap-4 md:gap-6">
      {/* Map through content to create the grid */}
      {gridContent.map((item, index) => (
        <>
          {/* Text div with hover effect */}
          <div 
            key={`text-${index}`}
            className={`transition-colors duration-300 ${hoveredColumn === index ? 'text-gray-400 cursor-pointer' : 'text-gray-300'}`}
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
            <p>{item.text}</p>
          </div>
        </>
      ))}
      
      {/* Emoji row */}
      {gridContent.map((item, index) => (
        <div 
          key={`emoji-${index}`}
          className={`sm:text-xl md:text-5xl lg:text-7xl xl:text-9xl ${hoveredColumn === index ? 'text-gray-400 cursor-pointer' : 'text-gray-300'}`}
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
          <p>{`${item.emoji}`}</p>
        </div>
      ))}
    </div>
  );
}