import neptun from "../../assets/images/neptun.png";
import evening from "../../assets/images/evening.png";
import scene from "../../assets/images/scene.png";
import palm from "../../assets/images/palm.png"
import DetailHotelsCard from "./DetailHotesCard";
const DetailHotels = () => {

  const popularHotels = [
    {
      id: 1,
      pic: neptun,
      rating: '8.9',
      name: 'Hotel Neptun Tashkent Pool&Spa',
      location: '8 ул. Лянгар, Ташкент',
      price: 'от $120',
      day: '/ночь'
    },
    {
      id: 2,
      pic: evening,
      rating: '8.9',
      name: 'Hotel Neptun Tashkent Pool&Spa',
      location: '8 ул. Лянгар, Ташкент',
      price: 'от $120',
      day: '/ночь'
    },
    {
      id: 3,
      pic: scene,
      rating: '8.9',
      name: 'Hotel Neptun Tashkent Pool&Spa',
      location: '8 ул. Лянгар, Ташкент',
      price: 'от $120',
      day: '/ночь'
    },
    {
      id: 4,
      pic: palm,
      rating: '8.9',
      name: 'Hotel Neptun Tashkent Pool&Spa',
      location: '8 ул. Лянгар, Ташкент',
      price: 'от $120',
      day: '/ночь'
    },
   

  ];

  return (
    <section>
      <div className=" w-full max-w-[1240px] mx-auto px-5">
        <div className="pb-[100px] ">
          <h2 className=" text-[#232E40] text-2xl md:text-[32px] font-bold mb-4 ">Похожие отели</h2>
          <ul className="flex flex-wrap  justify-center gap-x-6 gap-y-8">
            {popularHotels.map(({ id, pic, rating, name, location, price, day }) => (
              <DetailHotelsCard key={id} pic={pic} rating={rating} name={name} location={location} price={price} day={day} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DetailHotels
