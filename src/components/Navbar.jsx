import { useState } from "react";
import { close, logo, menu, logo_safa } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/" className="flex flex-row ">
        <img src={logo_safa} alt="hoobank" className="w-[100px] h-[100px]" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-5 text-primary`}>
          {" "}
          Psikolojik Danışmanlık <br /> İbrahim Safa VAROL{" "}
        </p>
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-primary`}
          >
         
            <Link to={`${nav.link}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[50px] h-[50px] object-contain"
          
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 border-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-white sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-primary`}
              >
                 <Link to={`${nav.link}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
