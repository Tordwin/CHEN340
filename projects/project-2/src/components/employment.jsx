//Load
import {useState, useEffect} from 'react'
import getData from '../utils/getData';
//Import CSS HERE

//Employment: https://ischool.gccis.rit.edu/api/employment/

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
            <h2>About Page is Loading...</h2>
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