import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { useParams } from "react-router-dom";

const MainContainerDiv = styled.div`
  border: 2px solid blue;
  display: flex;
  width: 1000px;
  margin: 0 auto;
`;

const DetailShopImage = styled.img`
  border: 1px solid red;
  width: 400px;
  height: 400px;
  margin-right: 10px;
`;

const DetailShopInformation = styled.div`
  border: 1px solid green;
`;

const ShopName = styled.h2`
  border-bottom: 1px solid silver;
`;
const ShopAdress = styled.p``;
const ShopOpen = styled.p``;
const ShopClose = styled.p``;

function Detail() {
  const { id } = useParams(); //detail path의 해당값가져오기
  const [detailShop, setDetailShop] = useState("");
  console.log("디테일 useParams", id);
  useEffect(() => {
    axios
      .get(`/hotpepper/gourmet/v1/?key=6512a79e28669890&id=${id}&format=json`)
      .then((response) => {
        console.log("디테일", response.data.results.shop);
        console.log("샵이름", response.data.results);
        setDetailShop(response.data.results.shop[0]);
      });
  }, []);
  console.log("정보확인", typeof ImageURL);
  return (
    <MainContainerDiv>
      <DetailShopImage src={detailShop.logo_image} />
      <DetailShopInformation>
        <ShopName>{detailShop.name}</ShopName>
        <ShopAdress>주소:{detailShop.address}</ShopAdress>
        <ShopOpen>영업시간:{detailShop.open}</ShopOpen>
        <ShopClose>정기휴일:{detailShop.close}</ShopClose>
      </DetailShopInformation>
    </MainContainerDiv>
  );
}

export default Detail;
