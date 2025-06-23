import React from 'react'
import { FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'

const DetailShareModal = () => {
  return (
    <div className='text-center'>
      <h2 className="text-[31D2635] text-base md:text-lg lg:text-2xl font-bold mb-4 tracking-[0.48px] leading-[33.6px] ">
        Поделитесь с друзьями
      </h2>
      <div className="flex items-center justify-center gap-x-4">
        <button className=" text-[10px] sm:text-xs md:text-sm lg:text-[15px] rounded">
          <FaTelegram className=' w-5 h-5 ' />
        </button>
        <button className=" text-[10px] sm:text-xs md:text-sm lg:text-[15px]  rounded">
          <FaTwitter className=' w-5 h-5 '/>
        </button>
        <button className="text-[10px] sm:text-xs md:text-sm lg:text-[15px]  rounded">
          <FaInstagram className=' w-5 h-5 ' />
          
        </button>
      </div>
    </div>
  )
}

export default DetailShareModal
