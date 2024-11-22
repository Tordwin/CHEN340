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
            <h2>Degrees Page is Loading...</h2>
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
            <body>
                <div id='degreesContainer'>
                    <h2>Undergraduate</h2>
                        <ul>
                            <li>
                                <a href='/undergraduate/degreeName=wmc'>Web & Mobile Computing, B.S.</a>
                            </li>
                            <li>
                                <a href='/undergraduate/degreeName=hcc'>Human Centered Computing, B.S.</a>
                            </li>
                            <li>
                                <a href='/undergraduate/degreeName=cit'>Computing & Information Technologies, B.S.</a>
                            </li>
                        </ul>
                    <h2>Graduate</h2>
                        <ul>
                            <li>
                                <a href='/graduate/degreeName=ist'>Information Sciences & Technologies, M.S.</a>
                            </li>
                            <li>
                                <a href='/graduate/degreeName=hci'>Human Computer Interaction, M.S.</a>
                            </li>
                            <li>
                                <a href='/graduate/degreeName=nsa'>Networking & Systems Administration, M.S.</a>
                            </li>
                            <li>
                                <a href='/graduate/degreeName=gac'>Graduate Advanced Certificates</a>
                            </li>
                        </ul>
                </div>
            </body>
        </>
    )
}

export default Degrees;