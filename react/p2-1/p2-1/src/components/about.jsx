//gert stuff

//the comment
const About = ({aboutData}) =>{
    return (
        <div className="About">
            <h2>{aboutData.title}</h2>
            <h3>{aboutData.description}</h3>
            <div className="quote">{aboutData.quote}</div>
            <h4>--{aboutData.quoteArthor}</h4>
        </div>
    )
}
export default About;
