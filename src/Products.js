import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import flip from './assets/images/flip.gif';

function Products() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
            <div className="heroproducts">

            </div>      
            <h1>Products</h1>

            

            <h2>Benedict Eggs</h2>
            <p>Not a traditional cookbook. Just 100% Benedict inspiration. Modern interpretations of a brunch classic, broken down for the home cook.</p>

            <a href="https://www.amazon.com/dp/B0G2F4CZQ3" >

                <img
                    src={flip}
                    alt="flip"
                />
            </a>

            
            <a href="https://www.amazon.com/dp/B0G2F4CZQ3" >

                 <h3>Click here to buy</h3>
            </a>

           
        </motion.div>
    )
}

export default Products