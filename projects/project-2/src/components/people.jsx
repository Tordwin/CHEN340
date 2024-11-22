//Load
import {useState, useEffect} from 'react'
import getData from '../utils/getData'
//Import CSS HERE
import './css/People.css'

const People = () => {
    //Variables
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(0);
    //get some data
    useEffect(() => {
        getData(`people/`)
            .then((json)=>{
                console.log("People page has loaded", json);
                setPeopleObj(json);
                setLoaded(true);
            })
    }, []);

    if (!loaded) return (
        <>
            <h2 id='loading'>People Page is Loading...</h2>
        </>
    )

    //Fields to return:
    //username
    //name
    //tagline
    //imagePath
    //title
    //interestArea
    //office
    //website
    //phone
    //email
    //twitter
    //facebook

    return (
        <>
            <body>
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
            </body>
        </>
    )
}

export default People;