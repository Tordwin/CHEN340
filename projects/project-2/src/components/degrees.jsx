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
            <body id="degreesBody">
                <div id='degreesContainer'>
                    <h2>Undergraduate</h2>
                    {degreesObj.undergraduate.map((degree) =>
                        <div id='undergraduateListItem'>
                            <h3>{degree.title}</h3>
                            <p>{degree.description}</p>
                            <p>{degree.concenteration}</p>
                        </div>
                    )}
                    <h2>Graduate</h2>
                    {degreesObj.graduate.map((degree) =>
                        <div id='graduateListItem'>
                            <h3>{degree.title}</h3>
                            <p>{degree.description}</p>
                            <p>{degree.concenteration}</p>
                        </div>
                    )}

                </div>
            </body>
        </>
    )
}

export default Degrees;