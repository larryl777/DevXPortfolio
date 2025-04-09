import './Projects.css'
const Projects = () => {
    return(
        <div>
            <div className = "text1">
                <h1>
                 Here are Some of My Recent  Projects! 
                </h1>
            </div>
            
            {/* still need to add navigation links to github  */}
            <div className = "text2">
                <h2>
                    Bruins Meet Bruins  
                </h2>
                <h3>
                Full stack web application developed using the MERN stack, 
                aimed to enable UCLA students to find and meet each other through 
                specific matches and interests.
                </h3>
            </div>

            <div className = "text2">
                <h2>
                    Discord Bot
                </h2>
                <h3>
                Personal interactive discord bot using Node.js and Discord REST API, 
                allowing users to execute 10+ utility and moderation commands to 
                maintain optimal server environments
                </h3>
            </div>

            <div className = "text2">
                <h2>
                    Bruin Nav 
                </h2>
                <h3>
                C++ optimal route finder/navigator between data 
                coordinates that are using drawn from Open Street Maps
                </h3>
            </div>
        </div>
    )
}

export default Projects;