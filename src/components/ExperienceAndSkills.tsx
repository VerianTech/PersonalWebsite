import { useState } from "react";

export default function ExperienceAndSkills() {
	const [currentPage, setCurrentPage] = useState('first');

	return (
	<div className="grid grid-cols-1 grid-cols-2 justify-center text-center py-4 px-4 items-stretch
		font-bold text-gray-300 text-sm gap-4 md:gap-6">
		<div className="grid grid-cols-1 justify-center gap-y-4 py-4 px-2 rounded-lg"
			style={{
				backgroundImage: "linear-gradient(#8aa0a7,#176b87)",
			}}
		>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/google.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Software Engineer @ Google<br/>
					Sept. 2024 - Present
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/hella.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Software Engineer @ Hella<br/>
					October 2023 - Sept. 2024
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/google.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Site Reliability Engineer Intern @ Google<br/>
					July 2023 - October 2023
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/thales.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					DevOps Engineer @ Thales<br/>
					October 2022 - July 2023
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/google.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Software Engineer Intern @ Google<br/>
					July 2022 - October 2022
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/nxp.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Test Developer Intern @ NXP<br/>
					June 2021 - July 2022
				</div>
			</div>
		</div>
		<div className="relative overflow-hidden">
			<div className={`transition-transform duration-500 ${currentPage === 'first' ? 'translate-x-0' : '-translate-x-full'}`}>
				<TechStack onDivClick={() => setCurrentPage('second')}/>
			</div>
			<div className={`absolute top-0 left-0 w-full transition-transform duration-500 ${currentPage === 'second' ? 'translate-x-0' : 'translate-x-full'}`}>
				<ToolsStack onDivClick={() => setCurrentPage('first')}/>
			</div>
		</div>
	</div>
  );
}

const TechStack = ({ onDivClick }: { onDivClick: () => void }) => {
	return (
	  	<div>
			<div className="flex flex-col justify-start gap-4 py-4 px-2 rounded-lg h-full"
			style={{
				backgroundImage: "linear-gradient(#204D58,#46A6BE)",
			}}
			>
			<div className="text-l md:text-xl lg:text-2xl font-bold text-center mb-2">
				Tech Stack 🚀
			</div>
			<div className="grid grid-cols-3 place-items-center gap-8 md:gap-y-12 pt-2">
				<img
				src="./src/assets/tech_stack/java.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tech_stack/cpp.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tech_stack/go.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tech_stack/c.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tech_stack/python.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tech_stack/kotlin.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tech_stack/html.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tech_stack/css.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
			</div>
				<div className="text-l md:text-xl lg:text-2xl font-bold text-right mb-2 cursor-pointer"
					onClick={onDivClick}>
					<img
						src="./src/assets/arrow.png"
						alt="logo"
						className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto ml-auto 
							hover:grayscale hover:brightness-75"  />
				</div>
			</div>
			<div className="text-l md:text-xl lg:text-2xl font-bold text-center mb-2"></div>
		</div>
	);
};

const ToolsStack = ({ onDivClick }: { onDivClick: () => void }) => {
	return (
	  	<div>
			<div className="flex flex-col justify-start gap-4 py-4 px-2 rounded-lg h-full"
			style={{
				backgroundImage: "linear-gradient(#204D58,#46A6BE)",
			}}
			>
			<div className="text-l md:text-xl lg:text-2xl font-bold text-center mb-2">
				Tools | Frameworks | OS
			</div>
			<div className="grid grid-cols-3 place-items-center gap-8 md:gap-y-12 pt-2">
				<img
				src="./src/assets/tools_stack/linux.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/android.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/git.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/docker.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/mongodb.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/postman.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/github.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/mysql.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
				<img
				src="./src/assets/tools_stack/k8s.png"
				alt="logo"
				className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
			</div>
				<div className="text-l md:text-xl lg:text-2xl font-bold text-right mb-2 cursor-pointer"
					onClick={onDivClick}>
					<img
						src="./src/assets/arrow.png"
						alt="logo"
						className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto ml-auto 
							hover:grayscale hover:brightness-75 scale-x-[-1]"  />
				</div>
			</div>
			<div className="text-l md:text-xl lg:text-2xl font-bold text-center mb-2"></div>
		</div>
	);
};
