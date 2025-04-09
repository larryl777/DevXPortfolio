import './Contact.css'
import { Link } from "react-router-dom"

const Contact  = () => {
    return(
        <div>
            <div className = "text1">
            <h1>
                Get in touch with me! 
            </h1>
            </div>

            <div className = "text2">
            <h2>
                Your name:  
            </h2>
            <input
            type="text"
            id="name"
            name="name"
            required/>
            </div>

            <div className = "text2">
            <h2>
                Your email:  
            </h2>
            <input
            type="text"
            id="email"
            name="email"
            required/>
            </div>

            <div className = "text2">
            <h2>
                Message:  
            </h2>
            <input
            type="text"
            id="message"
            name="message"
            required/>
            </div>
        
        <div className="contactOptions">
            <nav>
                <Link to="https://github.com/larryl777">Github</Link> | <Link to="https://www.linkedin.com/in/larrylim27/">LinkedIn</Link>
            </nav>
        </div>

            
        </div>
    )
}

export default Contact;