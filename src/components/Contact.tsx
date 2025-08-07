import { useState } from 'react';
import PopUpContact from './PopUpContact';

export default function Contact() {
	const [popup, togglepopup] = useState(false);
	
	return (
		<div className="flex flex-col lg:grid lg:grid-cols-2 justify-center text-center py-4 px-4 items-center
		font-bold text-gray-300 text-xs sm:text-sm gap-4 md:gap-6"
		style={{
			backgroundColor: "#397891",
		}}
		>
	  	<div className="w-full">
			<div className="grid grid-cols-1 justify-center gap-y-2 py-4 px-2 rounded-lg">
				<div className="flex sm:grid sm:grid-cols-10 place-items-center text-center gap-2 sm:gap-0">
					<img
						src="./src/assets/social/linkedin.png"
						alt="LinkedIn logo"
						className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto flex-shrink-0 sm:col-span-3" />
					<div className="flex items-center justify-center sm:col-span-7 min-w-0">
						<a 
							href="https://linkedin.com/in/dorian-verna"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline break-all sm:break-normal text-xs sm:text-sm"
							>
							linkedin.com/in/dorian-verna
						</a>
					</div>
				</div>
				<div className="flex sm:grid sm:grid-cols-10 place-items-center text-center gap-2 sm:gap-0">
					<img
						src="./src/assets/social/gmail.png"
						alt="Gmail logo"
						className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto flex-shrink-0 sm:col-span-3" />
					<div className="flex items-center justify-center sm:col-span-7 min-w-0">
						<a 
							href="mailto:dorianverna7@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline break-all sm:break-normal text-xs sm:text-sm"
							>
							dorianverna7@gmail.com
						</a>
					</div>
				</div>
				<div className="flex sm:grid sm:grid-cols-10 place-items-center text-center gap-2 sm:gap-0">
					<img
						src="./src/assets/social/github.png"
						alt="GitHub logo"
						className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto flex-shrink-0 sm:col-span-3" />
					<div className="flex items-center justify-center sm:col-span-7 min-w-0">
						<a 
							href="https://github.com/dorianverna17"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline break-all sm:break-normal text-xs sm:text-sm"
							>
							github.com/dorianverna17
						</a>
					</div>
				</div>
				<div className="flex sm:grid sm:grid-cols-10 place-items-center text-center gap-2 sm:gap-0">
					<img
						src="./src/assets/social/instagram.png"
						alt="Instagram logo"
						className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto flex-shrink-0 sm:col-span-3" />
					<div className="flex items-center justify-center sm:col-span-7 min-w-0">
						<a 
							href="https://instagram.com/dorian17v"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline break-all sm:break-normal text-xs sm:text-sm"
							>
							instagram.com/dorian17v
						</a>
					</div>
				</div>
				<div className="flex sm:grid sm:grid-cols-10 place-items-center text-center gap-2 sm:gap-0">
					<img
						src="./src/assets/social/x.png"
						alt="X (Twitter) logo"
						className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto flex-shrink-0 sm:col-span-3" />
					<div className="flex items-center justify-center sm:col-span-7 min-w-0">
						<a 
							href="https://x.com/dorian17v"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline break-all sm:break-normal text-xs sm:text-sm"
							>
							x.com/dorian17v
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className="w-full mt-4 lg:mt-0">
			<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center 
				py-6 sm:py-8 text-white rounded-lg shadow-lg transform hover:scale-105 
				transition-all duration-300 animate-pulse hover:animate-none cursor-pointer
				mx-2 sm:mx-0"
				onClick={() => togglepopup(!popup)}
				>
				Let's get in touch!
			</div>
		</div>
		{popup && (
			<PopUpContact 
				onClose={() => togglepopup(false)}
				isOpen={popup}
			/>
		)}
	</div>
	)
}