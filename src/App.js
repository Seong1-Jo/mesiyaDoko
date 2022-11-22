import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API_one = ""; //API

function App() {
  const [latitude, setLatitude] = useState(""); //緯度(위도) state
  const [longitude, setLongitude] = useState(""); //経度(경도)
  const [name, setName] = useState([]);
  const getNames = () => {
    axios
      .get(
        `/hotpepper/gourmet/v1/?key=6512a79e28669890&lat=34.67&lng=135.52&range=5&order=4&format=json`
      )
      .then((response) => {
        console.log("res", response.data.results.shop);
        // setName(response);
      });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(position.coords);
    });
    getNames();
  }, []);

  console.log("name", name);
  return (
    <>
      <div>현재 위도는: {latitude}</div>
      <div>현재 경도는: {longitude}</div>
      <div>현재위치로부터의 검색 반경을 지정</div>
      <button>10</button>
      <button>20</button>
      <button>30</button>
      <div>
        {name
          .filter((x) => x.name === "shop") //map의 조건문을 할때
          .map((x) => (
            <div>{x.name}</div> //key값은 일단 보류
          ))}
      </div>
    </>
  );
}

export default App;
