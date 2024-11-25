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
        }, 1000);
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
                
                <div id='empCarContainer'>
                    <img src="img/careerfair.jpg" alt="Career Fair Picture" style={{ minWidth: '500px', minHeight: '290px', paddingRight: '100px'}}/>
                    <div id='employersContainer'>
                        <h2>{employmentObj.employers.title}</h2>
                        {employmentObj.employers.employerNames.map((emp, index) => 
                            <div key={emp || index} id='employerNames'>
                                <p>{emp}</p>
                            </div>
                        )}
                    </div>
                    
                    <div id='careersContainer'>
                    <h2>{employmentObj.careers.title}</h2>
                    {employmentObj.careers.careerNames.map((emp, index) => 
                        <div key={emp || index} id='employerCareers'>
                            <p>{emp}</p>
                        </div>
                    )}
                    </div>
                    <img src="img/professional.jpg" alt="Professional Picture" style={{ minWidth: '500px', minHeight: '290px', paddingLeft: '100px' }} />
                </div>


                <h2 id='centerStats'>{employmentObj.degreeStatistics.title}</h2>
                <div id='degreeStatsContainer'>
                    {employmentObj.degreeStatistics.statistics.map((emp, index) => 
                        <div key={emp.title || index} id='empDegreeStats'>
                            <p id='degreeDesc'>{emp.description} </p>
                            <p>{emp.value}</p>
                        </div>
                    )}
                </div>

                <CustomizedTables />
            </div>
        </>
    )
}

export default Employment;