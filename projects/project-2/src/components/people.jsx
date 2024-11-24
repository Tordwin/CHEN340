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
    //imagePath

    //tagline
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
            <div>
                <h2>{peopleObj.title}</h2>
                <h3>Faculty</h3>
                <div className='peopleList'>
                    {peopleObj.faculty.map((p, index) => (
                        <div key={p.id || index} className='peopleListItem'>
                            <div id='people'>
                                <h3>
                                    <a href={`people/faculty/username=${p.username}`}>{p.name}</a>
                                </h3>
                                <p>{p.tagline}</p>
                                <p>{p.title}</p>
                                <img src={p.imagePath} alt="thisPerson" />
                            </div>
                            <div id='peopleInfo'>
                                <p>Interest Areas: {p.interestArea}</p>
                                <p>Office: {p.office}</p>
                                <p>Website: {p.website}</p>
                                <p>Phone: {p.phone}</p>
                                <p>Email: {p.email}</p>
                                <p>Twitter: {p.twitter}</p>
                                <p>Facebook: {p.facebook}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h3>Staff</h3>
                <div className='peopleList'>
                    {peopleObj.staff.map((p, index) => (
                        <div key={p.id || index} className='peopleListItem'>
                            <div id='people'>
                                <h3>
                                    <a href={`people/staff/username=${p.username}`}>{p.name}</a>
                                </h3>
                                <img src={p.imagePath} alt="thisPerson" />
                            </div>
                            <div id='peopleInfo'>
                                <p>Interest Areas: {p.interestArea}</p>
                                <p>Office: {p.office}</p>
                                <p>Website: {p.website}</p>
                                <p>Phone: {p.phone}</p>
                                <p>Email: {p.email}</p>
                                <p>Twitter: {p.twitter}</p>
                                <p>Facebook: {p.facebook}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default People;