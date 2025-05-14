import './Experience.css'
import devxLogo from './logos/devx.jpeg'; 
import wkupLogo from './logos/workup.png'; 


const Experience = () => {
    return(
<div className = "experience">
    <div className = "timeline">
        <div className = "experiencetext1">
            <h1>
                Experience
            </h1>
        </div>
        <div className = "left container">
            <div className = "content">
                <h2>
                Developer Intern  
                </h2>
                <div className = "companytitle">
                    UCLA DevX, February 2025 - Present
                </div>
                <p>
                • Developing an interactive portfolio website with 4+ sections using JavaScript, HTML/CSS, and React.js
                <br></br>
                • Utilized Vercel for CI/CD deployment
                <br></br>
                •Integrating a backend contact system using Express.js and Nodemailer
                </p>
            </div>
            <div className="tech-icons">
                <img src={devxLogo} alt="React" className="tech-icon" />
            </div>
        </div>
        <div className = "right container">
            <div class = "content">
                <h2>
                    Software Engineer Intern 
                </h2>
                <div className = "companytitle">
                    Workup, October 2024 - January 2025
                </div>
                <p>
                    • Performed comprehensive testing of 3+ web and mobile application features weekly, identifying 30+ bugs 
                <br></br>
                    • Resolved 40% of identified issues, debugging React-based UI inconsistencies and backend API routing issues
                <br></br>
                    • Designed alert features for input validation and system events
                <br></br>
                    • Documented the codebase to support bug fixing, using Git for version control
                </p>
                </div>
                <div className="tech-icons">
                <img src={wkupLogo} alt="React" className="tech-icon2" />
            </div>
        </div>
    </div>
</div>
    )
}

export default Experience;