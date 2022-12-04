import React from "react";
import axios from "axios";
import styled from "styled-components";
import Shop from "../component/Shop";
import Paging from "../component/Paging";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "../style/Common";

/* STYLE(CSS) */
const BackBtn = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    //Tablet, Phone
    display: block;
  }
`;

function ShopList() {
  const showItems = 5; //Item数
  const navigate = useNavigate();
  const { range } = useParams();
  const [latitude, setLatitude] = useState(""); //緯度 state
  const [longitude, setLongitude] = useState(""); //経度 state
  const [shopArray, setShopArray] = useState([]); // Shop情報API
  const [page, setPage] = useState(1); //Paging

  const getNames = () => {
    axios //HTTP非同期通信ライブラリ(ホットペッパーグルメ検索API)
      .get(
        `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=${latitude}&lng=${longitude}&range=${range}&order=4&count=100&format=json`
      ) // 日本の緯度、経度使用(韓国GPS(緯度、経度)利用不可)lat = 34.67 lng = 135.52
      .then((response) => {
        console.log("state", response);
        if (
          response.data.results.error ||
          response.data.results.shop.length === 0
        ) {
          alert("その位置では見つかりません。");
        }
        setShopArray(response.data.results.shop);
      });
  };
  const handlePageChange = (e) => {
    // Paging HandleFunction
    setPage(e);
  };
  useEffect(() => {
    // Geolocation API
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    if ((latitude || longitude) !== "") {
      getNames();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude, range]);

  return (
    <Container>
      <BackBtn
        onClick={() => {
          navigate("/");
        }}
      >
        BACK
      </BackBtn>
      <div>
        {shopArray
          .slice(showItems * (page - 1), showItems * (page - 1) + showItems)
          .map((shop) => (
            <Shop
              key={shop.id}
              id={shop.id}
              thumbnailImage={shop.logo_image}
              shopName={shop.name}
              shopAccess={shop.access}
            />
          ))}
        <Paging
          totalCount={Number(shopArray.length)}
          page={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </Container>
  );
}

export default ShopList;
