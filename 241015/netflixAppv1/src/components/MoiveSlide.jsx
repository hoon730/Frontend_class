import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  width: 100vw;
`;

const MoiveSlide = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Wrapper>
      {movies && (
        <Carousel responsive={responsive}>
          {movies.results.map((item, index) => (
            <MovieCard item={item} key={index} />
          ))}
          <MovieCard />
        </Carousel>
      )}
    </Wrapper>
  );
};

export default MoiveSlide;
