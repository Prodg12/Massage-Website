import StyledHeroComponent from './StyledHeroComponent';
import OrderImg from "../assets/img/order-img.png";

const Order = () => {
  return (
    <StyledHeroComponent className='flex items-center justify-between pt-24 lg:flex-col-reverse lg:items-start'>
        <img src={OrderImg} alt="order-img" className='w-[40%] lg:w-[60%] lg:mt-8 xs:w-full' />

        <div className='w-[40%] lg:w-full'>
          <h2 className='text-4xl font-extrabold w-[80%] uppercase md:text-2xl md:w-full xs:text-xl'>What's included in your order</h2>

          <div>
            <ul className='list-disc marker:text-gray text-gray text-sm mt-5 leading-relaxed sm:text-xs xs:leading-loose'>
              <li>Booster Professional Series Massager</li>
              <li>6 different massage heads (to suit all muscle groups and intensity preference)</li>
              <li>Portable carry case with internal foam mould for safe and convenient storage</li>
              <li>How-to-use instruction manual</li>
              <li>USB-C charger cord</li>
              <li>18 Months Inclued Warranty</li>
              <li>Free Express Delivery</li>
            </ul>
          </div>
        </div>
    </StyledHeroComponent>
  )
}

export default Order
