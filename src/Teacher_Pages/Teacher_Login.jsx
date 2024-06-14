import React, { useState } from 'react';
import Backgroud_img from '../Assets/Backgroudimg.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import instance, { updateToken } from '../Utils/api';
import { toast } from 'react-toastify';

const Teacher_Login = ({setTriggerRefresh}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post('api/v1/teachers/login', data);
      // alert(response.data.message);
      if (response.data.message === 'Invalid login credentials') {
        toast.error("Invalid login credentials");
        return;
      } else {
        const token = response.data.data;
        const Role = response.data.Role;
        // const Name = response.data.name;
        // console.log(response.data);
        Cookies.set('token', token);
        Cookies.set('Role', Role);
        updateToken(token);
        setTriggerRefresh(prev => prev+1);
        navigate('/Teacher/Dashboard');
        toast.success('Teacher Successfully Logged In');
        // window.location.reload();
      }
    } catch (error) {
      // console.log("Error", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data); // Display error message
      } else {
        toast.error('An error occurred'); // Display generic error message
      }
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Main>
      <Img src={Backgroud_img} alt='Background Image' />
      <Log>
        <Login>
          <LoginPageWrapper>
            <LoginPageTitle>Welcome, Log into you account</LoginPageTitle>

            <LoginForm type="submit" onSubmit={handleSubmit}>
              <center>
                <LoginFormTitle>It is our great pleasure to have you Login!</LoginFormTitle></center>
              <LoginInput type="text" placeholder="Enter your email or username" name='email' onChange={changeHandler} />
              <LoginInputLabel>Enter Password</LoginInputLabel>
              <LoginPasswordInputWrapper>
                <LoginPasswordInput type={showPassword ? 'text' : 'password'} placeholder='Enter Your Password' name='password' onChange={changeHandler} />
                <EyeIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8f1c44acad6ed5730e79060bffccf31ac60bc5398f53a188aec092b8f1b1e7?apiKey=00c981949ae441738146aeab96db3c11&" alt="Toggle password visibility" onClick={togglePasswordVisibility} />
              </LoginPasswordInputWrapper>
              <LoginButton>Next</LoginButton>
              {/* <SignUpLink>
                                Already have an account? <SignUpLinkHighlight>Sign up</SignUpLinkHighlight>
                            </SignUpLink> */}
            </LoginForm>
          </LoginPageWrapper>
        </Login>
      </Log>
    </Main>
  )
}

const Main = styled.div`
    overflow: hidden;
    position: fixed;
    width: 100%;
    & img{
        /* width: 100%; */
        /* height: 100%; */
        
    }
`
const Img = styled.img`
    width: 100%;
    position: relative;
    
    
`;

const Login = styled.div`
    position: absolute;
    top: 149px;
    display: flex;

`
const Log = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginPageWrapper = styled.main`
  align-self: stretch;
  display: flex;
  width: 676px;
  flex-direction: column;
`;

const LoginPageTitle = styled.h1`
  color: #fff;
  text-align: center;
  align-self: start;
  
  width: 100%;
  font: 600 36px Kumbh Sans, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LoginForm = styled.form`
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  margin-top: 25px;
  /* width: 100%; */
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  padding: 50px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const LoginFormTitle = styled.p`
  color: var(--Gray-500, #667085);
  text-align: center;
  font: 16px/25px Inter, sans-serif;
`;

const LoginInput = styled.input`
  font-family: Kumbh Sans, sans-serif;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid rgba(167, 167, 167, 1);
  margin-top: 10px;
  color: var(--Grey-200, #8a8a8a);
  padding: 13px 10px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LoginInputLabel = styled.label`
  color: var(--Grey-200, #8a8a8a);
  font-family: Kumbh Sans, sans-serif;
  margin-top: 16px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LoginPasswordInputWrapper = styled.div`
  justify-content: center;
  border-radius: 4px;
  border: 1px solid rgba(167, 167, 167, 1);
  display: flex;
  margin-top: 8px;
  /* outline: none; */
  gap: 10px;
  color: var(--Gray-500, #667085);
  font-weight: 400;
  line-height: 24px;
  padding: 13px 10px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const LoginPasswordInput = styled.input`
  font-family: Inter, sans-serif;
  flex: 1;
  border: none;
  outline: none;
  background: transparent;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const EyeIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 18px;
  margin: auto 0;
`;

const LoginButton = styled.button`
  font-family: Kumbh Sans, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #2d88d4;
  margin-top: 16px;
  color: #fff;
  font-weight: 700;
  padding: 13px 10px;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const SignUpLink = styled.p`
  color: #667085;
  text-align: center;
  align-self: center;
  margin-top: 16px;
  font: 400 12px/24px Inter, sans-serif;
`;

const SignUpLinkHighlight = styled.span`
  font-weight: 700;
  color: rgba(45, 136, 212, 1);
`;


export default Teacher_Login;