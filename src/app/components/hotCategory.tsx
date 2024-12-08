import Image from "next/image";
import orangechair from "../../../public/orangechair.png"
import whitechair from "../../../public/whitechair.png"
import brownchair from "../../../public/brownchair.png"
import stolechair from "../../../public/stolechair.png"

const Hotcategory = () => {
    return(
        <div className="w-[1320px] h-[648px] absolute top-[2604px] left-[323px] flex">
            
            <Image src={orangechair} alt="o" className="w-[648px]"></Image>
            <Image src={whitechair} alt="w" className="w-[312px] h-[312px] absolute left-[672px]"></Image>
            <Image src={brownchair} alt="b" className="w-[312px] h-[312px] absolute top-[336px] left-[672px]"></Image>
            <Image src={stolechair} alt="s" className="w-[312px] h-[312px] absolute top-[336px] left-[1008px]"></Image>
            <Image src={stolechair} alt="s" className="w-[312px] h-[312px] absolute left-[1008px]"></Image>

            <p className="w-[648px] h-[52px] absolute top-[300px] left-[-352px] -rotate-90 text-black font-normal text-[34px] leading-[39.84px] text-center uppercase">Explore new and popular styles</p>
        </div>
    )
}

export default Hotcategory;