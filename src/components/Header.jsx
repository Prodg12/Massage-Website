import Logo from "../assets/img/logo.png";
import StyledHeroComponent from "./StyledHeroComponent";

const Header = () => {
  return (
    <StyledHeroComponent className="bg-black">
      <img src={Logo} alt="logo" className="w-32 sm:w-24" />
    </StyledHeroComponent>
  )
}

export default Header