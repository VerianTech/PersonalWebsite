import './App.css'
import PostList from './components/PostList';

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
		  <div className="text-xl">TODO - Hello There section</div>
		  <div className="text-xl">TODO - General Things section</div>
		  <div className="text-xl">TODO - Experience && skills section</div>
		  <div className="text-xl">TODO - Education section</div>
		  <div className="text-xl">TODO - Portfolio section</div>
		  <div className="text-xl">TODO - Contact section</div>
		</main>
	  </div>
	);
  }
  
  export default App;
  
