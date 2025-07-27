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
			{ name: 'Arduino', icon: './src/assets/tech_stack/arduino_Logo.png' }
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
	]

	let startIndex = 0
	let elementsToDisplay = 3

	let ShiftProjectsLeft= () => {
		if (startIndex != 0) {
			startIndex -= 1
		} else {
			startIndex = 7
		}
	}

	let ShiftProjectsRight= () => {
		if (startIndex != 7) {
			startIndex += 1
		} else {
			startIndex = 0
		}
	}

	return (
		<div className="grid grid-cols-[1fr_16fr_1fr] justify-center text-center py-4 px-10 items-center
		font-bold text-gray-300 text-sm gap-4 md:gap-6">
			<div className="cursor-pointer" onClick={ShiftProjectsLeft}>
				<img
					src="./src/assets/arrow.png"
					alt="logo"
					className="h-12 sm:h-16 md:h-20 lg:h-22
						hover:grayscale hover:brightness-75 scale-x-[-1]"  />
			</div>
			<div className="grid grid-cols-3 justify-center text-center px-4 items-center
				font-bold text-gray-100 text-sm gap-4 md:gap-6 rounded-lg"
			>
				<div className="grid grid-cols-1 py-4 rounded-lg gap-y-2 h-full"
					style={{
						backgroundImage: "linear-gradient(#64CCC5,#37858B,#04364A)",
					}}
				>
					<div className="grid grid-cols-2">
						<img
						src="./src/assets/projects/players_needed.png"
						alt="logo"
						className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
						Players Needed<br/>
						-Bachelors thesis-
					</div>
					<p className="px-2">
					App designed to let people organize sports events easily
					</p>
					<TechStack technologies={projectTechStacks[0]} />
					<ViewDetails link={projectLinks[0]}/>
				</div>
				<div className="grid grid-cols-1 py-4 rounded-lg gap-y-2 h-full"
					style={{
						backgroundImage: "linear-gradient(#64CCC5,#37858B,#04364A)",
					}}
				>
					<div className="grid grid-cols-2">
						<img
						src="./src/assets/projects/map_reduce.png"
						alt="logo"
						className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
						Map Reduce Implementation
					</div>
					<p className="px-2">
					Tool that analyzes and stores words from text files using the MapReduce paradigm
					</p>
					<TechStack technologies={projectTechStacks[1]} />
					<ViewDetails link={projectLinks[1]}/>
				</div>
				<div className="grid grid-cols-1 py-4 rounded-lg gap-y-2 h-full"
					style={{
						backgroundImage: "linear-gradient(#64CCC5,#37858B,#04364A)",
					}}
				>
					<div className="grid grid-cols-2">
						<img
						src="./src/assets/projects/minipreprocessor.png"
						alt="logo"
						className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
						Minipreprocessor Implementation
					</div>
					<p className="px-2">
					Program that analyzes C code files, and solves the basic directives/macros present
					</p>
					<TechStack technologies={projectTechStacks[2]} />
					<ViewDetails link={projectLinks[2]}/>
				</div>
			</div>
			<div className="cursor-pointer" onClick={ShiftProjectsRight}>
				<img
					src="./src/assets/arrow.png"
					alt="logo"
					className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto ml-auto 
						hover:grayscale hover:brightness-75"  />
			</div>
		</div>
	)
}