//Load
import {useState, useEffect} from 'react'
import getData from '../utils/getData';
//Import CSS HERE
import './css/Employment.css'

const Employment = () => {
    //Variables
    const [employmentObj, setEmploymentObj] = useState();
    const [loaded, setLoaded] = useState(0);
    //Grabbing data
    useEffect(() => {
        getData('employment/').then((json) => {
            console.log("Employment page has loaded", json);
            setEmploymentObj(json);
            setLoaded(true);
        })
    }, []);

    if (!loaded) return (
        <>
            <h2 id='loading'>Employment Page is Loading...</h2>
        </>
    )

    //Fields to return:
    //introduction
    //degreeStatistics
    //employers
    //careers
    //coopTable
    //employmentTable

    return (
        <>

        </>
    )
}

export default Employment;