import Hero from "./Hero";
import PropertyTypes from "./PropertyTypes";
import homePlaceHolder from "../images/homeplaceHolder.jpg";


const Home = () => {
    return (
        <div>
         <Hero img ={homePlaceHolder} />
		<PropertyTypes  />
        </div>
    )
}

export default Home