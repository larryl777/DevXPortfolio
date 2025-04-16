import './Projects.css'
import { Link } from "react-router-dom"

const Projects = () => {
    return(
        <div>
            <div className = "projectstext1">
                <h1>
                 Here are Some of My Recent  Projects! 
                </h1>
            </div>
            
            <div className = "text2">
                <h2>
                    Bruins Meet Bruins 
                    <div className = "githublink">                         
                        <nav>
                        <Link to="https://github.com/MarcT03/bruins-meet-bruins">Github</Link>
                        </nav>   
                    </div>
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
                    <div className = "githublink"> 
                        <nav>
                        <Link to="https://github.com/larryl777/LarryBot">Github</Link>
                        </nav>   
                    </div>
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
                    <div className = "githublink"> 
                        <nav>
                        <Link to="https://github.com/larryl777/Bruin-Nav">Github</Link>
                        </nav>  
                    </div>
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