//Load
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Import CSS HERE
import './App.css'
//Import HEADER & FOOTER HERE
import Header from './Header.jsx'
import Footer from './Footer.jsx'
//Get Data
import getData from './utils/getData.js'
import Degrees from './components/degrees.jsx'
import Employment from './components/employment.jsx'
import Minors from './components/minors.jsx'
import People from './components/people.jsx'
import About from './components/about.jsx'
import Home from './components/home.jsx'

//App
function App() {
  const [count, setCount] = useState(0)

  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
      case "/about":
        component = <About />
        break

  }

  return (
    <>
      <h1>Welcome to ISchool</h1>
      <Header></Header>
      {component}
      <Footer></Footer>
    </>
  )
}

export default App
