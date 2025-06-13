import { useState } from 'react';

const HotelCard = ({ image, rating, name, price, location }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[486px] rounded-lg overflow-hidden    text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} className="w-[486px] h-[310px] rounded-3xl  " />
      <span className="absolute top-6 right-6 bg-yellow-400  rounded-full w-[31px] h-[30px] text-xs text-[#232E40] font-medium flex items-center justify-center">
        {rating}
      </span>
      {isHovered && (
        <div className="absolute h-[78px] mt-auto  rounded-b-3xl inset-0 bg-[#1C253480]  flex items-start justify-between py-4 px-6  ">
          <div >
            <h3 className="text-base font-bold">{name}</h3>
            <p className="text-sm text-[#B7BFD5] ">{location}</p>
          </div>
          <p className="text-lg font-bold">{price}</p>
        </div>
      )}
    </div>
  );
};

export default HotelCard;