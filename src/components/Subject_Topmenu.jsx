import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Subject_Topmenu = () => {
  const navigate = useNavigate();
  const handleNavigate =()=>{
    navigate("/Admin/Add_Subject");
  }
  const buttons = [
    { text: "Export CSV", className: "export-button" },
    { text: "Add Subject", className: "add-button", onclick:handleNavigate },
  ];

  return (
    <Header>
      <Title onClick={()=>{navigate("/Admin/Subjects_list")}}>Subjects</Title>
      <ButtonGroup>
        {buttons.map((button, index) => (
          <Button key={index} className={button.className} onClick={button.onclick}>
            {button.text}
          </Button>
        ))}
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
  margin-left: 60px;
  margin-bottom: 20px;
  width: 90%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #4f4f4f;
  cursor: pointer;
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
  width: 118px;

  &.export-button {
    background-color: #fff;
    color: #2671b1;
  }

  &.add-button {
    background-color: #509cdb;
    color: #fff;
  }
`;

export default Subject_Topmenu;