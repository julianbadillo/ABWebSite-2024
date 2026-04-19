import web from './assets/images/web.gif';
import data from './assets/images/data.gif';
import uiux from './assets/images/uiux.gif'
import logo from './assets/images/acorn.gif';
import editorial from './assets/images/IntroKundalini.gif'
import threeD from './assets/images/3d.gif';
import icons from './assets/images/icons.jpg';
import teaser from './assets/images/teaser.gif';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import git from './assets/images/github.jpg';

function Projects() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
          
            <div className="abhero">
                
            </div>
            
          
            <div className="parallel">
                <div className="framel">
                <img
                        src={data}
                        alt="data"
                    /> 
            
                </div>
                <div className="framer">
                    <h1>Data Visualization</h1>
                    <p>In these projects my main aim was effectively clean, process, analyze, and visualize data. Also, check on my GitHub profile to see Data Analysis Notebooks. </p>
                      <div className='icon'>
                                            <a href="https://github.com/AngelaPBelloR" target="_blank" rel="noreferrer" >
                                            
                                            <img src={git}
                                                alt="github"
                                            />
                                            </a>
                      </div>
                    
                    <Link to="/datav">
                        <button>Learn more...
                        </button>
                    </Link>
                  
                </div>
            </div>
            <div className="parallel">
                <div className="framel">
                     <img
                        src={web}
                        alt="web"
                    />
                </div>
                <div className="framer">
                <h1>Web</h1>
                    <p>Portfolio websites, from scratch. Even this one you are looking at right now. You can see more on my profile at GitHub. (Click on the icon at the footer)</p>
                    <Link to="/webdesignanddev">
                        <button>Learn more...
                        </button>
                    </Link>
                </div>
            </div>
            <div className="parallel">
                <div className="framel">
                    <img
                        src={uiux}
                        alt="uiux"
                    />
                </div>
                <div className="framer">
                <h1>UI/UX</h1>
                    <p>Study case for a Client.</p>
                    <Link to="/uiux">
                        <button>Learn more...
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className="parallel">
                <div className="framel">
                    <img
                        src={editorial}
                        alt="layouts"
                    />
                </div>
                <div className="framer">
                    <h1>Brand Identity Design</h1>
                    <p>Kundalini is a brand, I've envision as a sustainable and healthy lifestyle.</p>
                    <Link to="/editorial">
                        <button>Learn more...
                        </button>
                    </Link>
                </div>
            </div>

              <div className="parallel">
                <div className="framel">
                    <img
                        src={teaser}
                        alt="teaser"
                    />  
                </div>
                <div className="framer">
                    <h1>Motion Graphics</h1>
                    <p>For long time, I've been experimenting with after effects, welcome to see my personal and professional projects.</p>

                    <Link to="/motion">
                        <button>Learn more...
                        </button>
                    </Link>
                </div>
            </div>
            <div className="parallel">
                <div className="framel">
                <img
                        src={threeD}
                        alt="3d"
                    />
                </div>
                <div className="framer">
                <h1>3D Design</h1>
                    <p>My first career was engineering. Then, I learned computing aid design tools. I transfered these skills and became proficient in Blender and Maya.</p>
                    <Link to="/threeD">
                            <button>Learn more...
                            </button>
                    </Link>
                   
                </div>
            </div>
            <div className="parallel">
                <div className="framel">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="framer">
                    <h1>Logo Design</h1>
                    <p>In this project, I facilitated graphics identity for the ACORN project at Fermilab Physics National Laboratory by conveying ideas of renovation, modernization, expansion, and cutting-edge technology.</p>
                    <Link to="/logoDesign">
                        <button>Learn more...
                        </button>
                     </Link>
                   
                </div>
            </div>
            <div className="parallel">
                <div className="framel">
                    <img
                        src={icons}
                        alt="icons"
                    />
                </div>
                <div className="framer">
                    <h1>Icons Book</h1>
                    <p>This is a collection of icons I have created for a variety of projects.</p>
                    <Link to="/icons">
                        <button>Learn more...
                        </button>
                    </Link>
                </div>
            </div>
    
        </motion.div>
    )
}

export default Projects