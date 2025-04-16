import './Experience.css'

const Experience = () => {
    return(
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
                • Developing an interactive portfolio website with 4+ sections using JavaScript, HTML/CSS, and React.js, implementing modular, reusable components and dynamic routing.
                <br></br>
                • Deployed and optimized performance with Vercel, reducing load times through code splitting and minification
                <br></br>
                •Planning on integrating a backend contact form using Express.js and Nodemailer, enabling real-time email communication for visitor messages.
                </p>
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
                    • Performed comprehensive testing of 3+ web and mobile application features weekly, identifying 30+ bugs to ensure timely resolutions for feature improvements and code optimizations
                <br></br>
                    • Resolved 40% of identified issues, debugging React-based UI inconsistencies and backend API routing issues, enhancing application performance and functionality
                <br></br>
                    • Designed alert features for input validation and system events, improving error handling and data accuracy
                <br></br>
                    • Documented the codebase to support bug fixing, leveraging Git to streamline version control and collaboration
                </p>
                </div>
        </div>

    </div>
    )
}

export default Experience;