//Load
import {useState, useEffect} from 'react'
import getData from '../utils/getData';
//Import CSS HERE
import './css/Employment.css'
//External Components
import BasicBreadcrumbs from '../utils/breadcrumbs';
import CircularIndeterminate from '../utils/progressCircle';
import CustomizedTables from '../utils/tableEmp';

const Employment = () => {
    //Variables
    const [employmentObj, setEmploymentObj] = useState();
    const [loaded, setLoaded] = useState(0);
    //Grabbing data
    useEffect(() => {
        getData('employment/').then((json) => {
            console.log("Employment page has loaded", json);
            setEmploymentObj(json);
        })
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, []); 

    if (!loaded) return (
        <>
            <h2 id='loading'>Employment Page is Loading...<CircularIndeterminate /></h2>
        </>
    )

    const noCoopDuplicates = employmentObj.coopTable.coopInformation.filter(
        (emp, index, self) =>
          index === self.findIndex((i) => i.employer === emp.employer)
    );

    const noEmploymentDuplicats = employmentObj.employmentTable.professionalEmploymentInformation.filter(
        (emp, index, self) =>
          index === self.findIndex((i) => i.employer === emp.employer)
    );

    //Fields to return:
    //introduction
    //degreeStatistics
    //employers
    //careers
    //coopTable
    //employmentTable

    return (
        <>
            <BasicBreadcrumbs />
            <div id='employmentContainer'>
                <h1>{employmentObj.introduction.title}</h1>
                {employmentObj.introduction.content.map((emp, index) => 
                    <div key={emp.title || index} id='introContent'>
                        <h2>{emp.title}</h2>
                        <p>{emp.description}</p>
                    </div>
                )}

                <h2>{employmentObj.degreeStatistics.title}</h2>
                {employmentObj.degreeStatistics.statistics.map((emp, index) => 
                    <div key={emp.title || index} id='empDegreeStats'>
                        <p>{emp.value}</p>
                        <p>{emp.description}</p>
                    </div>
                )}

                <h2>{employmentObj.employers.title}</h2>
                {employmentObj.employers.employerNames.map((emp, index) => 
                    <div key={emp || index} id='employerNames'>
                        <p>{emp}</p>
                    </div>
                )}

                <h2>{employmentObj.careers.title}</h2>
                {employmentObj.careers.careerNames.map((emp, index) => 
                    <div key={emp || index} id='employerNames'>
                        <p>{emp}</p>
                    </div>
                )}
                <CustomizedTables />
            </div>
        </>
    )
}

export default Employment;