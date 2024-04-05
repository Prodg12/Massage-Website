import PressureGunImg from "../assets/img/pressure-img.png";
import StyledHeroComponent from "./StyledHeroComponent";
import AttachmentIcon from "../assets/icons/attachment-icon.png";
import BaterryIcon from "../assets/icons/battery-icon.png";
import IntelligenceIcon from "../assets/icons/intelligence-icon.png";
import KilogramIcon from "../assets/icons/kilogram-icon.png";
import NoiseIcon from "../assets/icons/noise-icon.png";
import PowerIcon from "../assets/icons/power-icon.png";
import VibrationIcon from "../assets/icons/vibration-icon.png";
import YearIcon from "../assets/icons/year-icon.png";
import GuarantyMoneyIcon from "../assets/icons/guaranty-money-icon.png";
import LimitedEditionImg from "../assets/img/Limited-edition.png";

const MassageGun = () => {
  return (
    <StyledHeroComponent>
      <h1 className="text-center text-8xl font-black tracking-widest text-darkGray lg:text-6xl sm:text-[2.5rem] xs:text-[2rem]">MASSAGE GUN</h1>

      <div className="flex justify-between mt-10 lg:flex-col-reverse">
        <div className="relative w-[35%] h-[60vh] lg:w-1/2 md:h-[50vh] md:mt-7 sm:w-[70%] xs:w-[80%]">
          <img src={PressureGunImg} alt="pressure-gun-img" className="" />

          <img src={LimitedEditionImg} alt="limited-img" className="absolute right-0 bottom-0 w-20 " />
        </div>

        <div className="w-[55%] lg:w-full">
          <h2 className="text-4xl font-extrabold tracking-wider w-[70%] capitalize mb-4 lg:text-2xl lg:w-[100%] sm:text-xl xs:text-lg">What makes this gun different from the rest</h2>

          <div className="flex justify-between">
            <div className="w-1/2">
              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img xs:gap-1 src={IntelligenceIcon} alt="intelligence-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs tracking-wide leading-relaxed w-[65%] md:w-[80%]">
                  Integrated with Artificial Intelligence | Smart Hit Control
                </p>
              </span>

              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img src={NoiseIcon} alt="noise-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">Triple Noise Reduction Technology</p>
              </span>

              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img src={VibrationIcon} alt="vibration-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">Vibration filtering for smoother operating</p>
              </span>

              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img src={BaterryIcon} alt="battery-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">12V Lithium battery with 2 hour fast charging</p>
              </span>

              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img xs:gap-1 src={GuarantyMoneyIcon} alt="guaranty-money-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">30 Day Money Back Guarantee </p>
              </span>
            </div>

            <div className="w-1/2">
              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img src={AttachmentIcon} alt="attachment-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">6 different head attachments to suit all muscle groups </p>
              </span>

              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img src={PowerIcon} alt="power-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">Remaining Power Display </p>
              </span>

              <span className="flex items-center my-3 gap-2 xs:gap-1">
                <img src={YearIcon} alt="year-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">5 Year Motor Warranty </p>
              </span>

              <span className="flex items-start my-3 gap-2 xs:gap-1">
                <img src={KilogramIcon} alt="kilogram-icon-img" className="w-9 md:w-7 xs:w-6" />
                <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">12 KG pressure bearing with brushless motor (Which means it's intensely powerful, while also having an extremely quiet & frictionless operating system) </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </StyledHeroComponent>
  );
};

export default MassageGun;
