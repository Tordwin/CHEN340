//Import CSS HERE
import './components/css/App.css'
//Get Data
import Degrees from './components/degrees.jsx'
import Employment from './components/employment.jsx'
import Minors from './components/minors.jsx'
import People from './components/people.jsx'
import About from './components/about.jsx'

//App
const App = () => {
  //Variables
  let component
  //Switch cases
  switch(window.location.pathname) {
    case "/home":
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
      {component}
    </>
  )
}

export default App
