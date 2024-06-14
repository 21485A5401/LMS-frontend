import * as React from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Branch_Topnav() {
  const  navigate = useNavigate();
  const handleLogout =()=>{
    Cookies.remove("token");
    Cookies.remove("Role");
    navigate("/School_Login");
    window.location.reload();
  }
  return (
    <HeaderWrapper>
      <LogoutContainer>
        <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0868914fc377b490d0f6b6010641992a5530b6b3ec6b92793a265798905f1c?apiKey=00c981949ae441738146aeab96db3c11&" alt="Profile" />
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
      </LogoutContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  align-items: end;
  background-color: #e9ebf5;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #fcfafa;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  /* padding: 14px 50px; */
  /* padding-top: 14.5px; */
  /* padding-bottom: 14.5px; */
  padding-right: 50px;

  width: 100%;
  height: 69px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const LogoutContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const ProfileImage = styled.img`
  width: 28px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  margin: auto 0;
`;

const LogoutButton = styled.button`
  font-family: Kumbh Sans, sans-serif;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--Project-secondary-300, #509cdb);
  padding: 10px;
  border: none;
  color: #fff;
  width: 120px;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default Branch_Topnav;