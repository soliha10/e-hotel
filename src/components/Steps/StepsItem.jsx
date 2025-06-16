
const StepsItem = ({stepNum, name, text}) => {
  return (
    <li className="flex flex-col justify-center  items-center md:items-start md:justify-start w-[486px] " >
      <span className="bg-[#3276ff33] ms-auto me-auto md:ms-0 w-[43px] text-center text-[#3276FF] text-[18px] font-medium p-[6px] rounded-xl mb-4 ">{stepNum}</span>
      <strong className=" text-[#232E40] text-[18px] font-medium mb-2 ">{name}</strong>
      <p className="text-[#777E90] md:text-left"> {text}</p>
    </li>
  )
}

export default StepsItem
