import React from "react";
import { navigation } from "../data";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const navItems = navigation.map((item, index) => (
    <li key={index}>
      <Link
        to={item.href}
        className={`text-black capitalize hover:border-b transition-all`}
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <nav className="bg-white w-full h-full shadow-2xl">
      <ul className="capitalize text-center h-full flex flex-col items-center justify-center gap-y-5 text-xl font-medium">
        {navItems}
      </ul>
    </nav>
  );
};

export default NavMobile;
