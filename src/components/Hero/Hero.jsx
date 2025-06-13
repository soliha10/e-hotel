import HotelCard from "./HotelCard";
import neptun from "../../assets/images/neptun-h.png";
import evening from "../../assets/images/evening-h.png";
import playBtn from "../../assets/images/play-circle.svg";
import scene from "../../assets/images/scene-h.png";
import FormHero from "./FormHero";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, } from 'swiper/modules';
import "../styles.css"


const Hero = () => {
  const cardItems = [
    {
      image: neptun,
      rating: '8.9',
      name: "Hotel Neptun Tashkent Pool&Spa",
      price: 'от $120',
      location: '8 ул. Лянгар, Ташкент'
    },
    {
      image: evening,
      rating: '8.9',
      name: "Hotel Neptun Tashkent Pool&Spa",
      price: 'от $120',
      location: '8 ул. Лянгар, Ташкент'
    },
    {
      image: scene,
      rating: '8.9',
      name: "Hotel Neptun Tashkent Pool&Spa",
      price: 'от $120',
      location: '8 ул. Лянгар, Ташкент'
    },
    {
      image: neptun,
      rating: '8.9',
      name: "Hotel Neptun Tashkent Pool&Spa",
      price: 'от $120',
      location: '8 ул. Лянгар, Ташкент'
    },
    {
      image: evening,
      rating: '8.9',
      name: "Hotel Neptun Tashkent Pool&Spa",
      price: 'от $120',
      location: '8 ул. Лянгар, Ташкент'
    },
    {
      image: scene,
      rating: '8.9',
      name: "Hotel Neptun Tashkent Pool&Spa",
      price: 'от $120',
      location: '8 ул. Лянгар, Ташкент'
    },

  ];

  return (
    <section >
      <div className="w-[1240px] mx-auto px-5">
        <div className=" ">
          <div className="flex items-start justify-between mb-[50px] ">
            <div className="w-[720px] me-[116px] ">
              <h1 className="text-[46px] font-bold leading-[68px] tracking-[0.98px] text-white  ">Собирай чемодан, остальное мы возьмем на себя</h1>
            </div >
            <div className="w-[384px] ">
              <p className="text-[#B7BFD5] tracking-[0.32px] leading-[25px] mb-4">Добро пожаловать на наш уникальный портал, который предоставляет полный спектр услуг для туристов в Узбекистане! </p>
              <div className="flex items-center">
                <button className="bg-[#3276FF] w-[129px] p-4 text-center rounded-2xl text-white font-medium me-[50px]">Все отели</button>
                <button className="inline-flex gap-[10px] text-white font-medium  ">
                  <img src={playBtn} alt="btn" />
                  Посмотреть видео</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
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
        className="mySwiper w-full "
      >
        {cardItems.map(({ image, rating, name, price, location }, index) => (
          <SwiperSlide key={index} >
            <HotelCard image={image} rating={rating} name={name} price={price} location={location} />
          </SwiperSlide>
        )
        )}
      </Swiper>
      <div className="w-[1240px] mx-auto px-5 relative">
        <FormHero />
      </div>


    </section>
  )
}

export default Hero
