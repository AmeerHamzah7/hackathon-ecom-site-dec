import Image from "next/image";
import wingchair from "../../../public/wingchair.png"
import woodenchair from "../../../public/woodenchair.png"
import deskchair from "../../../public/deskchair.png"

const TCategories = () => {
    return(
        <div>
            
            <div className="w-[424px] h-[424px] absolute top-[84px] left-[448px]">
                <Image src={wingchair} alt="w" className="rounded-[10px]"></Image>

                <div className="h-[85px] absolute top-[339px] rounded-[10px] flex flex-col p-[20px] gap-[8px] bg-black bg-opacity-70">
                    <p className="w-[384px] h-[22px] font-Inter text-[20px] leading-[22px] text-white">Wing Chair</p>
                    <p className="w-[376px] h-[15px] text-white font-Inter font-normal text-[14px] opacity-70">3,584 Products</p>
                </div>
            </div>
        
            <div className="w-[424px] h-[424px] absolute top-[84px] left-[896px]">
                <Image src={woodenchair} alt="w" className="rounded-[10px]"></Image>

                <div className="h-[85px] absolute top-[339px] rounded-[10px] flex flex-col p-[20px] gap-[8px] bg-black bg-opacity-70">
                    <p className="w-[384px] h-[22px] font-Inter text-[20px] leading-[22px] text-white">Wooden Chair</p>
                    <p className="w-[376px] h-[15px] text-white font-Inter font-normal text-[14px] opacity-70">157 Products</p>
                </div>
            </div>

            <div className="w-[424px] h-[424px] absolute top-[84px] left-[1344px]">
                <Image src={deskchair} alt="w" className="rounded-[10px]"></Image>

                <div className="h-[85px] absolute top-[339px] rounded-[10px] flex flex-col p-[20px] gap-[8px] bg-black bg-opacity-70">
                    <p className="w-[384px] h-[22px] font-Inter text-[20px] leading-[22px] text-white">Desk Chair</p>
                    <p className="w-[376px] h-[15px] text-white font-Inter font-normal text-[14px] opacity-70">154 Products</p>
                </div>
            </div>
        
        </div>
            
    )
}

export default TCategories