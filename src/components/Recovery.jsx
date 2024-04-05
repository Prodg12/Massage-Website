import StyledHeroComponent from './StyledHeroComponent';
import RectangleImg from "../assets/img/Rectangle 81.png";
import RecoveryImg from "../assets/img/recovery-img.png";

const Recovery = () => {
  return (
    <StyledHeroComponent className='bg-darkGray relative h-[60vh] flex items-center justify-between xs:h-[50vh]'>
      <div className='z-50 uppercase'>
        <h1 className='text-[5rem] font-black mb-0 leading-tight lg:text-[4rem] md:text-[3.5rem] xs:text-[3rem]'>Recovery</h1>
        <h1 className='text-[5rem] font-black mb-0 leading-tight lg:text-[4rem] md:text-[3.5rem] xs:text-[3rem]'>Recovery</h1>
        <h1 className='text-[5rem] font-black mb-0 leading-tight lg:text-[4rem] md:text-[3.5rem] xs:text-[3rem]'>Recovery</h1>
      </div>

      <img src={RecoveryImg} alt="recovery-img" className='w-[48%] absolute right-0 lg:top-0 lg:h-[60vh] xs:h-[50vh]' />

      <img src={RectangleImg} alt="rectangle-img" className='w-[30%] h-[60vh] absolute top-0 z-0 xs:h-[50vh]' />

    </StyledHeroComponent>
  )
}

export default Recovery