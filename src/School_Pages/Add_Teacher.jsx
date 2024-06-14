
import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import instance from "../Utils/api";

function AddTeachers() {
  const [name, setName] = useState([]);
  const [subject, setSubject] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    designation: "",
    classLevels: [""],
    subject: "",
    gender: "",
    phone_no: "",
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          'x-token': token
        }
      }
      const response = await instance.post("api/v1/admins/admin/register", data);
      alert(response.data.message);
      navigate('/Admin/Teachers_list');
    } catch (error) {
      alert(error.message);
    }
  }
  const handleclass = async () => {
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          'x-token': token
        }
      }
      const response = await instance.get("api/v1/class-levels/");
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
    handleclass();
  }, [])

  const handleSubject = async () => {
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          'x-token': token
        }
      }
      const response = await instance.get("api/v1/subjects/");

      setSubject(response.data.data);

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
    handleSubject();
  }, [])

  return (
    <AddTeachersContainer type="submit" onSubmit={handleSubmit}>
      <AddTeachersHeader>
        <AddTeachersTitle>
          <Title>Add Teachers</Title>
          {/* <DesignationInput>
            <Label>Designation*</Label>
            <InputWrapper>
              <Input placeholder="Enter class name" type="text" name="designation" onChange={handleChange} required/>
              <DropdownIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/902498336c6a4c09994c20f8e883d94cc7835451bc07b5ce9ebec1abf18334cd?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Dropdown icon" />
            </InputWrapper>
          </DesignationInput> */}
        </AddTeachersTitle>
        <AddTeachersOptions>
          {/* <Option>Manually</Option>
          <Option>Import CSV</Option> */}
        </AddTeachersOptions>
      </AddTeachersHeader>
      <TeacherForm>
        <React.Fragment >
          <FormRow>
            <InputGroup>
              <Label>Full name*</Label>
              <InputWrapper>
                <Input placeholder="Enter the section name" type="text" name="name" onChange={handleChange} required />
                {/* <DropdownIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/37a3f9daf0eebdc567f9add151572090eff0a27e09fb0f8cf965ee9221488427?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Dropdown icon" /> */}
              </InputWrapper>
            </InputGroup>
            <InputGroup>
            <Label>Class*</Label>
              <PhoneNumberSelect name="classLevels" onChange={handleChange} defaultValue="" required>
                <option value="" >Select Class</option>
                {name.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </PhoneNumberSelect >
            </InputGroup>
            <InputGroup>
              <Label>Subject*</Label>
              <PhoneNumberSelect name="subject" onChange={handleChange} defaultValue="" required>
                <option value="" >Select Subject</option>
                {subject.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </PhoneNumberSelect >
            </InputGroup>
          </FormRow>
          <FormRow>
            <InputGroup>
              <Label>Email*</Label>
              <InputWrapper>
                <Input placeholder="Enter the email" type="text" name="email" onChange={handleChange} required />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <Label>Phone number*</Label>
              <InputWrapper>

                <Input placeholder="Enter phone number" type="Number" name="phone_no" onChange={handleChange} required />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <Label>Gender*</Label>
              
                <PhoneNumberSelect name="gender" onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </PhoneNumberSelect>
                
            </InputGroup>
          </FormRow>
        </React.Fragment>

      </TeacherForm>
      <FormActions>
        {/* <AddAnotherButton>
          <AddIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/42fdba6cbd73951b3e6abdc2d4caacfeac0000a134456322a8d57562cbc6a9c1?apiKey=eb7f15f1bc7c491391257f0dd51005fc&" alt="Add icon" />
          <span>Add another</span>
        </AddAnotherButton> */}
        <CancelButton onClick={()=>navigate('/Admin/Teachers_list')}>Cancel</CancelButton>
        <AddTeacherButton >Submit</AddTeacherButton>
        {/* <SubmitActions>
          <CancelButton>Cancel</CancelButton>
          <SubmitButton>Submit</SubmitButton>
        </SubmitActions> */}
      </FormActions>
    </AddTeachersContainer>
  );
}

// const CancelButton = styled.button`
//   font-size: 14px;
//   font-weight: 600;
//   font-family: Kumbh Sans, sans-serif;
//   color: #667085;
//   background-color: #fffafa;
//   border: none;
//   border-radius: 4px;
//   padding: 12px 14px;
//   cursor: pointer;
//   width: 131px;
// `;
const PhoneNumberSelect = styled.select`
  width: 100%;
  height: 42px;
  border: 1px solid #A7A7A7;
  margin-top: 9px;
  padding-left: 10px;
`

const Select = styled.select`
  width: 100%;
  border: none;
  outline: none;
`;

const AddTeachersContainer = styled.form`
  background-color: #fff;
  padding: 30px;
  margin-left: 31px;
  margin-right: 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const AddTeachersHeader = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AddTeachersTitle = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Title = styled.h1`
  font: 600 32px Kumbh Sans, sans-serif;
  color: #4f4f4f;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AddTeachersOptions = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 249px;
  max-width: 100%;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
`;

const Option = styled.span`
  font-family: Kumbh Sans, sans-serif;
  cursor: pointer;
`;

const DesignationInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 400px;
  /* margin: 40px 0; */
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  color: #8a8a8a;
  font-family: Kumbh Sans, sans-serif;
  font-weight: 500;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  margin-top: 8px;
  padding: 13px 10px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Input = styled.input`
  font-family: Inter, sans-serif;
  flex: 1;
  border: none;
  outline: none;
  color: #667085;
  &::placeholder {
    color: #667085;
  }
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const DropdownIcon = styled.img`
  width: 8px;
  margin: auto 0;
`;

const TeacherForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 14px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 26px;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const AddAnotherButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
  background: none;
  border: none;
  cursor: pointer;
  width: 150px;
`;

const AddIcon = styled.img`
  width: 24px;
`;

const AddTeacherButton = styled.button`
  justify-content: center;
  border-radius: 4px;
  background-color: var(--Project-secondary-300, #509cdb);
  text-align: center;
  padding: 12px 14px;
  font: 600 14px Kumbh Sans, sans-serif;
  border: none;
  cursor: pointer;
  color: white;
  width: 150px;
  height: 40px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SubmitActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const CancelButton = styled.button`
  font-family: Kumbh Sans, sans-serif;
  justify-content: center;
  border-radius: 4px;
  background-color: #fffafa;
  color: #667085;
  padding: 12px 14px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SubmitButton = styled.button`
  font-family: Kumbh Sans, sans-serif;
  justify-content: center;
  border-radius: 4px;
  background-color: #509cdb;
  color: #fff;
  padding: 12px 14px;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default AddTeachers;