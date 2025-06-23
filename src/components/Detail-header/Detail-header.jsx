import { useState } from "react";
import logo from "../../assets/images/foot-logo.svg";
import user from "../../assets/images/user-circle.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const DetailHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-50 relative bg-white border border-[#F8F8FA]">
      <div className="w-full max-w-[1240px] mx-auto px-5">
        <div className="py-4 md:py-10 lg:py-4 flex items-center justify-between text-[#232E40] text-sm leading-[22px]">
          <a href="/">
            <img src={logo} alt="logo" className="lg:w-[184px] h-[48px] md:w-[140px] md:me-3 " />
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-xs lg:text-base">
              <li><a href="/">Найти жилье</a></li>
              <li><a href="/">Куда сходить?</a></li>
              <li><a href="/">Туры</a></li>
              <li><a href="/">Транспорт</a></li>
            </ul>
          </nav>
          <form className=" hidden ms-auto me-4 md:ms-0 md:me-0 md:flex md:gap-3 lg:gap-6">
            <select className="bg-transparent outline-none text-xs lg:text-base">
              <option className="text-black" value="usd">USD</option>
              <option className="text-black" value="uzs">UZS</option>
            </select>
            <select className="bg-transparent outline-none text-xs lg:text-base">
              <option className="text-black" value="russian">Русский</option>
              <option className="text-black" value="uzbek">Узбекский</option>
            </select>

            <button className="flex items-center text-xs lg:text-base gap-2 text-white font-medium py-3 px-4 bg-[#232E40] rounded-md">
              <img src={user} alt="user" />
              Войти
            </button>
          </form>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

        </div>
        {menuOpen && (
          <div className="md:hidden absolute bg-[#0F172A] text-white py-6 w-full left-[-2px] ">
            <ul className="flex flex-col gap-4 text-center mb-6 ">
              <li><a href="/">Найти жилье</a></li>
              <li><a href="/">Куда сходить?</a></li>
              <li><a href="/">Туры</a></li>
              <li><a href="/">Транспорт</a></li>
            </ul>

            <form className=" ms-auto me-4 flex items-center flex-col gap-3 ">
              <div className="mb-4">

                <select className="bg-transparent outline-none text-xs w-16 ">
                  <option className="text-black" value="usd">USD</option>
                  <option className="text-black" value="uzs">UZS</option>
                </select>
                <select className="bg-transparent outline-none text-xs w-16">
                  <option className="text-black " value="russian">Русский</option>
                  <option className="text-black" value="uzbek">Узбекский</option>
                </select>
              </div>

              <button className="flex items-center text-xs  gap-2  font-medium py-4 px-2 bg-[#232E40] rounded-md">
                <img src={user} alt="user" />
                Войти
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default DetailHeader;
