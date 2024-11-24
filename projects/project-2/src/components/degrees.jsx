//Load
import {useState, useEffect} from 'react';
import getData from '../utils/getData';
//Import CSS HERE
import './css/Degrees.css'

const Degrees = () => {
    //Variables
    const [degreesObj, setDegreesObj] = useState();
    const [loaded, setLoaded] = useState(0);
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
                {degreesObj.undergraduate.map((degree) =>
                    <div key={degree.degreeName || index} id='undergraduateListItem'>
                        <h3>
                            <a href={`degrees/undergraduate/degreeName=${degree.degreeName}`}>{degree.title}</a>
                        </h3>
                    </div>
                )}
                <h2>Graduate</h2>
                {degreesObj.graduate.map((degree) =>
                    <div key={degree.degreeName || index} id='graduateListItem'>
                        <h3>
                            <a href={`degrees/undergraduate/degreeName=${degree.degreeName}`}>{degree.title}</a>
                        </h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default Degrees;