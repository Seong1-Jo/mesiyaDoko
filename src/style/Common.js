import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  /* border: 5px solid red; */
  margin: 10%;
`;

export const LinkRouter = styled(Link)`
  text-decoration-line: none;
`;

export const RowDiv = styled.div`
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
