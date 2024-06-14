import React from "react";
import styled from "styled-components";
import downarrow from "../Assets/downarrow.png";
import search from "../Assets/search.png";
import arrowback from '../Assets/arrow.svg'
import { useNavigate } from "react-router-dom";

const FilterContainer = styled.div`
  border-radius: 8px;
  background-color: #FCFAFA;
  display: flex;
  gap: 0;
  font-size: 14px;
  font-weight: 500;
  margin-left: 60px;
  /* margin-right: 120px; */
  width: 90%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const FilterButton = styled.button`
  background-color: #fff;
  display: flex;
  gap: 11px;
  color: #c4c4c4;
  padding: 16px 20px 16px 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const FilterButtonText = styled.span`
  font-family: "Kumbh Sans", sans-serif;
`;

const FilterButtonIcon = styled.img`
  width: 8px;
  fill: #c4c4c4;
  margin: auto 0;
`;

const SearchContainer = styled.div`
  background-color: #fcfafa;
  display: flex;
  gap: 16px;
  color: #8a8a8a;
  flex: 1;
  padding: 16px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  fill: #8a8a8a;
  align-self: start;
`;

const SearchInput = styled.input`
  font-family: "Kumbh Sans", sans-serif;
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: #8a8a8a;
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Backbutton = styled.button`
border: none;
padding:10px 20px;
display: flex;
align-items: center;
line-height: 14.88px;
color: #000000;
background-color: unset ;
font: 700 12px "Kumbh Sans", sans-serif;
cursor: pointer;
`
const Backimage = styled. img`
width:12px;
margin-right:10px;
`

function TeacherSearchFilter() {
  const navigate = useNavigate();
  return (
    <FilterContainer>
      <FilterButton>
        <FilterButtonText>Add filter</FilterButtonText>
        <FilterButtonIcon src={downarrow} alt="Filter icon" />
      </FilterButton>
      <SearchContainer>
        
        <SearchIcon src={search} alt="Search icon" />
        <SearchInput
          type="search"
          id="teacherSearch"
          placeholder="Search here by name or email"
        />
      </SearchContainer>
      <Backbutton onClick={()=>{navigate(-1)}}><Backimage src={arrowback} alt=""/>back</Backbutton>
    </FilterContainer>
  );
}

export default TeacherSearchFilter;