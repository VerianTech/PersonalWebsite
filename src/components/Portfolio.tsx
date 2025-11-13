import { useState, useEffect } from 'react';

interface Technology {
	name: string;
	icon: string;
}

interface TechStackProps {
	technologies: Technology[];
}

function TechStack({ technologies }: TechStackProps) {
	return (
		<div className="flex justify-center gap-2 px-2">
			{technologies.slice(0, 4).map((tech: Technology, index: number) => (
				<img
					key={index}
					src={tech.icon}
					alt={tech.name}
					className="h-6 w-6 object-contain bg-white rounded p-1"
					title={tech.name}
				/>
			))}
		</div>
	);
}

function ViewDetails({ link }: { link: string }) {
	const handleClick = () => {
		window.open(link, '_blank', 'noopener,noreferrer');
	};

	return (
		<button
			onClick={handleClick}
			className="bg-white/20 hover:bg-white/30 text-white px-4 py-2
				rounded-md transition-colors duration-200 w-fit mx-auto"
		>View Details</button>
	)
}

export default function Portfolio() {
	const [startIndex, setStartIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	
	const [elementsToDisplay, setElementsToDisplay] = useState(3);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 768) {
				setElementsToDisplay(1); // mobile
			} else if (window.innerWidth < 1024) {
				setElementsToDisplay(2); // sm
			} else if (window.innerWidth < 1280) {
				setElementsToDisplay(3); // md
			} else if (window.innerWidth < 1536) {
				setElementsToDisplay(4); // lg
			} else if (window.innerWidth < 1920) {
				setElementsToDisplay(5); // xl
			} else {
				setElementsToDisplay(6); // 2xl+
			}
		}

		// Run it once on mount
		handleResize();

		// Add listener
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const projectTechStacks = [
		[
			{ name: 'Kotlin',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
			{ name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
			{ name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
			{ name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
		],
		[
			{ name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
			{ name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' }
		],
		[
			{ name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
			{ name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
		],
		[
			{ name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
			{ name: 'Flower', icon: './src/assets/tech_stack/flower-logo.png' },
		],
		[
			{ name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
			{ name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
		],
		[
			{ name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
			{ name: 'Arduino', icon: './src/assets/tech_stack/arduino_Logo.svg' }
		],
		[
			{ name: 'Assembly x86', icon: './src/assets/tech_stack/x86.png' },
			{ name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
		],
		[
			{ name: 'Matlab', icon: './src/assets/tech_stack/Matlab_Logo.png' },
		],
	];

	const projectLinks = [
		"https://github.com/Players-Needed/Players-Needed-Android-App",
		"https://github.com/dorianverna17/Map_Reduce_Model",
		"https://github.com/dorianverna17/Mini-Preprocessor",
		"https://github.com/dorianverna17/FLSEHM",
		"https://github.com/dorianverna17/TSP_Genetic",
		"https://github.com/dorianverna17/Tetris",
		"https://github.com/dorianverna17/Abstract_Syntax_Tree",
		"https://github.com/dorianverna17/PageRank",
	];

	const projectNames = [
		<>Players Needed<br />-Bachelors thesis-</>,
		"Map Reduce Implementation",
		"Preprocessor Implementation",
		"FLSEHM",
		"TSP Genetic",
		"Tetris",
		"Abstract Syntax Tree",
		"PageRank"
	];

	const projectDescriptions = [
		"App designed to let people organize sports events easily",
		"Tool that analyzes and stores words from text files using the MapReduce paradigm",
		"Program that analyzes C code files, and solves the basic directives/macros present",
		"Federated Learning System for Environmental Health Monitoring",
		"Traveling Salesman Problem solver using genetic algorithms",
		"Classic Tetris game implementation",
		"Abstract Syntax Tree parser and analyzer",
		"PageRank algorithm implementation"
	];

	const projectImages = [
		"./src/assets/projects/players_needed.png",
		"./src/assets/projects/map_reduce.png",
		"./src/assets/projects/minipreprocessor.png",
		"./src/assets/projects/flsehm.png",
		"./src/assets/projects/tsp.png",
		"./src/assets/projects/tetris.png",
		"./src/assets/projects/ast.png",
		"./src/assets/projects/pagerank.png"
	];

	const shiftProjectsLeft = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setTimeout(() => {
			setStartIndex(prev => prev === 0 ? projectTechStacks.length - 1 : prev - 1);
			setIsTransitioning(false);
		}, 150);
	};

	const shiftProjectsRight = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setTimeout(() => {
			setStartIndex(prev => prev === projectTechStacks.length - 1 ? 0 : prev + 1);
			setIsTransitioning(false);
		}, 150);
	};

	// Get the current 3 projects to display
	const getCurrentProjects = () => {
		const projects = [];
		for (let i = 0; i < elementsToDisplay; i++) {
			const index = (startIndex + i) % projectTechStacks.length;
			projects.push({
				techStack: projectTechStacks[index],
				link: projectLinks[index],
				name: projectNames[index],
				description: projectDescriptions[index],
				image: projectImages[index]
			});
		}
		return projects;
	};

	const currentProjects = getCurrentProjects();

	return (
		<div className="grid grid-cols-[1fr_16fr_1fr] justify-center text-center py-4 px-10 items-center
		font-bold text-gray-300 text-sm gap-4 md:gap-6">
			<div className={`cursor-pointer transition-transform duration-200 hover:scale-110 
				${isTransitioning ? 'pointer-events-none opacity-50' : ''}`} 
				onClick={shiftProjectsLeft}>
				<img
					src="./src/assets/arrow.png"
					alt="Previous projects"
					className="h-12 sm:h-16 md:h-20 lg:h-22
						hover:grayscale hover:brightness-75 scale-x-[-1]"  />
			</div>
			<div
				className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6
				justify-center text-center px-4 items-stretch font-bold text-gray-100 text-sm
				gap-4 md:gap-6 rounded-lg transition-all duration-300 ease-in-out
				${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}
			>
				{currentProjects.map((project, index) => (
				<div key={`${startIndex}-${index}`} 
					className={`flex flex-col py-4 px-2 rounded-lg gap-y-3
					min-h-[180px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]
					transition-all duration-300 ease-in-out transform
					${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
					style={{
					backgroundImage: "linear-gradient(#64CCC5,#37858B,#04364A)",
					transitionDelay: `${index * 50}ms`
					}}
				>
					<div className="flex items-center gap-3 justify-center">
					<img
						src={project.image}
						alt="Project logo"
						className="h-12 sm:h-14 md:h-16 w-auto rounded-lg flex-shrink-0" />
					<span className="text-base sm:text-lg">{project.name}</span>
					</div>
					
					<p className="px-2 text-sm flex-grow overflow-auto">
					{project.description}
					</p>
					
					<div className="mt-auto space-y-3">
					<TechStack technologies={project.techStack} />
					<ViewDetails link={project.link}/>
					</div>
				</div>
				))}
			</div>
			<div className={`cursor-pointer transition-transform duration-200 hover:scale-110 
				${isTransitioning ? 'pointer-events-none opacity-50' : ''}`} 
				onClick={shiftProjectsRight}>
				<img
					src="./src/assets/arrow.png"
					alt="Next projects"
					className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto ml-auto 
						hover:grayscale hover:brightness-75"  />
			</div>
		</div>
	)
}