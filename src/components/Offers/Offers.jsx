import mountain from "../../assets/images/mountain.png";
import ship from "../../assets/images/ship.png";
import snow from "../../assets/images/snow.png";
import autumn from "../../assets/images/autumn.png"
import { useRef, useState } from "react";
import arrow from "../../assets/images/arrows.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';

const Offers = () => {
  const offers = [
    {
      id: 1,
      pic: mountain,
      discount: '24%',
      name: 'Горы Кунгурбука',
      price: '$240'

    },
    {
      id: 2,
      pic: ship,
      discount: '24%',
      name: 'От Пальтау до Бричмуллы',
      price: '$240'

    },
    {
      id: 3,
      pic: snow,
      discount: '24%',
      name: 'Восхождение на вершину горы Сюрената',
      price: '$240'

    },
    {
      id: 4,
      pic: autumn,
      discount: '24%',
      name: 'Зааминский горно-арчовый заповедник',
      price: '$240'

    },
    {
      id: 5,
      pic: mountain,
      discount: '24%',
      name: 'Горы Кунгурбука',
      price: '$240'

    },
    {
      id: 6,
      pic: ship,
      discount: '24%',
      name: 'От Пальтау до Бричмуллы',
      price: '$240'

    },
    {
      id: 7,
      pic: snow,
      discount: '24%',
      name: 'Восхождение на вершину горы Сюрената',
      price: '$240'

    },
    {
      id: 8,
      pic: autumn,
      discount: '24%',
      name: 'Зааминский горно-арчовый заповедник',
      price: '$240'

    },

  ];

  const swiperRef = useRef(null);

  const [activeBtn, setActiveBtn] = useState(null);
  return (
    <section className="pb-[100px]">
      <div className="w-full max-w-[1240px] mx-auto px-5">
        <div >
          <div className="flex items-center justify-between mb-10">
            <h2 className=" text-[#232E40] text-2xl md:text-[32px] font-bold  ">Сезонные предложения</h2>
            <div className="flex items-center">
              <button onClick={() => {
                swiperRef.current.swiper.slidePrev();
                setActiveBtn("prev")
              }
              } className={`w-11 h-11 inline-flex items-center justify-center me-4 
              ${activeBtn === "prev" ? "rounded-3xl  border border-[#b7bfd533]" : "border-none"}
              `} >
                <img src={arrow} alt="icon" className="w-[20px] h-[26px] " />
              </button>
              <button onClick={() => {
                swiperRef.current.swiper.slideNext();
                setActiveBtn("next")
              }} className={`w-11 h-11 inline-flex items-center justify-center rotate-180
              ${activeBtn === "next" ? "rounded-3xl  border border-[#b7bfd533]" : "border-none"}
              `} >
                <img src={arrow} alt="icon" className="w-[20px] h-[26px] " />
              </button>
            </div>
          </div>

        </div>
      </div>
          <Swiper
            ref={swiperRef}
            slidesPerView="auto"
            spaceBetween={24}
            loop={false}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onMouseMove={Autoplay}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {offers.map(({ id, pic, discount, name, price }) => (
              <SwiperSlide >
                <div key={id} className="w-[282px] flex flex-col relative gap-y-3 ">
                  <img className="rounded-3xl  " src={pic} alt="pic" />
                  <span className="absolute w-[100px] text-center bg-[#232E40] p-2 text-white font-medium text-sm rounded-3xl top-3 left-3  ">Скидка {discount}</span>
                  <strong className="text-[#232E40] text-[18px] font-semibold  tracking-[0.38px] leading-[25px] ">{name}</strong>
                  <span className="text-[#777E90] font-semibold">от {price} </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </section>
  )
}

export default Offers
