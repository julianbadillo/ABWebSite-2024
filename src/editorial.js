import kundalini from './assets/images/kundalini.gif';
import Editorialbook from './EditorialBook';

function LayoutDesign() {
    return (
        <>
            <h1>Brand Design</h1>

            <h2>Identity</h2>
            <p>
            Kundalini started as a Yoga app that turned into a full potential lifestyle....

            </p>

            <img src={kundalini}
            alt= "yogapp"  
            /> 

            <div className="flipBook">
            <h1>Brand Book</h1>
            <Editorialbook />
           </div>
        </>
    )
}

export default LayoutDesign;