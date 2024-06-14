import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import instance from "../Utils/api";

function Add_Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    superintendentname: "",
    location: "",
    branchname: "",
    address: "",
    phonenumber: "",
    gender: "",
    qualification: "",
    experience: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const config = {
        headers:{
          'x-token':token
        }
      }
      const response = await instance.post("app/v1/school-admins/schoolAdmin/register", data);
      console.log(response.data);
      alert(response.data.message);
      navigate('/SchoolAdmin/Admin_List');
    } catch (error) {
      console.log("Error", error);
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data)); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
    }
  }
  return (
    <Beside>
      <Con>
        <Container type='submit' onSubmit={handleSubmit}>
          <Header>
            <Title>Add Branch Admin</Title>
            {/* <ActionButtons>
          <Button>Manually</Button>
          <Button>Import CSV</Button>
        </ActionButtons> */}
            <DForm>
              <Label>Superintendent name*</Label>
              <Input placeholder="Enter Superintendent name" name="superintendentname" onChange={handleChange} required/>
            </DForm>
          </Header>
          <Content>
            {/* <LeftColumn>
          
        </LeftColumn> */}
            <RightColumn>
              <SFormGroup>
                <FormGroup>
                  <Label>Location*</Label>
                  <Input type="text" placeholder="Location" name="location" onChange={handleChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label>Branch name*</Label>
                  <Input type="text" placeholder="Branch Name" name="branchname" onChange={handleChange} required/>
                </FormGroup>
              </SFormGroup>
              {/* <FormGroup>
                <Label>Address</Label>
                <Input type="text" placeholder="Enter School Address" name="address" onChange={handleChange} />
              </FormGroup> */}
              <FInputRow>
                <FormGroup>
                  <Label>Email*</Label>
                  <Input type="email" placeholder="Enter the email" name="email" onChange={handleChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label>Phone number*</Label>
                  <Input type="Number" placeholder="Enter phone number" name="phonenumber" onChange={handleChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label>Gender*</Label>
                  <Select name="gender" onChange={handleChange} required>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </FormGroup>
              </FInputRow>
              <FormGroup>
                <Label>Qualification details*</Label>
                <Input type="text" placeholder="Enter Qualification details" name="qualification" onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label>Experience*</Label>
                <Input type="text" placeholder="Enter Experience details" name="experience" onChange={handleChange} required/>
              </FormGroup>
              <InputRow>

              </InputRow>
            </RightColumn>
          </Content>
          <Footer>
            <Button variant="secondary" onClick={() => { navigate("/SchoolAdmin/dashboard") }}>Cancel</Button>
            <Button variant="primary" type="submit" >Submit</Button>
          </Footer>
        </Container>
      </Con>
    </Beside>
  );
}



const Con = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`
const Beside = styled.div`
    background-color: #e9e9e9;
    height: 100%;
    
`

const SFormGroup = styled.div`
  display  :flex ;
  flex-direction: row;
  gap: 20px;
`;
const FFormGroup = styled.div`
    width: 329px;
    margin-bottom: 25px;
`

const FInputRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
`

const DForm = styled.div`
    width: 483px;
    margin-right: 20px;
`

const Container = styled.form`
  background-color: #fff;
  padding: 30px;
  /* padding-right: 0px; */
  /* width: 1099px; */
  width: 90%;
  margin-top: 50px;
  
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  font-family: Kumbh Sans, sans-serif;
  color: #4f4f4f;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  
  
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 500;
  font-family: Kumbh Sans, sans-serif;
  padding: 12px 14px;
  border-radius: 4px;
  border: none;
  width: 131px;
  cursor: pointer;
  
  ${props => props.variant === "primary" && `
    background-color: #509cdb;
    color: #fff;
  `}
  
  ${props => props.variant === "secondary" && `
    background-color: #fffafa;
    color: #667085;
  `}
  
  @media (max-width: 991px) {
    white-space: nowrap;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  font-family: Kumbh Sans, sans-serif;
  color: #8a8a8a;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 98%;
  padding: 13px 10px;
  font-size: 14px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  color: #667085;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 13px 10px;
  font-size: 14px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  color: #667085;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'%3E%3Cpath fill='%23C4C4C4' d='M0 0l4 4 4-4H0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 26px;
`;

export default Add_Admin;