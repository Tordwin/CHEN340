import {useState, useEffect} from 'react'
import './people.css'

import getData from '../utils/getData'

//component
const People = () => {
    //my vars
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(0);
    //get some data
    useEffect(() => {
        getData(`people/`)
            .then((json)=>{
                console.log("people loaded", json);
                setPeopleObj(json);
                setLoaded(true);
            })
    }, []);

    //first case (no data)
    if (!loaded) return (
        <>
            <h2>People Loading...</h2>
        </>
    )

    return (
        <>
            <h2>{peopleObj.title}</h2>
            <h3>{peopleObj.subTitle}</h3>
            
            <h3>Faculty</h3>
            <div className='peopleList'>
                {peopleObj.faculty.map((p) => 
                <div className='peopleListItem'>
                    <h3>{p.name}</h3>
                    <img src={p.imagePath} alt="thisPerson"/>
                </div>
                )}
            </div>

            <h3>Staff</h3>
            <div className='peopleList'>
                {peopleObj.staff.map((p) => 
                <div className='peopleListItem'>
                    <h3>{p.name}</h3>
                    <img src={p.imagePath} alt="thisPerson"/>
                </div>
                )}
            </div>
        </>
    )
}

export default People;