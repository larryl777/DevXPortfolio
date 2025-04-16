import './Contact.css'

const Contact  = () => {
    return(
        <div>
            <div className = "contacttext1">
            <h1>
                Get in touch with me! 
            </h1>
            </div>

            <div className = "contacttext2">
            <h2>
                Your name:  
            </h2>
            <input
            type="text"
            id="name"
            name="name"
            required/>
            </div>

            <div className = "contacttext2">
            <h2>
                Your email:  
            </h2>
            <input
            type="text"
            id="email"
            name="email"
            required/>
            </div>

            <div className = "contacttext2">
            <h2>
                Message:  
            </h2>
            <input
            type="text"
            id="message"
            name="message"
            className = "inputbox"
            required/>
            </div>
        
        <div className = "contacttext3">
            <h1> Check out some of my other socials! </h1>
            </div>
        <div className="contact-center">
        <ul className="nav-links">     
        <li>
            <a className="contactbutton1" href="https://github.com/larryl777">GitHub</a>
        </li>
       
        <li>
            <a className="contactbutton1" href="https://www.linkedin.com/in/larrylim27/">LinkedIn</a>
        </li>

        </ul>
        </div> 
    </div>
    )
}

export default Contact;