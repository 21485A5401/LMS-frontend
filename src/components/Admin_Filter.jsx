import * as React from "react";
import styled from "styled-components";
import search from '../Assets/search.png';
import leftarrow from '../Assets/chevron_left.png';
import rightarrow from '../Assets/chevron_right.png';
import filter from '../Assets/Filter.png';
import { useState,useEffect } from "react";
import instance from "../Utils/api";

const data = [
  {
    id: 1,
    text: "1 -",
  },
  {
    id: 2,
    text: "10",
  },
  {
    id: 3,
    text: "of 10",
  },
];

function Admin_Filter() {
  // const [members, setMembers] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const membersPerPage = 10;

  // useEffect(() => {
  //   fetchMembers();
  // }, [currentPage]);

  // const fetchMembers = async () => {
  //   try {
  //     const response = await instance.get(`api/v1/teachers/teachers?page=${currentPage}`);
  //     setMembers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching members:', error);
  //   }
  // };

  // const nextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const prevPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };
  return (
    <MainContainer>
      <SearchContainer>
        <SearchIcon
          src={search}
          alt="Search icon"
        />
        <SearchText type="text" />
      </SearchContainer>
      <PaginationContainer>
        <PaginationTextContainer>
          {data.map((item) => (
            <PaginationText key={item.id}>{item.text}</PaginationText>
          ))}
          <PaginationArrow
            src={leftarrow}
            alt="Pagination arrow"
            // onClick={prevPage}
            // disabled={currentPage === 1}
          />
          <PaginationArrow
            src={rightarrow}
            alt="Pagination arrow"
            // onClick={nextPage}
          />
        </PaginationTextContainer>
        <VerticalDivider src={filter} />
      </PaginationContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--Neutral-White, #fff);
  gap: 20px;
  width: 90%;
  margin-left: 50px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px 4px 8px;
  background-color: rgba(227, 242, 255, 0.2);
  border: 1px solid rgba(198, 198, 198, 1);
  border-radius: var(--Corner-100, 4px);
  font-size: 14px;
  color: var(--Text-Tertiary, #6e6e71);
  font-weight: 400;
  white-space: nowrap;
  line-height: 143%;
  width: 242px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  /* margin-left: 8px; */
  padding: 4px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const SearchText = styled.input`
  font-family: Kumbh Sans, sans-serif;
  margin: auto 0;
  border: none;
  width: 100%;
  outline: none;
  background-color: rgba(227, 242, 255, 0.2);
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 80px;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const PaginationTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--PMBA-Disbaled-color, #c6c6c6);
  font-weight: 400;
  line-height: 143%;
`;

const PaginationText = styled.span`
  font-family: Kumbh Sans, sans-serif;
  margin: auto 0;

  &:first-child {
    color: #4f4f4f;
    text-align: right;
  }

  &:last-child {
    text-align: right;
  }
`;

const PaginationArrow = styled.img`
  width: 18px;
  height: 20px;
  aspect-ratio: 2;
  object-fit: contain;
  align-self: stretch;
  cursor: pointer;
`;

const VerticalDivider = styled.img`
  border-left: 1px solid rgba(217, 217, 220, 1);
  padding: 4px 20px 4px 16px;
`;

export default Admin_Filter;