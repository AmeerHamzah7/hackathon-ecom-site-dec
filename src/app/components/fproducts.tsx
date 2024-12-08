import React from 'react';
import Image from 'next/image';
import chair from "../../../public/chair.png"
import pcart from "../../../public/pcart.png"
import pinkchair from "../../../public/pinkchair.png"
import orangechair from "../../../public/orangechair.png"
import whitechair from "../../../public/whitechair.png"
import blackcart from "../../../public/blackcart.png"

const FProducts = () => {
    return(
        <div>

                <div className='w-[312px] h-[377px] absolute top-[84px] left-[300px]'>
                    <div className='w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] flex gap-[10px] bg-[#01AD5A]'>
                        <p className='w-[29px] h-[14px] text-white font-medium font-Inter text-[13px] leading-[14.3px]'>New</p>
                    </div>

                    <Image src={chair} alt='cha'></Image>

                    <div className='w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]'>
                        <p className='w-[256px] h-[21px] font-Inter text-[16px] font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
                    
                        <div className='w-[35px] h-[20px] flex gap-[4px]'>
                            <p className='font-Inter text-[18px] leading-[19.8px] text-[#272343]'>$20</p>
                        </div>
                    </div>
                    
                    <div className=' bg-[#029FAE] w-[44px] h-[44px] absolute top-[329.5px] left-[268px] rounded-[8px]'></div>

                    <div className='w-[44px] h-[44px] absolute top-[339px] left-[277px]'>
                        <div className='w-[24px] h-[24px]'>
                            <Image src={pcart} alt='p' className='w-[18.5px] h-[18.04px] absolute top-[3.25px] left-[2.75px]'></Image>
                        </div>
                    </div>
                </div>
        

                <div className='w-[312px] h-[377px] absolute top-[84px] left-[636px]'>
                    <div className='w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] py-[6px] px-[10px] flex gap-[10px] bg-[#01AD5A]'>
                        <p className='w-[29px] h-[14px] text-white font-medium font-Inter text-[13px] leading-[14.3px]'>New</p>
                    </div>

                    <Image src={pinkchair} alt='cha'></Image>

                    <div className='w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]'>
                        <p className='w-[256px] h-[21px] font-Inter text-[16px] font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
                    
                        <div className='w-[35px] h-[20px] flex gap-[4px]'>
                            <p className='font-Inter text-[18px] leading-[19.8px] text-[#272343]'>$20</p>
                            <p className='line-through text-[#9A9CAA] text-[14px] font-normal font-Inter'>$30</p>
                        </div>
                    </div>
                    
                    <div className=' bg-[#F0F2F3] w-[44px] h-[44px] absolute top-[329.5px] left-[268px] rounded-[8px]'></div>

                    <div className='w-[44px] h-[44px] absolute top-[339px] left-[277px]'>
                        <div className='w-[24px] h-[24px]'>
                            <Image src={blackcart} alt='p' className='w-[18.5px] h-[18.04px] absolute top-[3.25px] left-[2.75px]'></Image>
                        </div>
                    </div>
                </div>



                <div className='w-[312px] h-[377px] absolute top-[84px] left-[972px]'>

                    <Image src={orangechair} alt='cha'></Image>

                    <div className='w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]'>
                        <p className='w-[256px] h-[21px] font-Inter text-[16px] font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
                    
                        <div className='w-[35px] h-[20px] flex gap-[4px]'>
                            <p className='font-Inter text-[18px] leading-[19.8px] text-[#272343]'>$20</p>
                        </div>
                    </div>
                    
                    <div className=' bg-[#F0F2F3] w-[44px] h-[44px] absolute top-[329.5px] left-[268px] rounded-[8px]'></div>

                    <div className='w-[44px] h-[44px] absolute top-[339px] left-[277px]'>
                        <div className='w-[24px] h-[24px]'>
                            <Image src={blackcart} alt='p' className='w-[18.5px] h-[18.04px] absolute top-[3.25px] left-[2.75px]'></Image>
                        </div>
                    </div>
                </div>


                <div className='w-[312px] h-[377px] absolute top-[84px] left-[1308px]'>

                    <Image src={whitechair} alt='cha'></Image>

                    <div className='w-[256px] h-[51px] absolute top-[326px] flex flex-col gap-[10px]'>
                        <p className='w-[256px] h-[21px] font-Inter text-[16px] font-normal leading-[20.8px] text-[#007580]'>Library Stool Chair</p>
                    
                        <div className='w-[35px] h-[20px] flex gap-[4px]'>
                            <p className='font-Inter text-[18px] leading-[19.8px] text-[#272343]'>$20</p>
                        </div>
                    </div>
                    
                    <div className=' bg-[#F0F2F3] w-[44px] h-[44px] absolute top-[329.5px] left-[268px] rounded-[8px]'></div>

                    <div className='w-[44px] h-[44px] absolute top-[339px] left-[277px]'>
                        <div className='w-[24px] h-[24px]'>
                            <Image src={blackcart} alt='p' className='w-[18.5px] h-[18.04px] absolute top-[3.25px] left-[2.75px]'></Image>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default FProducts;
