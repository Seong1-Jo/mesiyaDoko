import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";
import { Container, RowDiv } from "../style/Common";

/* STYLE(CSS) */

const BackBtn = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
  }
`;
const DetailShopImage = styled.img`
  width: 30%;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    //Tablet
    width: 100%;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    //Phone
    height: 200px;
  }
`;
const DetailShopInformation = styled.div`
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
  const { id } = useParams(); // path値
  const navigate = useNavigate();
  const [detailShop, setDetailShop] = useState("");

  useEffect(() => {
    //HTTP非同期通信ライブラリ
    axios
      .get(`/hotpepper/gourmet/v1/?key=6512a79e28669890&id=${id}&format=json`)
      .then((response) => {
        setDetailShop(response.data.results.shop[0]);
      });
  }, []);
  return (
    <Container>
      <BackBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        BACK
      </BackBtn>
      <RowDiv>
        <DetailShopImage src={detailShop.logo_image} />
        <DetailShopInformation>
          <ShopName>{detailShop.name}</ShopName>
          <ShopDetail>
            <ShopAdress>住所:{detailShop.address}</ShopAdress>
            <ShopOpen>営業時間:{detailShop.open}</ShopOpen>
            <ShopClose>定休日:{detailShop.close}</ShopClose>
          </ShopDetail>
        </DetailShopInformation>
      </RowDiv>
    </Container>
  );
}

export default Detail;
