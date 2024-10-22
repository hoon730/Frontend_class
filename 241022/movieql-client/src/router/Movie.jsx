import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-top: 20vh;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 22px;
  line-height: 30px;
`;

const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 700px;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  border-radius: 8px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      large_cover_image
      isLiked @client
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <Subtitle>✨ {data.movie.rating}</Subtitle>
          <Button onClick={onClick}>
            ♥ {data.movie.isLiked ? "Dislike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            officia velit deserunt impedit possimus dignissimos vel inventore.
            Aliquam illo sequi recusandae deleniti minus, facere, repellendus
            eveniet harum aperiam, modi quo? Illum ex earum ipsam culpa aliquam,
            labore laudantium doloribus iusto esse rem corrupti impedit
            inventore? Ducimus eos facilis dicta excepturi ipsam ab laborum ea
            aspernatur repellendus, impedit non, maxime blanditiis?
          </Description>
        </Column>
        <Image bg={data.movie.large_cover_image} />
      </ItemGroup>
    </Container>
  );
};

export default Movie;
