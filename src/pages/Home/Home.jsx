import HomeCartSlid from "../../components/HomeCartSlid/HomeCartSlid"
import HomeSlider from "../../components/HomeSlider/HomeSlider"
import ProductCart from "../../components/ProductCart/ProductCart"

 

const Home = ()=>{
    return(
        <div className=" ">
            <HomeSlider/>
            <HomeCartSlid/>
            <ProductCart/> 

        </div>
    )
}

export default Home