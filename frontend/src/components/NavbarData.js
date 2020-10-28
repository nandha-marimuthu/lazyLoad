import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Cart",
    path: "/cart",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
