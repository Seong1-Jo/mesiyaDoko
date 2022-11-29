import React from "react";
import axios from "axios";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Shop from "../component/Shop";
import Paging from "../component/Paging";

const ShopDiv = styled.div`
  border: 3px solid black;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(""); //緯度(위도) state
  const [longitude, setLongitude] = useState(""); //経度(경도)
  const [name, setName] = useState([]); // Shop情報API
  const [rangeClick, setRangeClick] = useState(3);

  const [items, setItems] = useState(6); //Item
  const [page, setPage] = useState(1);

  const handlePageChange = (e) => {
    console.log("부모컴포넌트 함수출력", e);
    setPage(e);
  };

  //asyan await으로 나중에할수있을때 하기 lat=34.67&lng=135.52
  const getNames = () => {
    console.log("여기확인1", latitude);
    axios
      .get(
        // `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=${latitude}&lng=${longitude}&range=${rangeClick}&order=4&format=json`
        `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=35.00&lng=135.76&range=${rangeClick}&order=4&count=100&format=json`
      )
      .then((response) => {
        console.log("샵이름", response.data.results);
        setName(response.data.results.shop);
      });
  };
  //현재위치를 가져오면서 api의 현재위치 함수 실행
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      //現在位置
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(position.coords);
    });
    getNames();
  }, [latitude, longitude, rangeClick]);
  useEffect(() => {}, [latitude]);
  // getNames();
  // let geolocatioAPI = `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=${latitude}&lng=127.0802772&range=${rangeClick}&order=4&format=json`;
  // console.log("위도확인1", latitude);
  // axios.get(geolocatioAPI).then((response) => {
  //   console.log("샵이름", response.data.results);
  //   setName(response.data.results.shop);
  // });

  console.log("name", name);

  return (
    <div>
      <div>현재 위도는: {latitude}</div>
      <div>현재 경도는: {longitude}</div>
      <div>현재위치로부터의 검색 반경을 지정</div>
      <Link to={`/shops`}>
        <button
          onClick={(e) => {
            setRangeClick(1);
            setLoading(false);
          }}
        >
          300m
        </button>
      </Link>
      <button>500m</button>
      <button>1000m</button>
      <button>2000m</button>
      <Link to={`/shops`}>
        <button
          onClick={(e) => {
            setRangeClick(5);
            setLoading(false);
          }}
        >
          3000m
        </button>
      </Link>
      <div>
        {loading ? (
          <h1>
            현재위치는 위도 : {latitude} 경도 : {longitude} 입니다
          </h1>
        ) : (
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
                  shopRange={rangeClick}
                />
              ))}
          </ShopDiv>
        )}
      </div>
      {/* PAGING */}
      <div>
        {loading ? null : (
          <Paging
            totalCount={Number(name.length)}
            page={page}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
