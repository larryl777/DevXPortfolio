import './Experience.css'

const Experience = () => {
    return(
        <div>
            <div className = "text1">
            <h1>
                Experience
            </h1>
            </div>

            {/* crude prototype/layout  */}
            <div className = "text2">
            <h2>
                Software Engineer Intern 
            </h2>
                <h3>
                • Performed comprehensive testing of 3+ web and mobile application features weekly, identifying 30+ bugs to ensure timely resolutions for feature improvements and code optimizations
                <br></br>
                • Resolved 30% of identified issues, debugging React-based UI inconsistencies and backend API routing issues, enhancing application performance and functionality
                <br></br>
                • Designed alert features for input validation and system events, improving error handling and data accuracy
                </h3>
            </div>

            <div className = "text2">
            <h2>
                Developer Intern  
            </h2>
            <h3>
            • Developing an interactive portfolio website with 4+ sections using JavaScript, HTML/CSS, and React.js, implementing modular, reusable components and dynamic routing.
            <br></br>
            • Deployed and optimized performance with Vercel, reducing load times through code splitting and minification
            <br></br>
            •Planning on integrating a backend contact form using Express.js and Nodemailer, enabling real-time email communication for visitor messages.
            </h3>
            </div>


        </div>
    )
}

export default Experience;