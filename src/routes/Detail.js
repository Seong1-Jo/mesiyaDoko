import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";

import { Container } from "../style/Common";

const MainContainerDiv = styled.div`
  //Main.js RowDiv랑 같아서, 이름 생각해서 결정하기!!
  /* border: 5px solid green; */
  display: flex;
  padding: 20px;
  @media screen and (max-width: 768px) {
    //Tablet
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    //Phone
  }
`;

const DetailShopImage = styled.img`
  /* border: 1px solid red; */
  width: 30%;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    //Tablet
    width: 100%;
    margin-bottom: 50px;
  }
`;

const DetailShopInformation = styled.div`
  /* border: 1px solid green; */
  width: 70%;
  @media screen and (max-width: 768px) {
    //Tablet
    width: 100%;
  }
`;

const ShopName = styled.h2`
  border-bottom: 1px solid silver;
  @media screen and (max-width: 480px) {
    //Phone
    font-size: 20px;
  }
`;
const ShopDetail = styled.div`
  @media screen and (max-width: 480px) {
    //Phone
    font-size: 14px;
  }
`;
const ShopAdress = styled.p``;
const ShopOpen = styled.p``;
const ShopClose = styled.p``;

function Detail() {
  const { id } = useParams(); //detail path의 해당값가져오기
  const navigate = useNavigate(); //뒤로가기
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
    <Container>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <MainContainerDiv>
        <DetailShopImage src={detailShop.logo_image} />
        <DetailShopInformation>
          <ShopName>{detailShop.name}</ShopName>
          <ShopDetail>
            <ShopAdress>주소:{detailShop.address}</ShopAdress>
            <ShopOpen>영업시간:{detailShop.open}</ShopOpen>
            <ShopClose>정기휴일:{detailShop.close}</ShopClose>
          </ShopDetail>
        </DetailShopInformation>
      </MainContainerDiv>
    </Container>
  );
}

export default Detail;
