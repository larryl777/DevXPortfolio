import './Landing.css'
import cplusLogo from './logos/c++.png'; 
import cssLogo from './logos/css.png'; 
import htmlLogo from './logos/html.png'; 
import javaLogo from './logos/java.svg'; 
import javascriptLogo from './logos/javascript.svg'; 
import pythonLogo from './logos/python.svg'; 
import reactLogo from './logos/react.png'; 
import gitLogo from './logos/git.png'; 
import expressLogo from './logos/express-js.png'; 
import mongoLogo from './logos/mongodb.svg'; 
import nodeLogo from './logos/node.png'; 

const Landing = () => {
    return(
        <div className = "home-container">
            <div className = "text1">
                <h1>
                    Larry Lim
                </h1>
            </div>
            <div className="text2">
                <h2>
                Hello, I'm Larry, a second year undergraduate student studying Linguistics and Computer Science at UCLA. 
                I have interests in Software Engineering, Web Development, and also Full-Stack Development. With experience in backend and web development, I hope to develop
                technology to help and improve the lives of those around me. 
                <br></br>
                <br></br>
                Welcome to my portfolio page! 
                </h2>
            </div>

            <div className="text3">
                <h2>
                My Technical Stack: 
                </h2>
                <div className = "logos">
                    <div className = "logo-slide">
                        <div className = "logo-description">
                            <img src={cplusLogo} alt="C++ Logo" />
                            <span>C++</span>
                        </div>
                        <div className = "logo-description">
                            <img src={cssLogo} alt="CSS Logo" />
                            <span>CSS</span>
                        </div>
                        <div className = "logo-description">
                            <img src={htmlLogo} alt="HTML Logo" />
                            <span>HTML</span>
                        </div>
                        <div className = "logo-description">
                            <img src={javaLogo} alt="Java Logo" />
                            <span>Java</span>
                        </div>
                        <div className = "logo-description">
                            <img src={javascriptLogo} alt="JavaScript Logo" />
                            <span>JavaScript</span>
                        </div>
                        <div className = "logo-description">
                            <img src={pythonLogo} alt="Python Logo" />
                            <span>Python</span>
                        </div>
                        <div className = "logo-description">
                            <img src={reactLogo} alt="React Logo" />
                            <span>React</span>
                        </div>
                        <div className = "logo-description">
                            <img src={gitLogo} alt="Git Logo" />
                            <span>Git</span>
                        </div>
                        <div className = "logo-description">
                            <img src={expressLogo} alt="Express Logo" />
                            <span>Express</span>
                        </div>
                        <div className = "logo-description">
                            <img src={mongoLogo} alt="MongoDB Logo" />
                            <span>MongoDB</span>
                        </div>
                        <div className = "logo-description">
                            <img src={nodeLogo} alt="Nodejs Logo" />
                            <span>Nodejs</span>
                        </div>
                    </div>
                    <div className = "logo-slide">
                        <div className = "logo-description">
                            <img src={cplusLogo} alt="C++ Logo" />
                            <span>C++</span>
                        </div>
                        <div className = "logo-description">
                            <img src={cssLogo} alt="CSS Logo" />
                            <span>CSS</span>
                        </div>
                        <div className = "logo-description">
                            <img src={htmlLogo} alt="HTML Logo" />
                            <span>HTML</span>
                        </div>
                        <div className = "logo-description">
                            <img src={javaLogo} alt="Java Logo" />
                            <span>Java</span>
                        </div>
                        <div className = "logo-description">
                            <img src={javascriptLogo} alt="JavaScript Logo" />
                            <span>JavaScript</span>
                        </div>
                        <div className = "logo-description">
                            <img src={pythonLogo} alt="Python Logo" />
                            <span>Python</span>
                        </div>
                        <div className = "logo-description">
                            <img src={reactLogo} alt="React Logo" />
                            <span>React</span>
                        </div>
                        <div className = "logo-description">
                            <img src={gitLogo} alt="Git Logo" />
                            <span>Git</span>
                        </div>
                        <div className = "logo-description">
                            <img src={expressLogo} alt="Express Logo" />
                            <span>Express</span>
                        </div>
                        <div className = "logo-description">
                            <img src={mongoLogo} alt="MongoDB Logo" />
                            <span>MongoDB</span>
                        </div>
                        <div className = "logo-description">
                            <img src={nodeLogo} alt="Nodejs Logo" />
                            <span>Nodejs</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing;