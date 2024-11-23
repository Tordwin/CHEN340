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
            <h2 id='loading'>Minors Page is Loading...</h2>
        </>
    )

    //Fields to return (Minors):
    //name
    //title
    //description
    //courses

    return (
        <>
            <div id='Minors'>
                <h2>Minors</h2>
                {minorsObj.UgMinors.map((minor, index) => (
                    <div key={minor.id || index} id='minorsContainer'>
                        <p>{minor.name}</p>
                        <p>{minor.title}</p>
                        <p>{minor.description}</p>
                        <p>{minor.courses}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Minors;