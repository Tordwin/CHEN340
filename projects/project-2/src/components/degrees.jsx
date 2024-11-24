//Load
import {useState, useEffect} from 'react';
import getData from '../utils/getData';
//Import CSS HERE
import './css/Degrees.css'

const Degrees = () => {
    //Variables
    const [degreesObj, setDegreesObj] = useState();
    const [loaded, setLoaded] = useState(0);
    const [degree, setDegree] = useState();
    const [degreeDetails, setDegreeDetails] = useState();
    //Grabbing data
    useEffect(() => {
        getData('degrees/').then((json) => {
            console.log("Degrees page has loaded", json);
            setDegreesObj(json);
            setLoaded(true);
        })
    }, []); 

    if (!loaded) return (
        <>
            <h2 id='loading'>Degrees Page is Loading...</h2>
        </>
    )

    const loadDegreeDetails = (degreeName, type) => {
        setDegree(degreeName);
        setDegreeDetails(null);
        getData(`degrees/${type}/degreeName=${degreeName}`).then((json) => {
            setDegreeDetails(json);
        });
    }

    if (degree && degreeDetails) {
        return (
            <>
                <div id='degreeDetails'>
                    <h2>{degreeDetails.title}</h2>
                    <p>{degreeDetails.description}</p>
                    <h3>Concentrations</h3>
                    <ul>
                        {degreeDetails.concentrations.map((c, index) => 
                            <li key={c || index}>{c}</li>
                        )}
                    </ul>
                </div>
            </>
        )
    }

    //Fields to return:
    //The following sub-root nodes exist in this section:
        //undergraduate
        //graduate
    //Each child node has the following fields to be queried:
        //degreeName
        //title
        //description
        //concenteration

    return (
        <>
            <p>breadcrumb here</p>
            <div id='degreesContainer'>
                <h2>Undergraduate</h2>
                {degreesObj.undergraduate.map((degree, index) =>
                    <div key={degree.degreeName || index} id='undergraduateListItem'>
                        <h3>
                            <a href={`#`} 
                            onClick={() => 
                                loadDegreeDetails(degree.degreeName, 'undergraduate')}>{degree.title}</a>
                        </h3>
                    </div>
                )}
                <h2>Graduate</h2>
                {degreesObj.graduate.map((degree, index) =>
                    <div key={degree.degreeName || index} id='graduateListItem'>
                        <h3>
                            <a href={`#`} 
                            onClick={() => 
                                loadDegreeDetails(degree.degreeName, 'graduate')}>{degree.title}</a>
                        </h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default Degrees;