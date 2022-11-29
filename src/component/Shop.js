import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

/* styled-components */
const ShopDiv = styled.div`
  border: 2px solid orange;
  position: relative;
  /* flex: 1 1 28%; */
  padding: 15px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  width: 700px;
`;
const ShopImage = styled.img`
  width: 10%;
  margin-right: 10px;
`;
const ShopInformaiton = styled.div`
  border: 1px solid red;
  width: 50%;
`;

const ShopName = styled.h4`
  /* font-size: 20px; */
`;
const ShopAccess = styled.span`
  font-size: 12px;
  text-overflow: ellipsis;
`;

function Shop({ thumbnailImage, shopName, shopAccess, shopRange, id }) {
  return (
    <ShopDiv>
      <ShopImage src={thumbnailImage} alt={shopName} />
      <ShopInformaiton>
        <ShopName>
          <Link to={`/detail/${id}`}>{shopName}</Link>
        </ShopName>
        <ShopAccess>{shopAccess}</ShopAccess>
      </ShopInformaiton>
    </ShopDiv>
  );
}

export default Shop;
