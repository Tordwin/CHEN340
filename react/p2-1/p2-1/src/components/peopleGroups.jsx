const PeopleGroup=()=>{
    return (
        <>
        <h3>Title</h3>
        <div className="peopleList"></div>
            <h2>{peopleObj.title}</h2>
            <h3>{peopleObj.subTitle}</h3>
            
            <h3>Faculty</h3>
            <div className='peopleList'>
                {peopleObj.faculty.map((p) => 
                <div className='peopleListItem'>
                    <h3>{p.name}</h3>
                    <img src={p.imagePath} alt="thisPerson"/>
                </div>
                )}
            </div>
        </>
    )
}

export default PeopleGroup