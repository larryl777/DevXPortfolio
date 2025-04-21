import './Projects.css'
import { Link } from "react-router-dom"
import discLogo from './logos/discord.jpeg'; 
import opmLogo from './logos/opm.webp'; 
import bmbLogo from './logos/bruinsmbruins.png'; 

const Projects = () => {
    return(
        <div>
            <div className = "projectstext1">
                <h1>
                 Here are Some of My Recent  Projects! 
                </h1>
            </div>
            <div className="big-container">
            <div className= "card-container">
                <div className = "card">
                    <img src={bmbLogo} alt="C++ Logo" />
                    <div className = "card-info">
                        <h3>Bruins Meet Bruins</h3>
                        <div className = "githublink">                         
                            <nav>
                                <Link to="https://github.com/MarcT03/bruins-meet-bruins">Github</Link>
                            </nav>   
                        </div>
                        <p>
                        Full stack web application developed using the MERN stack, 
                        aimed to enable UCLA students to find and meet each other through 
                        specific matches and interests.
                        </p>
                    </div>
                </div>
                <div className = "card">
                    <img src={discLogo} alt="C++ Logo" />
                    <div className = "card-info">
                        <h3>Discord Bot</h3>
                        <div className = "githublink"> 
                        <nav>
                            <Link to="https://github.com/larryl777/LarryBot">Github</Link>
                        </nav>   
                        </div>
                        <p>
                        Personal interactive discord bot using Node.js and Discord's REST API.
                        Features range from standard utility commands to moderation commands in order to
                        maintain optimal server environments.
                        </p>

                    </div>
                </div>
                <div className = "card">
                    <img src={opmLogo} alt="C++ Logo" />
                    <div className = "card-info">
                        <h3>Bruin Nav</h3>
                        <div className = "githublink">                         
                            <nav>
                                <Link to="https://github.com/larryl777/Bruin-Nav">Github</Link>
                            </nav>   
                        </div>
                        <p>
                        C++ navigation tool that extracts coordinate data from Open Street Maps,
                        then uses these coordinates to find an optimal route between a start and end
                        point.
                        
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;