//Load
import {useState, useEffect} from 'react'
//Import CSS HERE
import './App.css'
//Import HEADER & FOOTER HERE
import Header from './Header.jsx'
import Footer from './Footer.jsx'
//Get Data
import Degrees from './components/degrees.jsx'
import Employment from './components/employment.jsx'
import Minors from './components/minors.jsx'
import People from './components/people.jsx'
import About from './components/about.jsx'
import Home from './components/home.jsx'

//App
const App = () => {
  //Variables
  let component
  //Switch cases
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
      case "/about":
        component = <About />
        break
        case "/degrees":
          component = <Degrees />
          break
          case "/employment":
            component = <Employment />
            break
            case "/minors":
              component = <Minors />
              break
              case "/people":
                component = <People />
                break
  }

  return (
    <>
      <h1><a href='/home'>Welcome to ISchool</a></h1>
      <Header></Header>
      {component}
      <Footer></Footer>
    </>
  )
}

export default App
