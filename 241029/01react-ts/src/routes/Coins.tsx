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
import { fetchCoinInfo, fetchPriceInfo } from "../api";

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

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const CoinList = styled.ul`
  width: 700px;
`;

const Coin = styled.li`
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

const Overview = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.textColor};
  border-radius: 8px;

  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Description = styled.div`
  width: 600px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.accentColor};
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) =>
    props.$isActive ? props.theme.textColor : props.theme.accentColor};
  color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.textColor};
  padding: 8px 0;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.accentColor};
  }
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

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  in_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
    };
  };
}

interface IsActive {
  $isActive: boolean;
}

const Coins = () => {
  const [targetCoinId, setTargetCoinId] = useState<string>();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  const setterFn = useSetRecoilState(isDarkAtom);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>({
    queryKey: ["info", targetCoinId],
    queryFn: () => fetchCoinInfo(targetCoinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", targetCoinId],
    queryFn: () => fetchPriceInfo(targetCoinId),
    // refetchInterval: 5000,
  });

  return (
    <Container>
      <Helmet>
        <title>Coin List</title>
      </Helmet>
      <Header>
        <Title>Coin List</Title>
        <Button onClick={() => setterFn((prev) => !prev)}>Mode</Button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <CoinList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id} onClick={() => setTargetCoinId(coin.id)}>
                <Link to={`/${coin.id}`} state={coin.name}>
                  🏆Now Rank: {coin.rank}
                  <Img
                    src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                  />
                  {coin.name} ({coin.symbol}) &rarr; {coin.name} Information
                </Link>
              </Coin>
            ))}
          </CoinList>
      
           <Overview>
             <OverviewItem>
               <span>Rank : </span>
               <span>{infoData?.rank}</span>
             </OverviewItem>
             <OverviewItem>
               <span>Symbol : </span>
               <span>{infoData?.symbol}</span>
             </OverviewItem>
             <OverviewItem>
               <span>Open Source :</span>
               <span>{infoData?.is_active ? "Yes" : "No"}</span>
             </OverviewItem>
           </Overview>
           <Description>
             🎟Infomation of {infoData?.type} type: Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Aliquam accusamus iure amet tempore
             reiciendis quod praesentium, obcaecati eum maxime, corrupti
             similique assumenda itaque earum quas omnis? Amet dolor deserunt
             nisi!
           </Description>
           <Overview>
             <OverviewItem>
               <span>Total Supply : </span>
               <span>{priceData?.total_supply}</span>
             </OverviewItem>
             <OverviewItem>
               <span>Max Supply : </span>
               <span>{priceData?.max_supply}</span>
             </OverviewItem>
           </Overview>
           <Tabs>
             <Tab $isActive={chartMatch !== null}>
               <Link to={`/${targetCoinId}/chart`}>Chart</Link>
             </Tab>
             <Tab $isActive={priceMatch !== null}>
               <Link to={`/${targetCoinId}/price`}>Price</Link>
             </Tab>
           </Tabs>
          </>
      )}
    </Container>
  );
};

export default Coins;
