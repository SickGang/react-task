import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as VscIcons from "react-icons/vsc";

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
    icon: <FiIcons.FiMonitor />,
    cName: "nav-text",
    children: [{ text: "IPAM" }],
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
    icon: <FiIcons.FiPhoneMissed />,
    cName: "nav-text",
    children: [
      { text: "По моделям" },
      { text: "По кластерам" },
      { text: "По не используемым" },
      { text: "По Agent Licenses" },
    ],
  },
  {
    title: "Tools",
    icon: <FaIcons.FaTools />,
    cName: "nav-text",
    children: [
      { text: "Поиск незарегестрированных телефонов" },
      { text: "CUCM Маршрутизация" },
      { text: "Testing CORS Requests" },
    ],
  },
  {
    title: "Справочники",
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: "nav-text",
    children: [
      { text: "Рег. центры (mapping)" },
      { text: "Регионы" },
      { text: "Города" },
      { text: "Статусы офисов" },
      { text: "Оборудование" },
      { text: "Типы портов" },
      { text: "VRF" },
      { text: "NetWorks(Table)" },
      { text: "NetWorks(Tree)" },
      { text: "Логи Hardware" },
      { text: "Логи Phones" },
    ],
  },
];
