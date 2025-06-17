
import location from "../../assets/images/location.svg";
import date from "../../assets/images/date.svg";
import users from "../../assets/images/guest.svg";
import search from "../../assets/images/search-icon.svg";

const FormHero = () => {
  return (
    <div className="absolute bg-white w-[95%] lg:w-full left-auto  p-8 md:p-12 rounded-[40px] shadow-lg top-11   ">
      <div>
        <ul className="flex min-[380px]:gap-2 lg:gap-6 text-[#777E90] border-b pb-[30px] mb-12 ">
          <li className="hover:text-[#232E40]  " ><a href="/"  >Отели</a></li>
          <li className="hover:text-[#232E40]  "><a href="/">Туры</a></li>
          <li className="hover:text-[#232E40]  "><a href="/">Авиабилеты</a></li>
          <li className="hover:text-[#232E40]  "><a href="/">Транспорт</a></li>
        </ul>
        <form action="" className="flex gap-6 items-end justify-center flex-col  lg:justify-start md:flex-row  ">
          <div className="flex md:gap-6 min-[380px]:gap-2 ">
            <div className="flex flex-col gap-6 lg:flex-row ">
              <div className="flex flex-col ">
                <label className="text-[#777E90] text-sm mb-3" >Куда хотите поехать?</label>
                <select className=" relative min-[380px]:w-[150px] w-[280px] md:w-[220px] bg-[#F8F8FA] rounded-2xl py-4 pe-4 ps-[52px] appearance-none  "
                  style={{
                    backgroundImage: `url(${location})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 16px center",
                    backgroundSize: "26px 30px",
                  }}
                  name="location" id="">
                  <option value="">г. Ташкент</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#777E90] text-sm mb-3">Заезд</label>
                <select className=" relative min-[380px]:w-[150px] w-[280px]  md:w-[200px] bg-[#F8F8FA] rounded-2xl py-4 pe-4 ps-[52px] appearance-none  "
                  style={{
                    backgroundImage: `url(${date})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 16px center",
                    backgroundSize: "26px 30px",
                  }} name="" id="">
                  <option value="">6 ноября, 2023</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:flex-row">
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#777E90] text-sm mb-3">Выезд
                </label>
                <select className=" relative min-[380px]:w-[150px] w-[280px]  md:w-[200px] bg-[#F8F8FA] rounded-2xl py-4 pe-4 ps-[52px] appearance-none   "
                  style={{
                    backgroundImage: `url(${date})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 16px center",
                    backgroundSize: "26px 30px",
                  }}
                  name="" id="">
                  <option value="">16 ноября, 2023</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#777E90] text-sm mb-3">Кол-во гостей</label>
                <select className=" relative min-[380px]:w-[150px] w-[280px] md:w-[200px] bg-[#F8F8FA] rounded-2xl py-4 pe-4 ps-[52px] appearance-none  "
                  style={{
                    backgroundImage: `url(${users})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 16px center",
                    backgroundSize: "26px 30px",
                  }}
                  name="" id="">
                  <option value="">2 взрослых</option>
                </select>
              </div>
            </div>
          </div>

          <button className="md:w-[150px] lg:w-[188px]  py-4 pe-4 bg-[#3276FF] rounded-2xl text-white ps-[50px]  "
            style={{
              backgroundImage: `url(${search})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left 24px center",

            }}>Начать поиск</button>
        </form>
      </div>
    </div>
  )
}

export default FormHero
