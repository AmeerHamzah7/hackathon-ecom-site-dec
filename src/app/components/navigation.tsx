import Image from "next/image";
import check from "../../../public/check.png"
import dropdown from "../../../public/dropdown.png"
import exclamation from "../../../public/exclamation.svg"
import logoicon from "../../../public/logoicon.png"
import cart from "../../../public/cart.png"
import Link from "next/link";

const Navigation = () => {
    return(
        <div className="w-[1920px] h-[203px]">
            <section className="h-[45px] flex justify-between pt-[14px] pr-[300px] pb-[14px] pl-[300px] bg-[#272343]">
                <div className="w-[255px] h-[16px] flex gap-[8px] opacity-70 items-center justify-center">
                    <Image src={check} alt="check" className="w-[16px]"></Image>
                    <p className="w-[231px] h-[14px] font-Inter text-[#FFFFFF] text-[13px]">Free shipping on all orders over $50</p>
                </div>

                <div className="w-[202px] h-[17px] flex gap-[24px] opacity-70 text-white relative items-center justify-center">
                    <div className="w-[37px] h-[17px] flex gap-[6px]">
                        <p className="w-[24px] h-[17px] font-Inter font-normal text-[13px] leading-[16.9px] items-center">Eng</p>
                        <div className="w-[7px] h-[3.5px]">
                            <Image src={dropdown} alt="dd" className="w-[7px] h-[3.5px] absolute top-[6.75px] left-[30px]"></Image>
                        </div>
                    </div>

                    <p className="w-[30px] h-[17px] font-Inter font-normal text-[13px] leading-[16.9px] "><Link href="./faq">Faqs</Link></p>

                    <div className="w-[87px] h-[17px] flex gap-[6px] items-center justify-center">
                        <Image src={exclamation} alt="ex"></Image>
                        <p className="w-[65px] font-Inter font-normal text-[13px] ">Need Help</p>
                    </div>
                </div>
            </section>

            <section className="w-[1920px] h-[84px] flex justify-between py-[20px] px-[300px] bg-[#F0F2F3]">
                    <div className="flex w-[166px] h-[40px] gap-[8px] items-center justify-center">
                        <Image src={logoicon} alt="logo" className="w-[40px] h-[40px]"></Image>
                        <p className="w-[118px] h-[31px] font-Inter font-medium text-[26px] leading-[31.2px] text-[#272343]">Comforty</p>
                    </div>

                    <div className="w-[120px] h-[44px] flex gap-[12px] items-center relative justify-center">
                        <div className="py-[11px] px-[16px] flex gap-[12px] bg-white items-center justify-center">
                            <div className="w-[56px] h-[22px] flex gap-[8px] items-center">
                                <Image src={cart} alt="cart" className="w-[22px] h-[22px]"></Image>
                                <p className="w-[26px] h-[13px] font-Inter font-medium text-[12px] leading-[13.2px] items-center justify-center"><Link href="/cart">Cart</Link></p>
                            </div>

                            <div className="w-[20px] h-[20px] bg-[#007580] rounded-[50%] relative">
                                <p className="font-medium text-[10px] items-center pt-[2.5px] text-white text-center">2</p>
                             </div>
                        </div>
                    </div>
            </section>

            <section className="w-[1920px] h-[74px] py-[14px] px-[300px] bg-white flex justify-between items-center">
                <div className="flex w-[339px] h-[15px]  text-[#007580]">
                    <ul className="flex gap-[32px]">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'#'}>Shop</Link></li>
                        <li><Link href="/products">Product</Link></li>
                        <li><Link href={'#'}>Pages</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                    </ul>
                </div>

                <div className="w-[168px] h-[15px] flex gap-[8px]">
                    <p className="w-[57px] font-Inter font-normal text-[14px] leading-[15.4px] text-[#636270]">Contact:</p>
                    <p className="w-[103px] font-Inter font-medium text-[14px] leading-[15.4px] text-[#272343]">(808) 555-0111</p>
                </div>
            </section>
        </div>
    )
}

export default Navigation;