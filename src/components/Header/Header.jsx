import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user-circle.svg";
const Header = () => {
  return (
    <header >
      <div className='w-[1240px] mx-auto px-5 '>
        <div className="py-10 flex items-center justify-between text-white text-sm leading-[22px]">
          <a href="/" >
            <img src={logo} alt="logo" /></a>
          <nav>
            <ul className="flex gap-6">
              <li ><a href="/">Найти жилье</a></li>
              <li ><a href="/">Куда сходить?</a></li>
              <li ><a href="/">Туры</a></li>
              <li ><a href="/">Транспорт</a></li>
            </ul>
          </nav>

          <form action="" className="flex gap-6 ">
            <select name="" id="" className="bg-transparent outline-none  ">
              <option className="text-black" value="usd">USD</option>
              <option className="text-black" value="uzs">UZS</option>
            </select>
            <select name="" id="" className="bg-transparent outline-none ">
              <option className="text-black" value="russian">Русский</option>
              <option className="text-black" value="uzbek">Узбекский</option>
            </select>

            <button className="flex gap-2 justify-center text-base font-medium w-[129px] py-4 px-4 bg-[#232E40] rounded-md ">
              <img src={user} alt="user" />
              Войти</button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
