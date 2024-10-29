//loads
import {useState, useEffect} from 'react'

//getData
import getData from './utils/getData'
import './App.css'

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
      <div className='About'>
        <h2>{about.title}</h2>
        <h3>{about.description}</h3>
        <div className='quote'>{about.quote}</div>
        <h4>--{about.quoteArthur}</h4>
      </div>

    </>
  )
}
export default App;