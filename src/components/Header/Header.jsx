import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user-circle.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-50 relative">
      <div className="w-full max-w-[1240px] mx-auto px-5">
        <div className="py-6 md:py-10 flex items-center justify-between text-white text-sm leading-[22px]">
          <a href="/">
            <img src={logo} alt="logo" className="w-[103px] h-[35px]" />
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li><a href="/">Найти жилье</a></li>
              <li><a href="/">Куда сходить?</a></li>
              <li><a href="/">Туры</a></li>
              <li><a href="/">Транспорт</a></li>
            </ul>
          </nav>
          <form className=" ms-auto me-4 md:ms-0 md:me-0 flex gap-6">
            <select className="bg-transparent outline-none">
              <option className="text-black" value="usd">USD</option>
              <option className="text-black" value="uzs">UZS</option>
            </select>
            <select className="bg-transparent outline-none">
              <option className="text-black" value="russian">Русский</option>
              <option className="text-black" value="uzbek">Узбекский</option>
            </select>

            <button className="flex items-center gap-2 text-base font-medium py-3 px-4 bg-[#232E40] rounded-md">
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
          <div className="md:hidden bg-[#0F172A] text-white py-6">
            <ul className="flex flex-col gap-4 text-center mb-6">
              <li><a href="/">Найти жилье</a></li>
              <li><a href="/">Куда сходить?</a></li>
              <li><a href="/">Туры</a></li>
              <li><a href="/">Транспорт</a></li>
            </ul>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
