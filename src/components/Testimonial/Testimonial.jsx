import TestimonialCard from "./TestimonialCard";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";
import arrow from "../../assets/images/arrow-white.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';
import "../styles.css";
import { useRef, useState } from "react";

const Testimonial = () => {
  const swiperRef = useRef(null);

  const [activeBtn, setActiveBtn] = useState(null)

  const feedbacks = [
    {
      id: 1,
      feedback: 'Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.',
      userPic: woman,
      userName: 'Азиза Муминова'
    },
    {
      id: 2,
      feedback: 'Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.',
      userPic: man,
      userName: 'Максим Персидский'
    },
    {
      id: 3,
      feedback: 'Мой опыт с этим сайтом был фантастическим! Я с легкостью нашла экскурсии и проживание в Самарканде. Шаги от регистрации до оплаты были интуитивными, и мое путешествие стало незабываемым благодаря вашему сайту.',
      userPic: woman,
      userName: 'Азиза Муминова'
    },
    {
      id: 4,
      feedback: 'Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.',
      userPic: man,
      userName: 'Максим Персидский'
    },
  ]
  return (
    <section className="bg-[#232E40] bg-opacity-90 py-20 mx-auto">
      <div className="w-full max-w-[1240px] left-[-10px] md:mx-auto px-5">
        <div className="">
          <div className="flex items-center justify-between mb-10">
            <h2 className=" text-[#fff] text-2xl  md:text-[32px] font-bold  ">Что думают о нас туристы?</h2>
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
            breakpoints={{
          380: {
             slidesPerView: 1,
            spaceBetween: 20,
          }, 
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
          
        }}
            onMouseMove={Autoplay}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper w-full mx-auto"
          >
            {feedbacks.map(({ id, feedback, userPic, userName }, index) => (
              <SwiperSlide className="flex text-left" key={index}  >
                <TestimonialCard keys={id} feedback={feedback} userPic={userPic} userName={userName} />
              </SwiperSlide>
            ))}
          </Swiper>
    </section>
  )
}

export default Testimonial
