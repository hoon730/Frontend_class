import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

const ContentWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const LeftContent = styled.div`
  flex: 1;
`;
const RightContent = styled.div`
  flex: 3;
  & button {
    width: 100%;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  background: #ececec;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;

const ContentList = styled.div``;

const selectList = [
  {
    value: "latest",
    text: "최신순",
  },
  {
    value: "oldest",
    text: "오래된순",
  },
];

const DiaryList = ({ data }) => {
  const navigator = useNavigate();
  const [sorting, setSorting] = useState("latest");
  const [sort, setSort] = useState([]);

  const handleOnChange = (e) => {
    setSorting(e.target.value);
  };

  useEffect(() => {
    const compare = (a, b) => {
      if (sorting === "latest") {
        return Number(b.createDate) - Number(a.createDate);
      } else {
        return Number(a.createDate) - Number(b.createDate);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSort(copyList);
  }, [data, sorting]);

  const goNew = () => {
    navigator("/new");
  };

  return (
    <div>
      <ContentWrapper>
        <LeftContent>
          <Select value={sorting} onChange={handleOnChange}>
            {selectList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.text}
              </option>
            ))}
          </Select>
        </LeftContent>
        <RightContent>
          <Button text={"글 작성하기"} type={"positive"} onClick={goNew} />
        </RightContent>
      </ContentWrapper>
      <ContentList>
        {sort.map((it) => (
          <DiaryItem
            key={it.id}
            {...it}
          />
        ))}
      </ContentList>
    </div>
  );
};

export default DiaryList;
