import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/79578899a64c498c6007d9d5556ccf14603b648e228e1e5b21eeae38a1eda6e1?apiKey=00c981949ae441738146aeab96db3c11&",
    label: "Dashboard",
    isActive: true,
    link: '/Admin/Dashboard'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/79578899a64c498c6007d9d5556ccf14603b648e228e1e5b21eeae38a1eda6e1?apiKey=00c981949ae441738146aeab96db3c11&",
    label: "Teachers",
    link: '/Admin/Teachers_list'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd45fd0cf1fbf98f3406c62defe579b7729e1006f438a385d8604fbd84260502?apiKey=00c981949ae441738146aeab96db3c11&",
    label: "classes/Sections",
    link: '/Admin/Classes'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd45fd0cf1fbf98f3406c62defe579b7729e1006f438a385d8604fbd84260502?apiKey=00c981949ae441738146aeab96db3c11&",
    label: "Students",
    link: '/Admin/Student_list'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd45fd0cf1fbf98f3406c62defe579b7729e1006f438a385d8604fbd84260502?apiKey=00c981949ae441738146aeab96db3c11&",
    label: "Subjects",
    link: '/Admin/Subjects'
  },
  // {
  //   icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd45fd0cf1fbf98f3406c62defe579b7729e1006f438a385d8604fbd84260502?apiKey=00c981949ae441738146aeab96db3c11&",
  //   label: "Exams",
  //   link: '/Admin/Exams'
  // },
];

function School_Menu_bar() {

  return (
    <SidebarContainer>
      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c57e1c322d6bda30a5ddbd17390f00b176986110655509d088a30655fd9b842?apiKey=00c981949ae441738146aeab96db3c11&" alt="Profile" />
      <SchoolName>Vibho School</SchoolName>
      <nav>
        {sidebarItems.map((item, index) => (

          <NavLink key={index} to={item.link} style={{ textDecoration: 'none' }}>
            <SidebarItem >
              <SidebarIcon src={item.icon} alt={item.label} />
              <SidebarLabel>{item.label}</SidebarLabel>
            </SidebarItem>
          </NavLink>
        ))}
      </nav>
      <FeaturesItem>
        <SidebarIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd45fd0cf1fbf98f3406c62defe579b7729e1006f438a385d8604fbd84260502?apiKey=00c981949ae441738146aeab96db3c11&" alt="Features" />
        <SidebarLabel>Features</SidebarLabel>
        <FeaturesTag>NEW</FeaturesTag>
      </FeaturesItem>
    </SidebarContainer>
  );
}


const SidebarContainer = styled.aside`
  background-color: #152259;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  height: 839px;
  width: 15%;
  padding: 26px 25px 80px;
  
  
`;

const ProfileImage = styled.img`
  align-self: center;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  width: 65px;
`;

const SchoolName = styled.h2`
  align-self: center;
  color: #fff;
  font: 14px Kumbh Sans, sans-serif;
  margin-top: 22px;
  padding-bottom: 27px;
  /* border-bottom: 1px solid #fff;
  width: 100%; */

  
`;

const SidebarItem = styled.button`
  align-items: center;
  background-color:#152259;
  border-radius: 4px;
  color: #fff;
  display: flex;
  font-size: 14px;
  gap: 16px;
  justify-content: start;
  margin-top: 8px;
  padding: 12px 16px;
  text-decoration: none;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;
  border: none;
  &:active,&:focus,&:hover{
    background-color: #509CDB;
    
  }

`;

const SidebarIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 16px;
`;

const SidebarLabel = styled.span`
  font-family: Kumbh Sans, sans-serif;
`;

const FeaturesItem = styled(SidebarItem)`
  gap: 20px;
  justify-content: center;
  margin-top: auto;
  padding: 12px 18px;
`;

const FeaturesTag = styled.span`
  background-color: #b9d7f1;
  border-radius: 8px;
  color: #000;
  font: 10px Kumbh Sans, sans-serif;
  padding: 1px 8px;
`;

export default School_Menu_bar;