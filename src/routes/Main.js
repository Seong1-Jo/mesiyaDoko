import React from "react";
import styled from "styled-components";

import { Container, LinkRouter, RowDiv } from "../style/Common";

/* STYLE(CSS) */

const ColDiv = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    //Tablet, Phone
    width: 100%;
  }
`;
const TitleDiv = styled.div`
  text-align: center;
  margin-top: 50px;
`;
const RangeUl = styled.ul``;
const RangeLi = styled.li`
  border: 2px solid black;
  border-radius: 7px;
  list-style: none;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 30px;
  margin-bottom: 10px;
  padding-top: 10px;
  margin-left: -22px;
  &:hover {
    border: 2px solid #ff0000;
    background-color: #ff3232;
    color: #fff0f0;
  }
  @media screen and (max-width: 480px) {
    //Phone
    font-size: 20px;
    font-weight: 700;
    height: 30px;
    padding-bottom: 10px;
  }
`;

/* JSX */
function Main() {
  return (
    <Container>
      <RowDiv>
        <ColDiv>
          <TitleDiv>
            <h1>現在地付近</h1> <h3>私の現在地でおすすめレストランを探す</h3>
          </TitleDiv>
        </ColDiv>
        <ColDiv>
          <RangeUl>
            <LinkRouter to={`/${1}`}>
              <RangeLi>300M</RangeLi>
            </LinkRouter>
            <LinkRouter to={`/${2}`}>
              <RangeLi>500M</RangeLi>
            </LinkRouter>
            <LinkRouter to={`/${3}`}>
              <RangeLi>1000M</RangeLi>
            </LinkRouter>
            <LinkRouter to={`/${4}`}>
              <RangeLi>2000M</RangeLi>
            </LinkRouter>
            <LinkRouter to={`/${5}`}>
              <RangeLi>3000M</RangeLi>
            </LinkRouter>
          </RangeUl>
        </ColDiv>
      </RowDiv>
    </Container>
  );
}

export default Main;
