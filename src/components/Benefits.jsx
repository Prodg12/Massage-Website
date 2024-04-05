import StyledHeroComponent from "./StyledHeroComponent";
import MuscleIcon from "../assets/icons/muscle-icon.png";
import TensionIcon from "../assets/icons/tension-icon.png";
import RepairIcon from "../assets/icons/repair-icon.png";
import ActivationIcon from "../assets/icons/activation-icon.png";
import ToxicIcon from "../assets/icons/toxic-icon.png";
import RelaxationIcon from "../assets/icons/relaxation-icon.png";
import RecoveryIcon from "../assets/icons/recovery-icon.png";
import BenefitsImg from "../assets/img/benefit-img.png";

const Benefits = () => {
  return (
    <StyledHeroComponent className="flex justify-between pt-28 lg:flex-col">
      <div className="w-1/2 lg:w-full">
        <h2 className="text-5xl font-extrabold tracking-wide mb-8 lg:text-3xl sm:mb-2 xs:text-2xl xs:font-bold">THE BENEFITS</h2>
        <div className="flex justify-between">
          <div className="w-1/2">
            <span className="flex items-center my-3 gap-2">
              <img src={MuscleIcon} alt="muscle-icon-img" className="w-9 md:w-7" />
              <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">
                Prevents delayed onset muscle soreness
              </p>
            </span>

            <span className="flex items-center my-3 gap-2">
              <img src={RecoveryIcon} alt="recovery-icon-img" className="w-9 md:w-7" />
              <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">
                Ideal for warm-up, injury prevention, and recovery
              </p>
            </span>

            <span className="flex items-center my-3 gap-2">
              <img src={ToxicIcon} alt="toxic-icon-img" className="w-9 md:w-7" />
              <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">
                Removes toxic bi-products post training
              </p>
            </span>

            <span className="flex items-center my-3 gap-2">
              <img
                src={RelaxationIcon}
                alt="relaxation-icon-img"
                className="w-9 md:w-7"
              />
              <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">
                Perfect for relaxation{" "}
              </p>
            </span>
          </div>

          <div className="w-1/2">
            <span className="flex items-center my-3 gap-2">
              <img src={TensionIcon} alt="tension-icon-img" className="w-9 md:w-7" />
              <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">
                Release tension in tight muscles{" "}
              </p>
            </span>

            <span className="flex items-center my-3 gap-2">
              <img
                src={ActivationIcon}
                alt="activation-icon-img"
                className="w-9 md:w-7"
              />
              <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">
                Increases blood flow and activates both muscular and nervous
                system{" "}
              </p>
            </span>

            <span className="flex items-center my-3 gap-2">
              <img src={RepairIcon} alt="repair-icon-img" className="w-9 md:w-7" />
              <p className="text-xs w-[65%] tracking-wide leading-relaxed md:w-[80%]">
                Removes scar tissue and encourages natural muscle repair{" "}
              </p>
            </span>
          </div>
        </div>
      </div>

      <img src={BenefitsImg} alt="benefits-img" className="w-[40%] lg:w-[60%] lg:mt-9 md:w-[70%] sm:w-[80%] xs:w-full" />
    </StyledHeroComponent>
  );
};

export default Benefits;
