import quote from "../../assets/images/gray-quote.svg";
import stars from "../../assets/images/stars-steps.svg"
const DetailFeedback = ({feedback, userPic, userName}) => {
  return (
    <div className="flex  flex-col text-left md:w-[420px] md:h-[260px]  py-6 px-4 bg-[#fff] rounded-3xl gap-y-4 text-[#1D2635] ">
      <img className="w-4 h-4 " src={quote} alt="" width={20} />
      <p className="tracking-[0.34px] text-[10px] sm:text-xs md:text-sm   ">{feedback}</p>

      <div className=" flex gap-x-6 items-center mt-auto  border-t border-[#fafafa] pt-4 ">
        <img src={userPic} alt="user" />
        <div >
          <span className="mb-2 inline-block text-xs ">{userName}</span>
          <img src={stars} alt="user" />
        </div>
      </div>
    </div>
  )
}

export default DetailFeedback
