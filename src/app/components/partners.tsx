import Image from "next/image"
import zapier from "../../../public/zap.png"
import piped from "../../../public/piped.png"
import cibbank from "../../../public/cibbank.png"
import orca from "../../../public/orca.png"
import burnt from "../../../public/burnttoast.png"
import ponda from "../../../public/pando.png"
import moz from "../../../public/moz.png"

const Partners = () => {
    return(
        <div className="w-[1321px] h-[139px] absolute top-[1107px] left-[300px] justify-between flex items-center">
            <Image src={zapier} alt="zapier" className="w-[85px] h-[87px]"></Image>
            <Image src={piped} alt="a" className="w-[107px] h-[109px]"></Image>
            <Image src={cibbank} alt="a" className="w-[135px] h-[139px]"></Image>
            <Image src={orca} alt="a" className="w-[63px] h-[65px]"></Image>
            <Image src={burnt} alt="a" className="w-[98px] h-[101px]"></Image>
            <Image src={ponda} alt="a" className="w-[113px] h-[115px]"></Image>
            <Image src={moz} alt="a" className="w-[84px] h-[87px]"></Image>
        </div>
    )
}

export default Partners