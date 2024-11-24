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
            <p>breadcrumb here</p>
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

                <h2>Co-op Table</h2>
                <table>
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>Degree</th>
                                <th>City</th>
                                <th>Term</th>
                            </tr>
                        </thead>
                        {noCoopDuplicates.map((emp, index) => ( 
                            <tbody key={emp.employer || index}>
                                <tr>
                                    <td><a href={`employment/coopTable/coopinformation/employer=${emp.employer}`}>{emp.employer}</a></td>
                                    <td>{emp.degree}</td>
                                    <td>{emp.city}</td>
                                    <td>{emp.term}</td>
                                </tr>
                            </tbody>
                        ))}
                </table>

                <h2>Employment Table</h2>
                <table>
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>Degree</th>
                                <th>City</th>
                                <th>Title</th>
                                <th>Start Date</th>
                            </tr>
                        </thead>
                        {noEmploymentDuplicats.map((emp, index) => ( 
                            <tbody key={emp.employer || index}>
                                <tr>
                                    <td><a href={`employment/employmentTable/professionalEmploymentInformation/employer=${emp.employer}`}>{emp.employer}</a></td>
                                    <td>{emp.degree}</td>
                                    <td>{emp.city}</td>
                                    <td>{emp.title}</td>
                                    <td>{emp.startDate}</td>
                                </tr>
                            </tbody>
                        ))}
                </table>
            </div>
        </>
    )
}

export default Employment;