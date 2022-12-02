import React from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";

/* STYLE(CSS)*/

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
// 出所: https://cotak.tistory.com/112

const Paging = ({ totalCount, page, handlePageChange }) => {
  const handlePagingChange = (e) => {
    handlePageChange(e);
  };

  return (
    <PaginationBox>
      <Pagination
        activePage={page} // 現在見ている Page
        itemsCountPerPage={6} // Pageに出力するItem数
        totalItemsCount={totalCount} // 総Item数
        pageRangeDisplayed={5} // 表示するPage数
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePagingChange}
      />
    </PaginationBox>
  );
};

export default Paging;
