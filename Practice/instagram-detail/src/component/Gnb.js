import React from "react";
import { GoHome } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCompassOutline } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { LuPlusSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Gnb = () => {
  const navigate = useNavigate();

  const gnbData = [
    {
      icon: "<GoHome />",
      title: "홈",
    },
    {
      icon: "<FaMagnifyingGlass />",
      title: "검색",
    },
    {
      icon: "<IoCompassOutline />",
      title: "탐색 탭",
    },
    {
      icon: "<BiSolidVideos />",
      title: "릴스",
    },
    {
      icon: "<IoPaperPlaneOutline />",
      title: "메세지",
    },
    {
      icon: "<FaRegHeart />",
      title: "알림",
    },
    {
      icon: "<LuPlusSquare />",
      title: "만들기",
    },
    {
      icon: "<CgProfile />",
      title: "프로필",
    },
  ];

  return (
    <ul>
      <li>
        <GoHome />
        <span>홈</span>
      </li>
      <li>
        <FaMagnifyingGlass />
        <span>검색</span>
      </li>
      <li>
        <IoCompassOutline />
        <span>탐색 탭</span>
      </li>
      <li>
        <BiSolidVideos />
        <span>릴스</span>
      </li>
      <li>
        <IoPaperPlaneOutline />
        <span>메세지</span>
      </li>
      <li>
        <FaRegHeart />
        <span>알림</span>
      </li>
      <li>
        <LuPlusSquare />
        <span>만들기</span>
      </li>
      <li>
        <CgProfile />
        <span>프로필</span>
      </li>
    </ul>
  );
};

export default Gnb;
