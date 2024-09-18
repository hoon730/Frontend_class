import React from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort")); 

  return (
    <div>
      Home Page
      <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => alert("작성완료!")}
      />
      {/* <Header title="Home" leftChild={<Button text="긍정버튼" onClick={() => alert("positive button")}/>} rightChild={<Button text="부정버튼" onClick={() => alert("negative button")}/>}/> */}
      {/* <Button title="기본버튼" onClick={() => alert("클릭")} />
      <Button title="긍정버튼" type="positive" onClick={() => alert("클릭")} />
      <Button title="부정버튼" type="negative" onClick={() => alert("클릭")} /> */}
    </div>
  );
};

export default Home;
