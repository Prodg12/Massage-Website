import FooterImg from "../assets/img/footer-img.png";
import PlayBtnImg from "../assets/img/play-btn.png";

const Footer = () => {
  return (
    <div>
      <div style={{
        background: `url(${FooterImg})`,
        backgroundSize: "cover"
      }}
        className="h-[80vh] flex flex-col items-center justify-center"
      >
        <img src={PlayBtnImg} alt="play-btn-img" className="w-40 lg:w-32 xs:w-24" />

        <button className="bg-lightBlue py-4 px-16 text-black font-bold text-lg lg:py-2 lg:px-10 xs:px-6 xs:py-1 xs:text-base xs:font-semibold">
          BUY NOW
        </button>
      </div>
      
      <div className="text-center py-6 text-sm xs:text-xs">
        ©2024 - Range of motion
      </div>
    </div>
  )
}

export default Footer