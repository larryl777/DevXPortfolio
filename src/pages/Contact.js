import './Contact.css'

const Contact  = () => {
    return(
        <div>
            <div className = "contacttext1">
            <h1>
                Get in touch with me! 
            </h1>
            </div>

            <div className = "text-header">
                <p>
                    Have questions or just want to say hi? Feel free to leave a message 
                    and I will try my best to get back to you as soon as possible!
                </p>
            </div>
            <div className = "contacttext2">
            <textarea
            placeholder="Name"
            id="name"
            name="name"
            className="inputbox"
            required/>
            </div>

            <div className = "contacttext2">
            <textarea
            placeholder="Email"
            id="Email"
            name="Email"
            className="inputbox"
            required/>
            </div>

            <div className = "contacttext2">
            <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            className="inputbox2"
            required/>
            
            <br></br>
            <br></br>
             <button type="button" className="customButton" onClick={() => alert("Message Sent!")}>
                Send
            </button>

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