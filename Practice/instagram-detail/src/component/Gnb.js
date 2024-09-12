import React from "react";

const Gnb = () => {
  const gnbArrs = ["홈", "검색", "탐색 탭", "릴스", "메세지", "알림", "만들기", "프로필"]

  return <div>
    <ul>
    {gnbArrs.map((arr, idx) => (
      <li key={idx}>{arr}</li>      
    ))}
    </ul>
  </div>;
};

export default Gnb;
