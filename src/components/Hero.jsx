import StyledHeroComponent from './StyledHeroComponent';
import MassageGunImg from "../assets/img/massage-gun-img.png";
import ZipImg from "../assets/img/zip-img.png";
import AfterPayImg from "../assets/img/afterpay-img.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <StyledHeroComponent className='flex items-center justify-between pt-6 md:flex-col md:items-start'>
      <div className='md:w-full'>
        <h1 className='text-7xl font-extrabold uppercase lg:text-5xl lg:w-[70%] md:w-full sm:text-4xl xs:text-3xl'>Trusted by Athletes</h1>
        <p className="text-gray text-sm w-[60%] leading-relaxed tracking-wider my-4 md:w-[80%] sm:w-full">Integrated with A.I to ensure your massage pressure is never compromised</p>

        <div className='flex items-center sm:gap-4 xs:gap-1'>
          <span className='mx-3 lg:mx-1'>
            <h3 className='text-xl font-semibold tracking-widest lg:text-lg sm:text-base xs:text-sm'>18 <span className='text-xs tracking-normal'>Months</span></h3>
            <p className='text-gray text-xs xs:text-[0.6rem]'>Included Warranty</p>
          </span>

          <span className='mx-3 lg:mx-1'>
            <h3 className='text-xl font-semibold tracking-widest lg:text-lg sm:text-base xs:text-sm'>1000+</h3>
            <p className='text-gray text-xs xs:text-[0.6rem]'>Loyal customers</p>
          </span>

          <span className='mx-3 lg:mx-1'>
            <span className='text-[gold] text-xl lg:text-lg sm:text-base xs:text-sm'>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </span>

            <p className='text-xs text-gray xs:text-[0.6rem]'>Stars</p>
          </span>
        </div>

        <button className="bg-lightBlue px-4 py-3 text-black text-sm font-semibold my-4 lg:px-2 lg:py-2 sm:py-1 sm:text-xs">BUY NOW</button>

        <p className='text-sm'>Buy now, pay later option available</p>

        <h4 className="text-sm text-lighterBlue my-2">Free Worldwide Express Delivery</h4>

        <div className='flex items-center gap-4 mt-7'>
          <img src={AfterPayImg} alt="afterpayimg" className='w-24 sm:w-20' />
          <img src={ZipImg} alt="zipimg" className='w-16 sm:w-12'/>
        </div>
      </div>

      <img src={MassageGunImg} alt="massagegunimg" className='w-[30%] md:w-[45%] md:mt-14 sm:w-[70%]' />
    </StyledHeroComponent>
  )
}

export default Hero