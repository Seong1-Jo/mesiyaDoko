import React from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";

import { useState } from "react";

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

const Paging = ({ totalCount, page, handlePageChange }) => {
  const handlePageChange2 = (e) => {
    // setPage(page);
    console.log("페이징");
    console.log("수", typeof totalCount);
    console.log("페이징함수", e);
    handlePageChange(e);
  };

  return (
    <PaginationBox>
      <Pagination
        activePage={page} //현재 보고있는 페이지
        itemsCountPerPage={6} //페이지에 출력할 아이템수
        totalItemsCount={totalCount} // 총 아이템수
        pageRangeDisplayed={5} //표시할 페이지수
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange2}
      />
    </PaginationBox>
  );
};

export default Paging;
