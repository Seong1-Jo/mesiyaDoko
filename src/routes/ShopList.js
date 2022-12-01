import React from "react";
import axios from "axios";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Shop from "../component/Shop";
import Paging from "../component/Paging";
import { Container } from "../style/Common";

const ShopDiv = styled.div`
  /* border: 3px solid black; */
`;

function ShopList() {
  const { range } = useParams();
  const navigate = useNavigate(); //뒤로가기
  console.log("이거뭘까", range);
  // const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(""); //緯度(위도) state
  const [longitude, setLongitude] = useState(""); //経度(경도)
  const [name, setName] = useState([]); // Shop情報API

  // const Lat = 35.67067982434782;
  // const Lng = 139.76977469231642;

  const items = 5; //shopList 개수
  // const [items, setItems] = useState(5); //Item
  const [page, setPage] = useState(1);

  const handlePageChange = (e) => {
    console.log("부모컴포넌트 함수출력", e);
    setPage(e);
  };
  //asyan await으로 나중에할수있을때 하기 lat=34.67&lng=135.52
  const getNames = () => {
    console.log("실행3", latitude);
    console.log("여기확인1", latitude);
    axios
      .get(
        //35.682854739782115, 139.7250405815352
        // `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=${latitude}&lng=${longitude}&range=${rangeClick}&order=4&format=json`
        `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=35.67067982434782&lng=139.76977469231642&range=${range}&order=4&count=100&format=json`
      )
      .then((response) => {
        console.log("샵이름", response.data.results);
        setName(response.data.results.shop);
      });
  };
  //현재위치를 가져오면서 api의 현재위치 함수 실행
  console.log("이곳에옵니가?", latitude);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      //現在位置
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      // setLatitude(Lat);
      // setLongitude(Lng);
      console.log("유즈effect", latitude);
    });
    getNames();
    console.log("유즈ef");
    setPage(1); //페이지 이동시 페이징 리셋
  }, [latitude, longitude, range]);

  console.log("name", name);

  return (
    <Container>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <ShopDiv>
        {console.log(
          "아이템, 페이지",
          page,
          items,
          items * (page - 1),
          items * (page - 1) + items
        )}
        {name
          .slice(items * (page - 1), items * (page - 1) + items)
          .map((shop) => (
            <Shop
              key={shop.id}
              id={shop.id}
              thumbnailImage={shop.logo_image}
              shopName={shop.name}
              shopAccess={shop.access}
            />
          ))}
        {/* PAGING */}
        <div>
          {console.log("확인1page", page, "확인name", name.length)}
          <Paging
            totalCount={Number(name.length)}
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      </ShopDiv>
    </Container>
  );
}

export default ShopList;
