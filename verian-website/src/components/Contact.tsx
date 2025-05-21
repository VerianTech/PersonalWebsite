export default function Contact() {
	return (
		<div className="grid grid-cols-2 justify-center text-center py-4 px-4 items-center
		font-bold text-gray-300 text-sm gap-4 md:gap-6"
		style={{
			backgroundColor: "#397891",
		}}
		>
	  	<div>
			<div className="grid grid-cols-1 justify-center gap-y-2 py-4 px-2 rounded-lg">
				<div className="grid grid-cols-10 place-items-center text-center">
					<img
						src="./src/assets/social/linkedin.png"
						alt="logo"
						className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mx-autor col-span-3" />
					<div className="flex items-center justify-center col-span-7">
						linkedin.com/in/dorian-verna
					</div>
				</div>
				<div className="grid grid-cols-10 place-items-center text-center">
					<img
						src="./src/assets/social/gmail.png"
						alt="logo"
						className="h-2 sm:h-4 md:h-6 lg:h-8 w-auto mx-autor col-span-3" />
					<div className="flex items-center justify-center col-span-7">
						dorianverna7@gmail.com
					</div>
				</div>
				<div className="grid grid-cols-10 place-items-center text-center">
					<img
						src="./src/assets/social/github.png"
						alt="logo"
						className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-autor col-span-3" />
					<div className="flex items-center justify-center col-span-7">
						github.com/dorianverna17
					</div>
				</div>
				<div className="grid grid-cols-10 place-items-center text-center">
					<img
						src="./src/assets/social/instagram.png"
						alt="logo"
						className="h-4 sm:h-6 md:h-8 lg:h-10 w-auto mx-autor col-span-3" />
					<div className="flex items-center justify-center col-span-7">
						instagram.com/dorian17v
					</div>
				</div>
				<div className="grid grid-cols-10 place-items-center text-center">
					<img
						src="./src/assets/social/x.png"
						alt="logo"
						className="h-4 sm:h-6 md:h-8 lg:h-10 w-auto mx-autor col-span-3" />
					<div className="flex items-center justify-center col-span-7">
						x.com/dorian17v
					</div>
				</div>
			</div>
		</div>
		<div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center py-8 text-white 
			rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300
			animate-pulse hover:animate-none cursor-pointer">
			Let's get in touch!
		</div>
	</div>
	)
}