import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import flip from './assets/images/flip.gif';

function Products() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
            <div className="heroproducts">

            </div>      
            <h1>Products</h1>

            <div className="parallel">
                 <div className="framel">
      

                    <a href="https://www.amazon.com/dp/B0G2F4CZQ3" >

                        <img
                            src={flip}
                            alt="flip"
                        />
                    </a>
                </div>
                 <div className="framer">
                          <h1>Benedict Eggs</h1>
                    <p>Not a traditional cookbook. Just 100% Benedict inspiration. Modern interpretations of a brunch classic, broken down for the home cook.</p>
                    <a href="https://angelapbellor.github.io/Benedicts-Brand/" target="_blank" rel="noreferrer" >
                        <button>Learn more...
                        </button>
                    </a>
            


                
                    <a href="https://www.amazon.com/dp/B0G2F4CZQ3" >
            

                        <h3>Click here to buy</h3>
                    </a>
                </div>
            </div>
           
        </motion.div>
    )
}

export default Products