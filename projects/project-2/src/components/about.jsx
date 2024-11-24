//Load
import {useState, useEffect} from 'react';
import getData from '../utils/getData';
//Import CSS HERE
import './css/About.css'
//External Components
import BasicBreadcrumbs from '../utils/breadcrumbs';
import CircularIndeterminate from '../utils/progressCircle';

const About = () => {
    //Variables
    const [aboutObj, setAboutObj] = useState();
    const [loaded, setLoaded] = useState(0);
    //Grabbing data
    useEffect(() => {
        getData('about/').then((json) => {
            console.log("About page has loaded", json);
            setAboutObj(json);
        })
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, []); 

    if (!loaded) return (
        <>
            <h2 id='loading'>Home Page is Loading...<CircularIndeterminate /></h2>
        </>
    )

    //Fields to return:
    //title
    //description
    //quote
    //quoteAuthor

    return (
        <>
            <BasicBreadcrumbs />
            <h2 id='aboutH2'>{aboutObj.title}</h2>
            <div id='aboutContainer'>
                <p id='description'>{aboutObj.description}</p>
                <h3 id='quote'>"{aboutObj.quote}"</h3>
                <p id='author'>-{aboutObj.quoteAuthor}</p>
            </div>
        </>
    )
}

export default About;