//loads
import {useState, useEffect} from 'react'

//getData
import getData from './utils/getData'
import './App.css'
import About from './components/about'
import People from './components/people'
import PeopleTabs from './components/peopleTabs'

//App (component)
const App=()=>{
  //state vars
  //const {set, get} = useState(init);
  const [loadedAbout, setLoadedAbout] = useState();
  const [about, setAbout] = useState();

  useEffect( () =>{
    //get the data
    getData('about/').
      then((json) => {
        setAbout(json);
        setLoadedAbout(true);
    })
    //setLoadedAbout(true)
    }, [] );

  if (!loadedAbout) return (
    <>
      <div className="stick">
        <h1>Welcome to the iSchool Website!</h1>
        <div>Loading...</div>
      </div>
    </>
  );

//with data
  return (
    <>
      <div className="stick">
        <h1>Welcome to the iSchool Website!</h1>
        <div>...Menu...</div>
      </div>
      <About aboutData={about}/>
      <hr/>
      <People/>
      <hr/>
      <PeopleTabs/>
    </>
  )
}
export default App;