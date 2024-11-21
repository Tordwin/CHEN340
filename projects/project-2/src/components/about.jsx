//Load
import {useState, useEffect} from 'react';
import getData from '../utils/getData';
//Import CSS HERE

const About = () => {
    //Variables
    const [aboutObj, setAboutObj] = useState();
    const [loaded, setLoaded] = useState(0);
    //Grabbing data
    useEffect(() => {
        getData('about/').then((json) => {
            console.log("About page has loaded", json);
            setAboutObj(json);
            setLoaded(true);
        })
    }, []);

    if (!loaded) return (
        <>
            <h2>Home Page is Loading...</h2>
        </>
    )

    //Fields to return:
    //title
    //description
    //quote
    //quoteAuthor

    return (
        <>
            <h2>{aboutObj.title}</h2>
            <p>{aboutObj.description}</p>
            <h4>{aboutObj.quote}</h4>
            <p id="author">{aboutObj.quoteAutho}</p>
        </>
    )
}

export default About;