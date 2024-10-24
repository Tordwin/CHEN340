//load my stuff
//import React from 'react' (instead of using this use below)
//if you use the above you will have to do react.function()

import { useState } from 'react'

// load my comp
import Welcome from './components/functionalComp'
import InLineComp from './components/otherComp'
import Title from './components/Title'

import './App.css'

function App(){
    //writing my (App) private vars
    //state
    //const {getter, setter} = userState(init);
    //flag for if it is loaded yet
    const [loaded, setLoaded] = useState(false);
    //obj to hold my returned data
    const [obj, setMyObj] = useState();
    
    //write my (App) methods
    //let's go faux the date...
    const getData = () =>{
        //usuallly we would go out and load data!
        //today we are faking it to see useEffect and useState working
        setMyObj({
            title:"React is fun!",
            description:"lots and lots of words, something more meaningful than this, yadda, yadda..."
        });
        setLoaded(true);
    }

    if (!loaded) return (<>Loading... <button/></>)

    return (
        <>
            <Title obj = {myObj}/>
            <InLineComp name="fred" age="53"/>
            <Welcome name="dan" job="talk"/>
        </>
    );
}