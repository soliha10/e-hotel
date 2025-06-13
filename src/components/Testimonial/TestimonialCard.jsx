import stars from "../../assets/images/stars.svg";
import quote from "../../assets/images/quote.svg";
const TestimonialCard = ({ feedback, userPic, userName }) => {
  return (
    <div className="flex  flex-col text-left w-[486px] h-[340px] py-8 px-6 bg-[#232E40] rounded-3xl gap-y-6 text-white ">
      <img className="w-5 h-[19px] " src={quote} alt="" width={20} />
      <p className="tracking-[0.34px]">{feedback}</p>

      <div className=" flex gap-x-6 items-center mt-auto  border-t border-[#777e9033] pt-6 ">
        <img src={userPic} alt="user" />
        <div >
          <span className="mb-[6px] inline-block ">{userName}</span>
          <img src={stars} alt="user" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
