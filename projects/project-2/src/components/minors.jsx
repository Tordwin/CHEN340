//Load
import {useState, useEffect} from 'react'
import getData from '../utils/getData';
//Import CSS HERE
import './css/Minors.css'

const Minors = () => {
    //Variables
    const [minorsObj, setMinorsObj] = useState();
    const [loaded, setLoaded] = useState(0);
    const [minor, setMinor] = useState();
    const [minorDetails, setMinorDetails] = useState();
    //Grabbing data
    useEffect(() => {
        getData('minors/').then((json) => {
            console.log("Minors page has loaded", json);
            setMinorsObj(json);
            setLoaded(true);
        })
    }, []);

    if (!loaded) return (
        <>
            <h2 id='loading'>Minors Page is Loading...</h2>
        </>
    )

    const loadMinorDetails = (minorName) => {
        setMinor(minorName);
        setMinorDetails(null);
        getData(`minors/UgMinors/name=${minorName}`).then((json) => {
            setMinorDetails(json);
        });
    }

    if (minor && minorDetails) {
        return (
            <>
                <div id='minorDetails'>
                    <h2>{minorDetails.title}</h2>
                    <p>{minorDetails.description}</p>
                    <h3>Courses</h3>
                    <ul>
                        {minorDetails.courses.map((c, index) => 
                            <li key={c || index}>{c}</li>
                        )}
                    </ul>
                </div>
            </>
        )
    }

    //Fields to return (Minors):
    //name
    //title
    //description
    //courses

    return (
        <>
            <p>breadcrumb here</p>
            <div id='minorsContainer'>
                <h2>Minors</h2>
                {minorsObj.UgMinors.map((minor, index) => (
                    <div key={minor.id || index} id='minorsContainer'>
                        <h3>
                            <a href={`#`}
                                onClick={() => 
                                loadMinorDetails(minor.name)}>{minor.title}
                            </a>
                        </h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Minors;