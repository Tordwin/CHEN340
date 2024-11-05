import React, { useEffect, useState } from 'react'
import { TabPane, Tab } from 'semantic-ui-react'
import getData from '../utils/getData'
import PeopleGroup from "./peopleGroups"

const PeopleTabs = () => {
  //state
  const [loaded, setLoaded] = useState(false);
  const [peopleObj, setPeopleObj] = useState();

  //methods
  //useeffect
  useEffect( () => {
    getData('people/')
      .then ( (json) => {
        console.log('people', json);
        setPeopleObj(json);
        setLoaded(true);
      })
  }, []);

  //panes
  const panes = [
    { menuItem: 'Faculty', render: () => <TabPane>
      <h1>{peopleObj.title}</h1>
    </TabPane> },
  
    { menuItem: 'Staff', render: () => <TabPane>
      <PeopleGroup title="Staff" obj={peopleObj.staff}/>
    </TabPane> },
  ]
  
  return (
    <>
    <h1>{peopleObj.title}</h1>
    <h3>{peopleObj.subTitle}</h3>
    <Tab panes={panes}/>
    </>
  )
}
export default PeopleTabs