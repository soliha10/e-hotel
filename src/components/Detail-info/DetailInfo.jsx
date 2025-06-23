import map from "../../assets/images/map.png";
import number from "../../assets/images/number.svg";
import restaurant from "../../assets/images/restaurant.svg";
import glass from "../../assets/images/glass.svg";
import center from "../../assets/images/center.svg";
import pool from "../../assets/images/pool.svg";
import tv from "../../assets/images/tv.svg";
import bed from "../../assets/images/bed.svg";
import bag from "../../assets/images/bag.svg";
import InfoItem from "./InfoItem";
import blueArrow from "../../assets/images/blue-arrow.svg";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";
import DetailFeedback from "./DetailFeedback";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';
import "../styles.css";



const DetailInfo = () => {

  const comfort = [
    {
      id: 1,
      pic: number,
      name: "Роскошные номера",

    },
    {
      id: 2,
      pic: restaurant,
      name: "Изысканные рестораны",

    },
    {
      id: 3,
      pic: glass,
      name: "Элегантные бары",

    },
    {
      id: 4,
      pic: center,
      name: 'Спа-центр',

    },
    {
      id: 5,
      pic: pool,
      name: "Превосходные бассейны",

    },
    {
      id: 6,
      pic: tv,
      name: "Техника высшего класса",

    },
    {
      id: 7,
      pic: bed,
      name: "Качественная мебель",

    },
    {
      id: 8,
      pic: bag,
      name: "Обслуживание на уровне",

    },
    {
      id: 9,
      pic: glass,
      name: "Элегантные бары",

    },
    {
      id: 10,
      pic: center,
      name: 'Спа-центр',

    },
    {
      id: 11,
      pic: number,
      name: "Роскошные номера",

    },
    {
      id: 5,
      pic: pool,
      name: "Превосходные бассейны",

    },

  ];

  const feedbacks = [
    {
      id: 1,
      feedback: "Я осталась очень довольной сервисом бронирования этого сайта. Процесс регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым благодаря этому удивительному сайту.",
      userPic: woman,
      userName: "Азиза Муминова",
    },
    {
      id: 2,
      feedback: "Огромное спасибо за ваш сайт! Я нашел идеальное жилье для семейного отдыха в Ташкенте. Простые шаги, отличный выбор и удобная оплата сделали процесс бронирования легким и приятным.",
      userPic: man,
      userName: "Максим Персидский",
    }
  ]


  return (
    <section>
      <div className="w-full max-w-[1240px] mx-auto px-5">
        <div className="flex items-start flex-col flex-wrap  lg:flex-row gap-6 ">
          <div className=" w-full  lg:w-[792px]">
            <div className="border-b border-[#777E90] mb-8">
              <ul className="flex items-end gap-x-6 mb-6">

                <li><a href="/" className="text-[#232E40] text-[10px] sm:text-xs md:text-base pb-2 lg:pb-[30px] border-b border-[#3276FF] inline-block" >Описание</a></li>
                <li><a href="/" className="text-[#777E90] text-[10px] sm:text-xs md:text-base pb-2 lg:pb-[30px] border-b border-[#B7BFD5] inline-block">Наличие мест</a></li>
                <li><a href="/" className="text-[#777E90]  text-[10px] sm:text-xs md:text-base pb-2 lg:pb-[30px] border-b border-[#B7BFD5] inline-block">Что рядом?</a></li>
                <li><a href="/" className="text-[#777E90] text-[10px] sm:text-xs md:text-base pb-2 lg:pb-[30px] border-b border-[#B7BFD5] inline-block">Дополнительные услуги</a></li>
              </ul>
              <h2 className="text-[31D2635] text-base md:text-lg lg:text-2xl font-bold mb-4 tracking-[0.48px] leading-[33.6px] ">
                Описание отеля
              </h2>
              <p className="text-[#1D2635] text-[10px] sm:text-xs md:text-sm  lg:text-[15px] md:tracking-[0.3px] md:leading-[22.5px] mb-3  ">Ощутите роскошь в ее лучших проявлениях, остановившись в нашем потрясающем четырехспальном отеле в Ташкенте. Расположенный в самом сердце города, наш отель предоставляет уникальную возможность насладиться комфортом и роскошью. Стильные номера с кондиционером оборудованы прекрасной террасой, частным бассейном и захватывающими видами, предоставляя проживающим незабываемый опыт.</p>
              <p className="text-[#1D2635] text-[10px] sm:text-xs md:text-sm  lg:text-[15px] md:tracking-[0.3px] md:leading-[22.5px] mb-8  ">Этот элегантный отель идеально подходит для групп, стремящихся к выдающемуся уровню роскоши и полного расслабления. Вас ждет простор и уединение в нашем отеле в Ташкенте, обеспечивающем высший уровень сервиса <button className="underline">читать далее</button></p>
            </div>

            <div className="border-b border-[#777E90]  pb-8 mb-8">
              <h2 className="text-[31D2635] text-base md:text-lg lg:text-2xl font-bold mb-4 md:tracking-[0.48px] md:leading-[33.6px] ">Удобства отеля</h2>
              <p className="text-[#1D2635] text-[10px] sm:text-xs md:text-sm  lg:text-[15px] md:tracking-[0.3px] md:leading-[22.5px] mb-6  ">Наш отель включает в себя уютные номера и общественные зоны для комфортного отдыха, а также:</p>

              <ul className="flex lg:flex-col lg:h-[216px] flex-wrap gap-x-[40px] gap-y-6">
                {comfort.map(({ id, pic, name }) => (
                  <InfoItem key={id} pic={pic} name={name} />
                ))}
              </ul>
            </div>

            <div className="border-b border-[#777E90] md:mb-8 pb-8">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-[31D2635] text-base md:text-lg lg:text-2xl font-bold  tracking-[0.48px] leading-[33.6px] ">Отзывы посетилетей</h2>
                <button className="text-[#3B71FE] flex items-center text-[10px] sm:text-xs md:text-sm  lg:text-[15px] gap-x-[8.5px]">Все отзывы <img src={blueArrow} alt="" /></button>
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
                {feedbacks.map(({ id, feedback, userPic, userName },) => (
                  <SwiperSlide className="flex text-left" key={id}  >
                    <DetailFeedback keys={id} feedback={feedback} userPic={userPic} userName={userName} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>


          <img src={map} alt="" className="mb-4 md:mb-0 md:w-full lg:w-auto" />
        </div>
      </div>
    </section>
  )
}

export default DetailInfo
