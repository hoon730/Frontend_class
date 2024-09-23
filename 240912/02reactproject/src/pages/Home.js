import React, { useState, useContext, useEffect } from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import Editor from "../component/Editor";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate,setPageTitle } from "../util";
// import { useSearchParams } from "react-router-dom";

const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  useEffect(() => {
    setPageTitle("Welcome Hoon's Diary")
  }, [])

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData}/>
      {/* <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => alert("작성완료!")}
      /> */}
      {/* <Header title="Home" leftChild={<Button text="긍정버튼" onClick={() => alert("positive button")}/>} rightChild={<Button text="부정버튼" onClick={() => alert("negative button")}/>}/> */}
      {/* <Button title="기본버튼" onClick={() => alert("클릭")} />
      <Button title="긍정버튼" type="positive" onClick={() => alert("클릭")} />
      <Button title="부정버튼" type="negative" onClick={() => alert("클릭")} /> */}
    </div>
  );
};

export default Home;
