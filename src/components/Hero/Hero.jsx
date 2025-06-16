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
      <div className="w-full max-w-[1240px] mx-auto px-5">
        <div className=" ">
          <div className="flex flex-col md:flex-row pt-8 md:pt-0 items-center md:items-start md:justify-between mb-[50px] ">
            <div className="md:w-[720px] mb-4 md:mb-0 w-[350px] text-center md:text-left lg:me-[116px] ">
              <h1 className="md:text-[46px] text-3xl font-bold md:leading-[45px] lg:leading-[68px] md:tracking-[0.98px] text-white  ">Собирай чемодан, остальное мы возьмем на себя</h1>
            </div >
            <div className="md:w-[384px] w-[380px] ">
              <p className="text-[#B7BFD5] text-center md:text-left lg:tracking-[0.32px] lg:leading-[25px] mb-4">Добро пожаловать на наш уникальный портал, который предоставляет полный спектр услуг для туристов в Узбекистане! </p>
              <div className="flex items-center justify-center md:justify-start">
                <button className="bg-[#3276FF] text-xs md:text-sm  md:w-[129px] p-4 text-center rounded-2xl text-white font-medium me-[50px]">Все отели</button>
                <button className="inline-flex gap-[10px] items-center text-xs md:text-sm  text-white font-medium  ">
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
      <div className="w-full max-w-[1240px] mx-auto  relative">
        <FormHero />
      </div>


    </section>
  )
}

export default Hero
