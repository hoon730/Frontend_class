import React, { useState, useEffect, useContext } from "react";
import { DiaryDataContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const [diary, setDiary] = useState();
  const data = useContext(DiaryDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    const matchedDiary = data.find((it) => String(it.id) === String(id));
    if (matchedDiary) setDiary(matchedDiary);
    else {
      alert("일치하는 다이어리가 없습니다.");
      navigate("/");
    }
  }, [id, diary]);
  return diary
};

export default useDiary;
