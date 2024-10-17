import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Badge } from "react-bootstrap";

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  position: absolute;
  width: 100%;
  top: 22px;
  left: 10px;
  font-size: 20px;
`;

const Genre = styled.div`
  display: flex;
  gap: 6px;
`;

const InfoGroup = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Vote = styled.span``;

const Adult = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(220, 20, 60, 0.8);
  padding: 10px;
  width: 50px;
  height: 50px;
  line-height: 25px;
  border-radius: 50px;
  font-size: 14px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
`;

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <Wrapper>
      <Img
        src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
      />
      <Title>{item.title}</Title>
      <Adult>{item.addult ? "성인" : "전체"}</Adult>

      <InfoGroup>
        <Genre>
          {item.genre_ids.map((id, index) => (
            <Badge key={index}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </InfoGroup>
    </Wrapper>
  );
};

export default MovieCard;
