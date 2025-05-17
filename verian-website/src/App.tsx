import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero title="Welcome to My Blog" subtitle="Thoughts, Projects & More" />
    </>
  );
}

export default App
