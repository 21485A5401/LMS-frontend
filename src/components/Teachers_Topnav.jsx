import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Teachers_Topnav = ({Title, buttonName, buttonpath, exportButton}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(buttonpath);
  };

  return (
    <Header>
      <TitleName>{Title}</TitleName>
      <ButtonGroup>
            {exportButton &&
            <Button className='export-button' onClick={() => {}}>
                Export CSV
            </Button>}
            {buttonName &&
            <Button className="add-button" onClick={handleNavigate}>
                {buttonName}
            </Button>}
      </ButtonGroup>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 14px 16px; */
  background-color: #fff;
  gap: 20px;
  text-align: center;
  margin-top:20px;
  margin-left: 60px;
  margin-bottom: 20px;
  width: 90%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const TitleName = styled.h1`
  margin: 0;
  color: #4f4f4f;
  font: 600 16px "Kumbh Sans", sans-serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 12px 14px;
  border-radius: 4px;
  font-family: "Kumbh Sans", sans-serif;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  width: 155px;

  &.export-button {
    background-color: #fff;
    color: #2671b1;
  }

  &.add-button {
    background-color: #509cdb;
    color: #fff;
  }
`;

export default Teachers_Topnav;