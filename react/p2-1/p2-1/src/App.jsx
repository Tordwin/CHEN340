//loads
import {useState, useEffect} from 'react'

//getData
import getData from './utils/getData'
import './App.css'

//methods
const App=()=>{
  //state vars
  //const {set, get} = useState(init);
  const [loadedAbout, getLoadedAbout] = useState();
  const [about, getAbout] = useState();

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
      <h1>Loading...</h1>
    </>
  );


//App
  return (
    <>
      I{about.title}
    </>
  )
}
export default App;