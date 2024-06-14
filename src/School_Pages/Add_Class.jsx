import * as React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import instance from "../Utils/api";



function Add_Class() {
  const [name, setName] = useState([]);
  const [data, setData] = useState({
    name:"",
    sectionname:"",
    roomno:"",
    teachers:""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          'x-token': token
        }
      }
      const response = await instance.post("api/v1/class-levels/", data);
      alert(response.data.message);
      navigate('/Admin/Classes');
    } catch (error) {
      console.log("Error", error);
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data)); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
    }
  }

  const handleteachers = async () => {
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          'x-token': token
        }
      }
      const response = await instance.get("api/v1/teachers/teachers");
      // const data = response.data.data;
      // const data1 = JSON.stringify(data);
      // console.log(data1);
      setName(response.data.data);
    } catch (error) {
      console.log("Error", error);
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data)); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
    }
  }
  useEffect(() => {
    handleteachers();
  }, [])
  return (
    <PageContainer type="submit" onSubmit={handleSubmit}>
      <Header>
        <Headermenu>
          <Title>Add Classes/Sections</Title>
          {/* <Action>
            <ActionButton>Manually</ActionButton>
            <ActionButton>Import CSV</ActionButton>
          </Action> */}
        </Headermenu>
        <ClassNameInput>
          <ClassNameLabel>Class*</ClassNameLabel>
          <ClassNameField type="text" placeholder="Enter new Class" name="name" onChange={handleChange} required />

        </ClassNameInput>
      </Header>

      <ClassList>
        <ClassItem >


          <SectionDetails >
            <SectionNameInput>
              <SectionNameLabel>Section name*</SectionNameLabel>
              <SectionNameField type="text" placeholder="Enter Section Name" name="sectionname" onChange={handleChange} required />

            </SectionNameInput>

            <RoomNoInput>
              <RoomNoLabel>Room No*</RoomNoLabel>
              <SectionNameField type="text" placeholder="Room no" name="roomno" onChange={handleChange} required/>
            </RoomNoInput>
          </SectionDetails>

        </ClassItem>
      </ClassList>
      <ClassInput>
        <ClassTeacherLabel>Class Teacher*</ClassTeacherLabel>
        {/* <ClassTeacherInput type="text" placeholder="Enter class teacher name" name="teacher" onChange={handleChange} /> */}
        <ClassTeacherInput name="teachers" onChange={handleChange} defaultValue="" required>
                <option value="" >Select Class</option>
                {name.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </ClassTeacherInput >
      </ClassInput>




      <Actions>
        <CancelButton onClick={()=>{navigate("/Admin/Classes")}}>Cancel</CancelButton>
        <SubmitButton >Submit</SubmitButton>
      </Actions>
    </PageContainer>
  );
}
const Action = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 31px;
`
const PhoneNumberSelect = styled.select`
  width: 100%;
  height: 42px;
  border: 1px solid #A7A7A7;
  margin-top: 9px;
`

const ClassInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`
const Headermenu = styled.div`
display: flex;
flex-direction: column;
`


const PageContainer = styled.form`
  background-color: #fff;
  padding: 30px;
  margin-left: 69px;
  margin-right: 91px;
  margin-top: 60px;
  
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const Header = styled.header`
  margin-bottom: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  font-family: Kumbh Sans, sans-serif;
  color: #4f4f4f;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 31px;
  justify-content: flex-end;
  
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const ActionButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  font-family: Kumbh Sans, sans-serif;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ClassList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ClassItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const ClassNameInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

const ClassNameLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: Kumbh Sans, sans-serif; 
  color: #8a8a8a;
`;

const ClassNameField = styled.input`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  padding: 13px 10px;
  margin-top: 8px;
  /* width: 100%; */
`;

const ClassNameText = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  color: #667085;
  flex: 1;
`;

const DropdownIcon = styled.img`
  width: 8px;
  height: 8px;
`;

const SectionDetails = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const SectionNameInput = styled.div`
  flex: 1;
`;

const SectionNameLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: Kumbh Sans, sans-serif;
  color: #8a8a8a;
`;

const SectionNameField = styled.input`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  padding: 13px 10px;
  margin-top: 8px;
  width: 97%;
`;

const SectionNameText = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  color: #667085;
  flex: 1;
`;

const RoomNoInput = styled.div`
  flex: 1;
`;

const RoomNoLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: Kumbh Sans, sans-serif;
  color: #8a8a8a;
`;

const RoomNoField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  padding: 13px 10px;
  margin-top: 8px;
`;

const RoomNoText = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  color: #667085;
  flex: 1;
`;

const ClassTeacherLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: Kumbh Sans, sans-serif;
  color: #8a8a8a;
`;

const ClassTeacherInput = styled.select`
  font-size: 14px;
  font-weight: 400;
  font-family: Inter, sans-serif;
  color: #667085;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  padding: 13px 10px;
`;

const CancelButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  font-family: Kumbh Sans, sans-serif;
  color: #667085;
  background-color: #fffafa;
  border: none;
  border-radius: 4px;
  padding: 12px 14px;
  cursor: pointer;
  width: 131px;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  font-family: Kumbh Sans, sans-serif;
  color: #fff;
  background-color: #509cdb;
  border: none;
  border-radius: 4px;
  padding: 12px 14px;
  cursor: pointer;
  width: 131px;
`;

export default Add_Class;