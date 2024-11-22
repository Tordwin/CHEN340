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
            <body>
                <div id='Employment'>
                    <h2>Employments</h2>
                    <p>Introduction: </p>
                    <p>Statistics: </p>
                    <p>Employers: </p>
                    <p>Careers: </p>
                    <ul>
                        <li>Career 1</li>
                    </ul>
                    <p>Coop Table: </p>
                    <p>Employment Table: </p>
                </div>
            </body>
        </>
    )
}

export default Employment;