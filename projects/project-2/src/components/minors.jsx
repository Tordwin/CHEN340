//Load
import {useState, useEffect} from 'react'
import getData from '../utils/getData';
//Import CSS HERE

const Minors = () => {
    //Variables
    const [minorsObj, setMinorsObj] = useState();
    const [loaded, setLoaded] = useState(0);
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
            <h2>Minors Page is Loading...</h2>
        </>
    )

    //Fields to return (Minors):
    //name
    //title
    //description
    //courses

    return (
        <>
            <body>
                <div id='Minors'>
                    <h2>Minors</h2>
                    <p>Minor Name: </p>
                    <p>Minor Title: </p>
                    <p>Minor Description: </p>
                    <p>Minor's Courses: </p>
                    <ul>
                        <li>Course 1</li>
                    </ul>
                </div>
            </body>
        </>
    )
}

export default Minors;