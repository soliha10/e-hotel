
const PopularHotelsCard = ({ pic, rating, name, location, price, day }) => {
  return (
    <li className="w-[282px] relative">
      <img className="mb-3 rounded-[20px]" src={pic} alt="Pic" />
      <span className=" absolute top-3 left-3 border border-[#3276FF] rounded-3xl w-[83px] p-2 inline-block text-xs font-medium text-white bg-[#3276ff33] backdrop-blur-[2px] ">Популярно</span>
      <span className="absolute top-3 right-3 bg-yellow-400  rounded-full w-[31px] h-[30px] text-xs text-[#232E40] font-medium flex items-center justify-center">
        {rating}
      </span>
      <strong className="font-bold mb-1">{name}</strong>
      <p className="text-[#777E90] text-sm mb-3">{location}</p>
      <div className="flex items-center justify-between">
        <button className="w-[172px] rounded-[16px] bg-[#3276ff33] backdrop-blur-[2px] p-4 text-[#3276FF] font-medium ">Забронировать</button>
        <div>
          <span className="font-bold">{price}</span>
          <span className="text-xs">{day}</span>
        </div>
      </div>
    </li>
  )
}

export default PopularHotelsCard
