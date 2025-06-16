import { FaFacebook,  FaTelegram,  } from 'react-icons/fa';
import footLogo from "../../assets/images/foot-logo.svg";
import insta from "../../assets/images/instagram.svg"
import FootItem from './FootItem';
const Footer = () => {
  const socialIcons = [<FaFacebook className='w-6 h-6 fill-[#232E40] ' />,<img src={insta} alt='instagram ' className='w-6 h-6 fill-[#232E40]' />, <FaTelegram className='w-6 h-6 fill-[#232E40]' /> ];
  const locations = ['Регионы', 'Города', 'Районы', 'Аэропорты', 'Ориентиры'];
  const hotels = ['Отели', 'Дома и апартаменты', 'Апартаменты/квартиры', 'Курортные отели', 'Хостелы', 'Гостевые дома'];
  const generalInfo = ['Уникальное жилье', 'Отзывы', 'Сообщество путешественников', 'Сезонные спецпредложения', 'Поиск автомобилей', 'Управлять бронированиями'];

  return (
    <footer>
      <section>
        <div className=" w-full max-w-[1240px] mx-auto px-5">
          <div className='py-[30px] md:py-[60px]'>
            <a href="/" className='mb-4 inline-block'>
              <img src={footLogo} alt="Pic" />
            </a>
            <div className='flex items-start  '>
              <div className='w-full  md:max-w-[282px] md:me-12 lg:me-[137px]'>
                <p className='md:text-sm text-xs text-[#777E90]  mb-12'>Лучшая платформа для бронирования отелей в Узбекистане</p>
                <ul className='flex gap-x-6  '>
                  {socialIcons.map((item) => (
                    <li >
                      <a className='w-6 h-6 inline-block' href="/">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex gap-10 lg:gap-x-[145px]'>
                <ul className='flex flex-col gap-y-1 md:gap-y-3' >
                  {locations.map((item) => (
                    <FootItem item={item} />
                  ))}
                </ul>
                <ul className='flex flex-col gap-y-1 lg:gap-y-3'>
                  {hotels.map((item) => (
                    <FootItem item={item} />
                  ))}
                </ul>
                <ul className='flex flex-col gap-y-1 lg:gap-y-3' >
                  {generalInfo.map((item) => (
                    <FootItem item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='border border-[#b7bfd533] py-[30px] md:py-[60px]'>
        <div className="w-full max-w-[1240px] mx-auto px-5">
          <span className='text-sm text-[#777E90] block text-center'>E-Mehmon © 2023. Все права защищены. </span>
        </div>
      </section>
    </footer>
  )
}

export default Footer
