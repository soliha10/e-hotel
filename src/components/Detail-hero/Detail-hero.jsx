import nextIcon from "../../assets/images/detail-arrow.svg";
import location from "../../assets/images/location.svg";
import DetailForm from "./Detail-form";
import neptun from "../../assets/images/neptun-d.png";
import evening from "../../assets/images/evening-d.png";
import scene from "../../assets/images/scene-d.png";
import palm from "../../assets/images/palm-d.png";
import save from "../../assets/images/save.svg"
import send from "../../assets/images/send.svg"



const DetailHero = () => {
  return (
    <section>
      <div className="w-full max-w-[1240px] mx-auto px-5">
        <div className="pt-[30px]   ">
          <ul className="flex items-center mb-[30px]">
            <li className=" me-3 md:me-[18px]"><a href="/" className=" min-[380px]:text-[10px] md:text-[15px] font-medium  ">Главная</a></li>
            <li className="flex items-center gap-2 md:gap-[18px] me-3 md:me-[18px]">
              <img src={nextIcon} alt="" />
              <a href="/" className=" min-[380px]:text-[10px] md:text-[15px] font-medium  " >Отели Ташкента</a></li>
            <li className="flex items-center gap-[18px]">
              <img src={nextIcon} alt="" />
              <a href="/" className=" min-[380px]:text-[10px] md:text-[15px] font-medium text-[#777E90] "  >Hotel Neptun Tashkent Pool&Spa</a></li>
          </ul>

          <div className=" ">
            <div className="flex items-start justify-between">
              <div>

                <h1 className=" min-[380px]:text-base md:text-2xl lg:text-[32px] text-[#1D2635]  font-bold tracking-[0.64px] leading-[45px] mb-4">Hotel Neptun Tashkent Pool&Spa</h1>
                <span className="flex  min-[380px]:text-[10px]  items-center mb-6 gap-3">
                  <img src={location} alt="" />
                  8 ул. Лянгар, Ташкент
                </span>
              </div>

              <div className="flex text-[#2F3138] gap-6 ">
                <button className="flex gap-1 md:gap-3 min-[380px]:text-[10px] "  >
                  <img src={save} alt="" className="min-[380px]:w-4 min-[380px]:h-4" />Сохранить</button>
                <button className="flex gap-1 md:gap-[10px] min-[380px]:text-[10px] ">
                  <img src={send} alt="" className="min-[380px]:w-4 min-[380px]:h-4" />
                  Поделиться</button>
              </div>
            </div>

            <div className="flex justify-between items-start min-[380px]:flex-col md:flex-row mb-6 ">
              <div className="flex min-[380px]:gap-2 md:gap-6  ">
                <img src={neptun} alt="" className="rounded-2xl w-60 sm:w-72 lg:w-[587px] lg:h-[498px]  " />
                <div className="flex flex-col min-[380px]:gap-2 md:gap-6">
                  <img src={evening} alt="" className="rounded-2xl" />
                  <img src={scene} alt="" className="rounded-2xl" />
                  <img src={palm} alt="" className="rounded-2xl" />
                </div>
              </div>

              <DetailForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailHero
