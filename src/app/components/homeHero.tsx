import Image from "next/image"
import herochair from "../../../public/herochair.png"
import shopArrow from "../../../public/shopArrow.png"

const HomeHero = () => {
    return(
            <div className="w-[1321px] h-[850px] absolute top-[204px] left-[300px]">
                    <div className="h-[850px] bg-[#F0F2F3] rounded-bl-[48px]"></div>
                    <Image src={herochair} alt="herochair" className="w-[434px] h-[584px] absolute top-[115px] left-[777px]"></Image>

                    <div className="w-[557px] h-[337px] absolute top-[229px] left-[70px] rounded-[8px]"></div>

                    <p className="w-[180px] h-[14px] font-Inter font-normal text-[14px] leading-[14px] uppercase tracking-[0.12em] absolute top-[229px] left-[70px]">Welcome to chairy</p>
                    <p className="w-[557px] h-[198px] absolute top-[267px] left-[70px] font-Inter font-bold text-[60px] leading-[66px] text-[#272343] capitalize">Best Furniture Collection for your interior.</p>
                    
                    <div className="w-[171px] h-[52px] absolute top-[514px] left-[70px] rounded-[8px] py-[14px] px-[24px] bg-[#029FAE] flex justify-between items-center">
                        <p className="w-[79px] h-[18px] font-Inter text-[16px] leading-[17.6px] text-white">Shop Now</p>
                        <div className="w-[24px] h-[24px]">
                            <Image src={shopArrow} alt="shopArrow" className="w-[16px] h-[9px] absolute top-[21.6px]"></Image>
                        </div>
                    </div>
            </div>
    )
}

export default HomeHero