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

    //Fields to return:
    //name
    //title
    //description
    //courses

    return (
        <>
            
        </>
    )
}

export default Minors;