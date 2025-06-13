import stars from "../../assets/images/stars-steps.svg";

const StepsUser = ({ classname, id, userName, userPic }) => {
  return (
    <>
        <div key={id} className={`${classname}  w-[208px] p-[18px] flex gap-4 items-start bg-white shadow-[0px 40px 16px -32px rgba(119, 126, 144, 0.05)] rounded-2xl `} >
          <img src={userPic} alt="user" className="w-11 h-11" />
          <div className="flex flex-col items-start">
            <span className="text-xs mb-2 inline-block italic ">{userName}</span>
            <img src={stars} alt="stars" />
          </div>
        </div>  
    </>
  )
}

export default StepsUser
