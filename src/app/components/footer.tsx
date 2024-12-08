import Image from "next/image"
import logo from "../../../public/logoicon.png"
import paylogo from "../../../public/paylogo.png"

const Footer = () => {
    return(

    <div className="flex">
        <div className="w-[1920px] h-[418px] absolute top-[4480px] left-[-12px]">
            <div className="shadow-[#E1E3E5] w-[1920px] h-[343px] shadow-inner"></div>
            <div className="w-[1920px] h-[75px] absolute top-[343px] justify-between py-[24px] px-[300px] shadow-[#E1E3E5] shadow-inner"></div>

            <div className="w-[350px] h-[198px] absolute top-[80px] left-[300px] flex flex-col gap-[24px]">
                <div className="w-[168px] h-[40px] flex gap-[8px]">
                     <Image src={logo} alt="logo" className="w-[40px] h-[40px]"></Image>
                     <p className="w-[120px] h-[31px] font-Inter text-[26px] leading-[31.2px] text-[#272343] font-semibold">Comforty</p>
                </div>

                <p className="w-[350px] h-[72px] text-[#272343] text-opacity-60 font-Inter font-normal text-[16px] leading-[24px]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. <br /> Cras egestas purus </p>
            </div>

            <div className=" flex flex-col gap-[20px] absolute top-[80px] left-[747px] ">
                <h3 className="w-[82px] h-[15px] font-Inter font-medium text-[14px] leading-[15.4px] tracking-[0.6em] uppercase text-[#9A9CAA]">Category</h3>

                <ul className="text-[#272343] font-Inter font-normal text-[16px] leading-[17.6px] h-[168px] flex flex-col gap-[12px]">
                    <li><p>Sofa</p></li>
                    <li><p>Armchair</p></li>
                    <li><p>Wing Chair</p></li>
                    <li><p>Desk Chair</p></li>
                    <li><p>wooden Chair</p></li>
                    <li><p>Park Bench</p></li>
                </ul>
            </div>

            <div className=" flex flex-col gap-[20px] absolute top-[80px] left-[971.5px] ">
                <h3 className="w-[82px] h-[15px] font-Inter font-medium text-[14px] leading-[15.4px] tracking-[0.6em] uppercase text-[#9A9CAA]">Support</h3>

                <ul className="text-[#272343] font-Inter font-normal text-[16px] leading-[17.6px] h-[168px] flex flex-col gap-[12px]">
                    <li><p>Help & Support</p></li>
                    <li><p>Tearms & Conditions</p></li>
                    <li><p>Privacy Policy</p></li>
                    <li><p>Help</p></li>
                </ul>
            </div>

            <div className="w-[424px] h-[142px] absolute top-[80px] left-[1196px] rounded-[8px]">
                <p className="uppercase w-[102px] h-[15px] absolute font-Inter font-medium text-[14px] leading-[15.4px] tracking-[0.06em] text-[#9A9CAA]">Newsletter</p>
            
                <div className="w-[285px] h-[46px] rounded-[8px] border-[1px] border-[#E1E3E5] absolute top-[29px]"></div>
                <div className="w-[127px] h-[46px] absolute top-[29px] left-[330px] rounded-[8px] px-[24px] py-[14px] bg-[#029FAE]">
                    <p className="text-white font-Inter text-[16px] leading-[17.6px] text-center">Subscribe</p>
                </div>

                <p className="h-[46px] absolute top-[90px] text-[#272343] font-normal text-[15px] text-opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
            
            <div className="w-[1920px] h-[75px] absolute top-[343px] justify-between py-[24px] px-[300px] bg-white">
                <p className="w-[341px] h-[21px] font-normal text-[14px] leading-[21px] text-[#9A9CAA]">@ 2021 - Blogy - Designed & Develop by <span className="text-[#272343]">Zakirsoft</span></p>
            
                <Image src={paylogo} alt="paylogo" className="w-[227px] h-[27px] absolute top-[24px] left-[1393px]"></Image>
            </div>
        </div>
    </div>
    )
}

export default Footer