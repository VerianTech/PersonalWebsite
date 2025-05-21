export default function ExperienceAndSkills() {
  return (
	<div className="grid grid-cols-1 grid-cols-2 justify-center text-center py-4 px-4 items-center
		font-bold text-gray-300 text-sm gap-4 md:gap-6">
	  <div className="h-full">
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
					Sept. 2024 - Present
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/google.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Site Reliability Engineer Intern @ Google<br/>
					Sept. 2024 - Present
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/thales.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					DevOps Engineer @ Thales<br/>
					Sept. 2024 - Present
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/google.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Software Engineer Intern @ Google<br/>
					Sept. 2024 - Present
				</div>
			</div>
			<div className="grid grid-cols-10 place-items-center text-center">
				<img
					src="./src/assets/nxp.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto col-span-3" />
				<div className="flex items-center justify-center col-span-7">
					Test Developer Intern @ NXP<br/>
					Sept. 2024 - Present
				</div>
			</div>
		</div>
	  </div>
	  <div className="h-full">
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
        </div>
	  </div>
	</div>
  );
}