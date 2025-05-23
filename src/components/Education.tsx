export default function Education() {
	return (
		<div className="justify-center text-center py-4 px-4 items-center
		font-bold text-gray-300 text-sm gap-4 md:gap-6">
			<div className="grid grid-cols-3 justify-center text-center py-10 px-4 items-center
				font-bold text-gray-100 text-sm gap-4 md:gap-6 rounded-lg"
				style={{
					backgroundImage: "linear-gradient(#9CF9EF,#22BEB4,#176B87)",
				}}
			>
				<div className="grid grid-cols-1 gap-y-10">
					<img
					src="./src/assets/education/cntlr.png"
					alt="logo"
					className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
					<p>
					National College “Traian Lalescu” Resita<br/>
					-Highschool-<br/>
					Mathematics - Informatics<br/>
					Sept. 2015 - June 2019
					</p>
				</div>
				<div className="grid grid-cols-1 gap-y-10">
					<img
					src="./src/assets/education/upb.png"
					alt="logo"
					className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
					<p>
					University Politehnica of Bucharest<br/>
					-Bachelors-<br/>
					Computer Science and Automatic Control<br/>
					Sept. 2019 - July 2023
					</p>
				</div>
				<div className="grid grid-cols-1 gap-y-10">
					<img
					src="./src/assets/education/upb.png"
					alt="logo"
					className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto mx-auto" />
					<p>
					University Politehnica of Bucharest<br/>
					-Masters-<br/>
					Advanced Software Systems<br/>
					Oct. 2023 - Present
					</p>
				</div>
			</div>
		</div>
	)
}