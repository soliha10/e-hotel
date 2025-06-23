import neptun from "../../assets/images/group-circle.png";
import date from "../../assets/images/date.svg"
import arrow from "../../assets/images/detail-form-arrow.svg"

const DetailForm = () => {
  return (
    <div className='md:w-[384px]   pb-[30px] bg-white rounded-2xl shadow-[0px 40px 32px -32px rgba(119, 126, 144, 0.10)] '>
      <div className='flex justify-between items-center px-3 pt-3 mt-3 md:mt-0 md:px-6 md:pt-[22px] pb-[18px] border-b border-[#FAFAFA] '>
        <span className='flex items-center gap-2  text-[#7D848B] text-[15px] '>
          <img src={neptun} alt="" />
          Meros Group
        </span>
        <span className="flex items-center gap-2 text-[#3B71FE] text-[15px] ">
          <span className=" bg-yellow-400  rounded-full w-[27px] h-[26px] text-xs text-[#133448] font-medium flex items-center justify-center">
            8.9
          </span>
          (245 отзывов)
        </span>
      </div>

      <div className="  px-3 pt-3 sm:px-4 md:px-6 md:pt-[18px] ">
        <strong className="text-[#2F3138] lg:text-[32px] flex gap-1 items-center mb-6 ">
          <span className="text-[#7D848B] lg:text-base font-normal ">от</span>
          $120
          <span className="text-[#7D848B] lg:text-base  font-normal ">/ночь</span>
        </strong>

        <form action="" className="flex items-center justify-between flex-wrap gap-x-1 md:gap-x-4 ">
          <div className="flex w-[160px] flex-col gap-3 mb-2 ">
            <label htmlFor="" className="text-[#777E90] text-[14px]">Заезд</label>
            <select name="" id="" className="bg-[#F8F8FA] rounded-2xl py-4 pe-4 ps-[52px] appearance-none text-[#1D2635] " style={{
              backgroundImage: `url(${date})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left 16px center",
              backgroundSize: "19px 20px",
            }} >
              <option value="">6/11/2023</option>
            </select>
          </div>
          <div className="flex w-[160px] flex-col gap-3 mb-2 ">
            <label htmlFor="" className="text-[#777E90] text-[14px]">Выезд</label>
            <select name="" id="" className="bg-[#F8F8FA] rounded-2xl py-4 pe-4 ps-[52px] appearance-none text-[#1D2635] " style={{
              backgroundImage: `url(${date})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left 16px center",
              backgroundSize: "19px 20px",
            }}>
              <option value="">7/11/2023</option>
            </select>
          </div>
          <div className="flex w-full flex-col gap-3 mb-4 leading-[25.6px] ">
            <label htmlFor="" className="text-[#777E90] text-[14px]">Количество гостей</label>
            <select name="" id="" className="bg-[#F8F8FA] rounded-2xl py-4 pe-4 ps-[52px] appearance-none text-[#1D2635] " style={{
              backgroundImage: `url(${date}), url(${arrow})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left 16px center, right 20px center",
              backgroundSize: "19px 20px, 16px 8px ",
            }}>
              <option value="">2 взрослых</option>
            </select>
          </div>
          <button className="w-full bg-[#3276FF] text-white p-4 rounded-2xl font-medium mb-[31px] ">Просмотреть наличие мест </button>
        </form>
        <span className="text-[#777E90]  text-[14px] leading-[18px] block text-center">Цены актуальны до 24 ноября, 2023 года</span>
      </div>

    </div>
  )
}

export default DetailForm
