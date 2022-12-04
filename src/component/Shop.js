import React from "react";
import styled from "styled-components";

import { LinkRouter } from "../style/Common";

/* STYLE(CSS)*/

const ShopDiv = styled.div`
  border: 2px solid #a9a9a9;
  border-radius: 7px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  padding: 15px;
  position: relative;
  width: 600px;
  &:hover {
    border: 2px solid #ff0000;
  }
  @media screen and (max-width: 480px) {
    //Phone
    width: 90%;
  }
`;
const ColDiv = styled.div`
  width: 30%;
  @media screen and (max-width: 480px) {
    //Phone
    width: 20%;
  }
`;
const ShopImage = styled.img`
  width: 100%;
  height: 120px;
  @media screen and (max-width: 480px) {
    //Phone
    height: 50px;
  }
`;
const ShopInformaiton = styled.div`
  border-left: 1px solid #a9a9a9;
  width: 70%;
  padding-left: 20px;
  margin-left: 10px;
  color: black;
  @media screen and (max-width: 480px) {
    //Phone
    padding-left: 10px;
    margin-top: -10px;
  }
`;
const ShopName = styled.h4`
  width: 100%;
  &:hover {
    color: #ff3232;
  }
  @media screen and (max-width: 480px) {
    //Phone
    font-size: 11px;
    width: 100%;
  }
`;
const ShopAccess = styled.span`
  font-size: 13px;
  @media screen and (max-width: 480px) {
    //Phone
    font-size: 9px;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function Shop({ thumbnailImage, shopName, shopAccess, id }) {
  return (
    <LinkRouter to={`/detail/${id}`}>
      <ShopDiv>
        <ColDiv>
          <ShopImage src={thumbnailImage} alt={shopName} />
        </ColDiv>
        <ShopInformaiton>
          <ShopName>{shopName} </ShopName>
          <ShopAccess>{shopAccess}</ShopAccess>
        </ShopInformaiton>
      </ShopDiv>
    </LinkRouter>
  );
}

export default Shop;
