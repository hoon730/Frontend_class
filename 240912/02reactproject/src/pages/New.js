import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";

const New = () => {
  useEffect(() => {
    setPageTitle("New Diary");
  }, []);
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/");
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        title={"새 일기 쓰기"}
        rightChild={<Button text={"Home"} onClick={goHome} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
