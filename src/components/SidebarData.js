import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as VscIcons from "react-icons/vsc";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Офисы",
    icon: <ImIcons.ImOffice />,
    cName: "nav-text",
  },
  {
    title: "Оборудование",
    icon: <BiIcons.BiMouse />,
    cName: "nav-text",
  },
  {
    title: "Phones",
    icon: <BiIcons.BiPhoneCall />,
    cName: "nav-text",
    arrow: <RiIcons.RiArrowDownSLine />,
    children: [
      { text: "Телефоны инфо" },
      { text: "Телефоны по ФИО" },
      { text: "Телефоны с переадресацией" },
    ],
    cNameChildren: "have-children",
    active: false,
  },
  {
    title: "IP Planning",
    arrow: <RiIcons.RiArrowDownSLine />,
    icon: <FiIcons.FiMonitor />,
    cName: "nav-text",
    children: [{ text: "Privet" }, { text: "Poka" }],
    cNameChildren: "have-children",
    active: false,
  },
  {
    title: "Reports",
    icon: <VscIcons.VscReport />,
    cName: "nav-text",
  },
  {
    title: "Phone Reports",
    arrow: <RiIcons.RiArrowDownSLine />,
    icon: <FiIcons.FiPhoneMissed />,
    cName: "nav-text",
  },
  {
    title: "Tools",
    arrow: <RiIcons.RiArrowDownSLine />,
    icon: <FaIcons.FaTools />,
    cName: "nav-text",
  },
  {
    title: "Справочники",
    arrow: <RiIcons.RiArrowDownSLine />,
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: "nav-text",
  },
];
