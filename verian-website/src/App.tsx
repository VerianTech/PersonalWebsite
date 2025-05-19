import './App.css'
import PostList from './components/PostList';
import GeneralThingsGrid from './components/GeneralThingsGrid';

function App() {
	return (
	  <div className="min-h-screen text-black"
	  	style={{
			backgroundImage: "linear-gradient(#204d58,#46a6be)",
		}}
	  >
		{/* Top Navbar */}
		<nav className="px-14 py-2 flex justify-between items-center shadow-md">
		  {/* Logo / Brand */}
			<div>
				<img
					src="./src/assets/verian_logo-removebg-preview.png"
					alt="logo"
					className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />
			</div>

		  {/* Horizontal Menu Items */}
		  <ul className="flex text-lg space-x-8 sm:space-x-12 md:space-x-16 font-bold font-roboto">
			<li className="hover:text-gray-300 cursor-pointer">About Me</li>
			<li className="hover:text-gray-300 cursor-pointer">Experience</li>
			<li className="hover:text-gray-300 cursor-pointer">Education</li>
			<li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
			<li className="hover:text-gray-300 cursor-pointer">Contact</li>
		  </ul>
		</nav>
  
		{/* Main content */}
		<main>
		  <div className="flex justify-between py-4 px-10 items-center text-xl gap-6 md:gap-10">
			<div className="rounded-full overflow-hidden shadow-md
				w-48 h-48 md:w-54 md:h-54 flex-shrink-0">
				<img
					src="./src/assets/me_round.png"
					alt="image"
					className="w-full h-full object-cover aspect-square"/>
			</div>
			<div className="text-center md:text-left font-bold text-gray-300">
				Hello there 👋🏻
				<br/><br/>
				I’m Dorian, computer science enthusiast and software engineer
				<br/><br/>
				I work on building high scalable systems, below you can find my personal portfolio as well as my CV
			</div>
		  </div>
		  <div className="text-xl py-8">
			<div className="px-4 font-bold text-gray-300">
				Some general things about me 🪐
			</div>
			<GeneralThingsGrid />
		  </div>
		  <div className="text-xl">TODO - Experience && skills section</div>
		  <div className="text-xl">TODO - Education section</div>
		  <div className="text-xl">TODO - Portfolio section</div>
		  <div className="text-xl">TODO - Contact section</div>
		</main>
	  </div>
	);
  }
  
  export default App;
  
