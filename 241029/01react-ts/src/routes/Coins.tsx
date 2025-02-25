import React, { useState, useEffect } from "react";
import {
  useLocation,
  useParams,
  Link,
  useMatch,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";
import Coin from "./Coin";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Inner = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const CoinList = styled.ul`
  width: 700px;
`;

const CoinInfo = styled.li`
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    color: inherit;
    transition: color 0.3s;
    margin: 0 10px;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 35px;
  height: auto;
  margin: 0 4px;
`;

const Button = styled.button`
  background: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  tpye: string;
}

const Coins = () => {
  const [targetCoin, setTargetCoin] = useState<string>("");
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  const setterFn = useSetRecoilState(isDarkAtom);

  // console.log(data?.slice(0, 100));
  console.log(targetCoin);

  return (
    <Container>
      <Helmet>
        <title>Coin List</title>
      </Helmet>
      <Header>
        <Title>Coin List</Title>
        <Button onClick={() => setterFn((prev) => !prev)}>Mode</Button>
      </Header>
      <Inner>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Coin targetCoin={targetCoin} />
            <CoinList>
              {data?.slice(0, 100).map((coin) => (
                <CoinInfo
                  key={coin.id}
                  onClick={() => {
                    setTargetCoin(coin.id);
                  }}
                >
                  {/* <Link to={`/${coin.id}`} state={coin.name}> */}
                  🏆Now Rank: {coin.rank}
                  <Img
                    src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                  />
                  {coin.name} ({coin.symbol}) &rarr; {coin.name} Information
                  {/* </Link> */}
                </CoinInfo>
              ))}
            </CoinList>
          </>
        )}
      </Inner>
    </Container>
  );
};

export default Coins;
