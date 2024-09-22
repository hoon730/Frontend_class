import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { DiaryDataContext } from "../App";
import { getMonthRangeByDate } from "../utils";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 600px;
  height: 100vh;
  background: #fff;
`;

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const data = useContext(DiaryDataContext);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) =>
            beginTimeStamp <= it.createDate && it.createDate <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  return (
    <Wrapper>
      <Header
        leftChild={<Button text={"< "} onClick={onDecreaseMonth} />}
        date={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData}/>
    </Wrapper>
  );
};

export default Home;
