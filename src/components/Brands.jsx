import MoneyBackImg from "../assets/img/moneyback-img.png";
import AthletesImg from "../assets/img/athletes-img.png";
import ExpressDeliveryImg from "../assets/img/express-delivery-img.png";
import StyledHeroComponent from "./StyledHeroComponent";

const Brands = () => {
  return (
    <StyledHeroComponent className="flex items-center justify-center gap-16 sm:gap-12">
      <img src={MoneyBackImg} alt="moneyback-img" className="w-24 md:w-20 sm:w-14"/>
      <img src={ExpressDeliveryImg} alt="express-delivery-img" className="w-36 sm:w-28"/>
      <img src={AthletesImg} alt="athletes-img" className="w-24 md:w-20 sm:w-14"/>
    </StyledHeroComponent>
  )
}

export default Brands