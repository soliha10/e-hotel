import nextIcon from "../../assets/images/detail-arrow.svg";
import location from "../../assets/images/location.svg";
import DetailForm from "./Detail-form";
import neptun from "../../assets/images/neptun-d.png";
import evening from "../../assets/images/evening-d.png";
import scene from "../../assets/images/scene-d.png";
import palm from "../../assets/images/palm-d.png";
import save from "../../assets/images/save.svg"
import send from "../../assets/images/send.svg"
import { useState } from "react";
import DetailShareModal from "./DetailShareModal";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../styles.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const images = [neptun, evening, scene, palm]
const imagesCarousel = [neptun, evening, scene, neptun]

const DetailHero = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
                <span className="flex  min-[380px]:text-[10px] lg:text-base  items-center mb-6 gap-3">
                  <img src={location} alt="" />
                  8 ул. Лянгар, Ташкент
                </span>
              </div>

              <div className="flex text-[#2F3138] gap-6 ">
                <button className="flex gap-1 md:gap-3 min-[380px]:text-[10px] md:text-base "  >
                  <img src={save} alt="" className="min-[380px]:w-4 min-[380px]:h-4 md:w-4 md:h-5 " />Сохранить</button>
                <button onClick={() => setIsOpen(true)} className="flex gap-1 md:gap-[10px] min-[380px]:text-[10px] md:text-base ">
                  <img src={send} alt="" className="min-[380px]:w-4 min-[380px]:h-4 md:w-4 md:h-5 " />
                  Поделиться</button>
              </div>
            </div>

            <div className="flex justify-between  items-start min-[380px]:flex-col md:flex-row mb-6 ">
              <div className="flex min-[380px]:gap-2 md:gap-6  ">
                <img src={images[0]} alt="" className="rounded-2xl w-60 sm:w-72 lg:w-[587px] lg:h-[498px] cursor-pointer "
                  onClick={() => { setIsCarouselOpen(true); setSelectedIndex(0) }}
                />
                <div className="flex flex-col min-[380px]:gap-2 md:gap-6">
                  {images.slice(1).map((img, i) => (
                    <img
                      key={i + 1}
                      src={img}
                      alt=""
                      className="rounded-2xl cursor-pointer"
                      onClick={() => {
                        const isLast = images.length - 1;
                        setSelectedIndex(isLast ? 0 : images.length - 1);
                        setIsCarouselOpen(true);
                      }}
                    />
                  )
                  )}
                </div>

              </div>

              <DetailForm />
            </div>
          </div>
        </div>

        {isCarouselOpen && (
          <div className="bg-slate-500 bg-opacity-90 fixed inset-0 z-50 flex flex-col items-end gap-5  ">
            <button onClick={() => { setIsCarouselOpen(false); setThumbsSwiper(null) }} className=" text-black   text-right text-4xl me-10"
            > &times; </button>
            <div className="max-w-[1000px]  mx-auto justify-center">

              <Swiper
                initialSlide={selectedIndex}
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 flex items-end mb-10  "
              >
                {imagesCarousel.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt="pic" className="max-w-[100%] h-[400px] object-contain" />
                  </SwiperSlide>
                ))}

              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper  mx-auto flex justify-center "
              >

                {imagesCarousel.map((img, id) => (
                  <SwiperSlide key={id} className="opacity-[0.6]">
                    <img src={img} alt="pic" className="w-[180px] h-[150px] rounded-2xl" />
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>
          </div>
        )}


        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 relative w-[90%] max-w-md shadow-lg">
              <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              > &times;</button>
              <DetailShareModal />
            </div>
          </div>
        )}




      </div>
    </section>
  )
}

export default DetailHero
