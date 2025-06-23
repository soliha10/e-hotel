
const InfoItem = ({ pic, name }) => {
  return (
    <li className='flex w-[150px] lg:w-[245px]  items-center text-[#232E40] text-[10px] md:text-[14px] gap-x-4 leading-[22px] tracking-[0.3px] '>
      <img src={pic} alt="" />
      {name}
    </li>
  )
}

export default InfoItem
