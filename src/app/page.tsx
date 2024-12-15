import Navigation from "./components/navigation";
import HomeHero from "./components/homeHero";
import Partners from "./components/partners";
import FProducts from "./components/fproducts";
import TCategories from "./components/tcategories";
import Hotcategory from "./components/hotCategory";
import OurProducts from "./components/ourproducts";

const Homepage = () => {
    return(
        <div className="w-[1920px] h-auto">
            
            <HomeHero/>
            <Partners/>

            <div className="w-[1920px] h-[461px] absolute top-[1270px]">
                <div className="h-[44px] pr-[300px] pl-[300px]">
                    <h2 className="w-[286px] h-[35px] font-Inter text-[32px] leading-[35.2px] text-[#272343]">Featured Products</h2>
                </div>

            <FProducts/>
            </div>

            <div className="w-[1920px] h-[461px] absolute top-[1867px] left-[-148px]">
                <div className="h-[44px] pr-[300px] pl-[300px] absolute left-[148px]">
                    <h2 className="w-[286px] h-[35px] font-Inter text-[32px] leading-[35.2px] text-[#272343]">Top Categories</h2>
                </div>

            <TCategories/>
            </div>

            <Hotcategory/>

            <div className="w-[1320px] h-[919px] absolute top-[3425px] left-[307px]">
                <div className="h-[44px] pr-[300px] pl-[300px] absolute left-[148px] justify-center">
                    <h2 className="w-[205px] h-[35px] font-Inter text-[32px] leading-[35.2px] text-[#272343]">Our Products</h2>
                </div>

            <OurProducts/>
            </div>
            
        </div>
    )
}

export default Homepage;