import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API_one = ""; //API

function App() {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(""); //緯度(위도) state
  const [longitude, setLongitude] = useState(""); //経度(경도)
  const [name, setName] = useState([]);
  const [rangeClick, setRangeClick] = useState(3);

  //asyan await으로 나중에할수있을때 하기
  const getNames = () => {
    axios
      .get(
        `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=34.67&lng=135.52&range=${rangeClick}&order=4&format=json`
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
  }, [rangeClick]);

  console.log("name", name);
  return (
    <>
      <div>현재 위도는: {latitude}</div>
      <div>현재 경도는: {longitude}</div>
      <div>현재위치로부터의 검색 반경을 지정</div>
      <button
        onClick={(e) => {
          setRangeClick(1);
          setLoading(false);
        }}
      >
        300m
      </button>
      <button>500m</button>
      <button>1000m</button>
      <button>2000m</button>
      <button>3000m</button>
      <div>
        {loading ? (
          <h1>
            현재위치는 위도 : {latitude} 경도 : {longitude} 입니다
          </h1>
        ) : (
          name.map((x) => (
            <div key={x.id}>
              <h2>{x.name}</h2>
              <p>{x.access}</p>
              <img src={x.logo_image} />
            </div> //목록
          ))
        )}
      </div>
    </>
  );
}

export default App;
