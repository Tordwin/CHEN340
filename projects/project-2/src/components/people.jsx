//Load
import {useState, useEffect} from 'react'
import getData from '../utils/getData'
//Import CSS HERE
import './css/People.css'
//External Components
import BasicBreadcrumbs from '../utils/breadcrumbs';
import CircularIndeterminate from '../utils/progressCircle';

const People = () => {
    //Variables
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(0);
    const [people, setPeople] = useState();
    const [peopleDetails, setPeopleDetails] = useState();
    //get some data
    useEffect(() => {
        getData(`people/`)
            .then((json)=>{
                console.log("People page has loaded", json);
                setPeopleObj(json);
            })
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1000);
    }, []); 


    if (!loaded) return (
        <>
            <h2 id='loading'>People Page is Loading...<CircularIndeterminate /></h2>
        </>
    )

    const loadPeopleDetails = (peopleName, type) => {
        setPeople(peopleName);
        setPeopleDetails(null);
        getData(`people/${type}/username=${peopleName}`).then((json) => {
            setPeopleDetails(json);
        });
    }

    if (people && peopleDetails) {
        return (
            <>
                <div id='peopleInfo'>
                    <p>
                        Interest Areas: {peopleDetails.interestArea}<br/>
                        Office: {peopleDetails.office}<br/>
                        Website: {peopleDetails.website}<br/>
                        hone: {peopleDetails.phone}<br/>
                        Email: {peopleDetails.email}<br/>
                        Twitter: {peopleDetails.twitter}<br/>
                        Facebook: {peopleDetails.facebook}
                    </p>
                </div>
            </>
        )
    }

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
            <div>
                <BasicBreadcrumbs />
                <div className='top'>
                    <h2>{peopleObj.title}</h2>
                    <h3>Faculty</h3>
                </div>
                <div className='peopleList'>
                    {peopleObj.faculty.map((p, index) => (
                        <div key={p.id || index} className='peopleListItem'>
                            <div id='people'>
                                <h3>
                                    <a href={`#`}
                                        onClick={() => 
                                        loadPeopleDetails(p.username, 'faculty')}>{p.name}
                                    </a>
                                </h3>
                                <img src={p.imagePath} alt="thisPerson" />
                                <p>
                                    {p.tagline}<br/>
                                    {p.title}
                                </p>
                            </div>

                            
                        </div>
                    ))}
                </div>
                <div className='top'>
                    <h3>Staff</h3>
                </div>
                <div className='peopleList'>
                    {peopleObj.staff.map((p, index) => (
                        <div key={p.id || index} className='peopleListItem'>
                            <div id='people'>
                                <h3>
                                <a href={`#`}
                                        onClick={() => 
                                        loadPeopleDetails(p.username, 'staff')}>{p.name}
                                    </a>
                                </h3>
                                <img src={p.imagePath} alt="thisPerson" />
                                <p>
                                    {p.tagline}<br/>
                                    {p.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default People;