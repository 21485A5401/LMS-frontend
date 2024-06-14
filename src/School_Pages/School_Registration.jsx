import React from 'react';
import Backgroud_img from '../Assets/Backgroudimg.png';
import styled from 'styled-components';

const School_Registration = () => {
    return (
        <Main>
            <Img src={Backgroud_img} alt='Background Image' />
            <Log>
                <Login>
                    <LoginPageWrapper>
                        <LoginPageTitle>Welcome, create your school account</LoginPageTitle>

                        <LoginForm>
                            <center>
                                <LoginFormTitle>It is our great pleasure to have you on board!</LoginFormTitle></center>
                                <Passwords>
                            <LoginInput type="text" placeholder="Enter the name of admin" />
                            <LoginInput type="text" placeholder="Enter the name of school" />
                            </Passwords>
                            <Passwords>
                            <LoginInput type="text" placeholder="Enter the name of school" />
                            <LoginInput type="email" placeholder="Enter the school email" />
                            </Passwords>
                            <Passwords>
                            <LoginInput type="number" placeholder="Number of staff" />
                            <LoginInput type="text" placeholder="School address" />
                            </Passwords>
                            <Passwords>
                                <Choosepass>
                                <LoginInputLabel>Choose a password</LoginInputLabel>
                                <LoginPasswordInputWrapper>
                                    <LoginPasswordInput type="password" placeholder='Enter Your Password' />
                                    <EyeIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8f1c44acad6ed5730e79060bffccf31ac60bc5398f53a188aec092b8f1b1e7?apiKey=00c981949ae441738146aeab96db3c11&" alt="Toggle password visibility" />
                                </LoginPasswordInputWrapper>
                                </Choosepass>
                                <Choosepass>
                                <LoginInputLabel>Confirm password</LoginInputLabel>
                                <LoginPasswordInputWrapper>
                                    <LoginPasswordInput type="password" placeholder='Enter Your Password' />
                                    <EyeIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8f1c44acad6ed5730e79060bffccf31ac60bc5398f53a188aec092b8f1b1e7?apiKey=00c981949ae441738146aeab96db3c11&" alt="Toggle password visibility" />
                                </LoginPasswordInputWrapper>
                                </Choosepass>
                            </Passwords>
                            <LoginInputLabel>Must be at least 8 characters.</LoginInputLabel>
                            <LoginButton>Next</LoginButton>
                            <SignUpLink>
                                Already have an account? <SignUpLinkHighlight>Sign up</SignUpLinkHighlight>
                            </SignUpLink>
                            
                        </LoginForm>
                    </LoginPageWrapper>
                </Login>
            </Log>
        </Main>
    )
}

const Passwords = styled.div`
    display: flex;
    gap: 10px;
`
const Choosepass = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Main = styled.div`
    overflow: hidden;
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
  width: 100%;

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


export default School_Registration;