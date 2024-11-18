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
import Courses from './components/courses.jsx'

//App
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Footer></Footer>
    </>
  )
}

export default App
