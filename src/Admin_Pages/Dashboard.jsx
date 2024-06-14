import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Cookies from "js-cookie";
import instance from "../Utils/api";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const data = [
  {
    title: "Add School Admin",
    description:
      "Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8dbbb9a40f801f49b1435a0b0e7e46daf879ae24755cddc4a63f5a928e5d6549?apiKey=00c981949ae441738146aeab96db3c11&",
    link: '/SuperAdmin/Superinendent'
  }
];

function Dashboard() {
  const token = Cookies.get('token');
  const [superAdmin, setSuperAdmin] = useState([]);
  const tokenId = jwtDecode(token);
  // console.log(tokenId);
  // if(token){
  //   toast("Super Admin Login Sucessfully");
  // }
  const formData = async () => {
    try {
      const response = await instance.get(`app/v1/superAdmins/${tokenId.id}`);
      // console.log(response.data.data.name);
      setSuperAdmin(response.data.data);
    } catch (error) {
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data)); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
    }
  }
  useEffect(() => {
    formData();
  }, [])
  return (
    <DashboardContainer>
      <DashboardTitle>Welcome to your dashboard, Mr.{superAdmin.name}</DashboardTitle>
      <DashboardContent>
        <UserEmail>{superAdmin.email}</UserEmail>
        {data.map((item, index) => (
          <NavLink to={item.link} style={{ textDecoration: 'none', color: "black" }}>
            <FeatureItem key={index}>
              <FeatureIcon src={item.icon} alt="" />
              <FeatureContent>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureDescription>{item.description}</FeatureDescription>
              </FeatureContent>
            </FeatureItem>
          </NavLink>
        ))}
      </DashboardContent>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Grey-400, #4f4f4f);
  padding: 6px;
  margin-left: 51px;
  width: 85%;
`;

const DashboardTitle = styled.h1`
  text-align: left;
  font: 600 36px Kumbh Sans, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const DashboardContent = styled.main`
  align-items: start;
  border-radius: 2px;
  background-color: #fff;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  padding: 16px;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const UserEmail = styled.p`
  align-self: stretch;
  font: 600 24px Kumbh Sans, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeatureItem = styled.section`
  display: flex;
  margin-top: 30px;
  gap: 20px;
  
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const FeatureIcon = styled.img`
  width: 36px;
  align-self: start;
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeatureTitle = styled.h2`
  font: 500 24px Kumbh Sans, sans-serif;
  margin: 0px;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeatureDescription = styled.p`
  margin-top: 16px;
  font: 400 14px/19px Kumbh Sans, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default Dashboard;