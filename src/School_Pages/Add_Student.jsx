import * as React from "react";
import styled from "styled-components";
import Student_Topmenu from "../components/Student_Topmenu";
import TeacherSearchFilter from "../components/TeacherSearchFilter";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import instance from "../Utils/api";

const Add_Student = () => {
  const navigate = useNavigate();
  const [name, setName] = useState([]);
  const [data, setData] = useState({
    name: "",
    gender: "",
    email: "",
    classLevels: [""],
    section: "",
    phonenumber: "",
    password: ""
  });
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
      const response = await instance.post("api/v1/admins/student/register", data);
      alert(response.data.message);
      navigate('/Admin/Student_list');
    } catch (error) {
      console.log("Error", error);
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data.message)); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
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
  console.log(name);

  return (
    <>
      {/* <Student_Topmenu /> */}
      {/* <TeacherSearchFilter /> */}
      <PageWrapper >
        <PageTitle>Add Students</PageTitle>
        {/* <AddMethodWrapper>
          <AddMethodButton>Manually</AddMethodButton>
          <AddMethodButton>Import CSV</AddMethodButton>
        </AddMethodWrapper> */}

        <StudentForm type='submit' onSubmit={handleSubmit} required>

          <First>
            <PhoneNumberWrapper>
              <PhoneNumberLabel>Name*</PhoneNumberLabel>
              <PhoneNumberInput type="text" placeholder="Enter your Name" name="name" onChange={handleChange} required/>
            </PhoneNumberWrapper>
            <PhoneNumberWrapper>
              <PhoneNumberLabel>Gender*</PhoneNumberLabel>
              <PhoneNumberSelect name="gender" onClick={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </PhoneNumberSelect>
            </PhoneNumberWrapper>
          </First>
          <ClassSectionWrapper>
            <PhoneNumberWrapper>
              <PhoneNumberLabel>Class*</PhoneNumberLabel>
              <PhoneNumberSelect name="classLevels" onChange={handleChange} defaultValue="" required>
                <option value="" >Select Class</option>
                {name.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </PhoneNumberSelect >
            </PhoneNumberWrapper>
            <PhoneNumberWrapper>
              <PhoneNumberLabel>Section</PhoneNumberLabel>
              <PhoneNumberInput type="text" placeholder="Enter your section" name="section" onChange={handleChange} />
            </PhoneNumberWrapper>
            <PhoneNumberWrapper>
              <PhoneNumberLabel>Email*</PhoneNumberLabel>
              <PhoneNumberInput type="email" placeholder="Enter your email" name="email" onChange={handleChange} required />
            </PhoneNumberWrapper>
          </ClassSectionWrapper>
          <StudentDetailsWrapper>
            <StudentDetailsColumn>
              <PhoneNumberWrapper>
                <PhoneNumberLabel>Phone number*</PhoneNumberLabel>
                <PhoneNumberInput type="number" placeholder="Enter Parents Number" name="phonenumber" onChange={handleChange} required />

              </PhoneNumberWrapper>
            </StudentDetailsColumn>
            <StudentDetailsColumn>
              <PasswordWrapper>
                <PasswordLabel>Password*</PasswordLabel>
                <PasswordInput type="password" placeholder="Enter Your password" name="password" onChange={handleChange} required />
              </PasswordWrapper>
            </StudentDetailsColumn>
          </StudentDetailsWrapper>
          <AddStudentButtonWrapper>
            {/* <AddAnotherButton>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf5dbd3fc2e7c149487d1f89e7a878603c5718902101122c8f0ae5b4415f83f8?apiKey=00c981949ae441738146aeab96db3c11&" alt="Add another student icon" />
              <span>Add another</span>
            </AddAnotherButton> */}
            <CancelButton onClick={() => navigate('/Admin/Student_list')}>Cancel</CancelButton>
            <AddTeacherButton >Submit</AddTeacherButton>
          </AddStudentButtonWrapper>
        </StudentForm>
      </PageWrapper >
    </>
  );
};

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

const PhoneNumberSelect = styled.select`
  width: 100%;
  height: 42px;
  border: 1px solid #A7A7A7;
  margin-top: 9px;
`

const First = styled.div`
    display: flex;
    gap: 20px;
`
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 713px;
  padding: 0 20px;
  margin-left: 165px;
  margin-top: 20px;
`;

const PageTitle = styled.h1`
  color: var(--Grey-400, #4f4f4f);
  font: 600 32px Kumbh Sans, sans-serif;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AddMethodWrapper = styled.div`
  color: var(--Grey-400, #4f4f4f);
  display: flex;
  font-size: 18px;
  font-weight: 500;
  gap: 20px;
  justify-content: space-between;
  margin-top: 42px;
  max-width: 100%;
  width: 247px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const AddMethodButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
`;

const FormLabel = styled.label`
  color: var(--Grey-200, #8a8a8a);
  font: 500 14px Kumbh Sans, sans-serif;
  margin-top: 58px;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
  }
`;

const StudentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 53px;
  margin-top: 7px;
  width: 100%;
`;

const NameInput = styled.input`
  border: 1px solid rgba(167, 167, 167, 1);
  border-radius: 4px;
  height: 42px;
  width: 248px;
  padding: 0px 7px;
`;

const GenderSelect = styled.select`
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(167, 167, 167, 1);
  border-radius: 4px;
  display: flex;
  gap: 11px;
  padding: 13px 16px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const GenderLabel = styled.span`
  color: var(--Grey-50, #c4c4c4);
  font: 500 14px Kumbh Sans, sans-serif;
`;

const ClassSectionWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ClassSelect = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(167, 167, 167, 1);
  border-radius: 4px;
  display: flex;
  flex: 1;
  gap: 11px;
  padding: 13px 16px;

  @media (max-width: 991px) {
    padding-right: 20px;
    white-space: initial;
  }
`;

const ClassLabel = styled.span`
  color: var(--Grey-50, #c4c4c4);
  font: 500 14px Kumbh Sans, sans-serif;
`;

const SectionSelect = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(167, 167, 167, 1);
  border-radius: 4px;
  display: flex;
  flex: 1;
  gap: 11px;
  padding: 13px 16px;

  @media (max-width: 991px) {
    padding-right: 20px;
    white-space: initial;
  }
`;

const SectionLabel = styled.span`
  color: var(--Grey-50, #c4c4c4);
  font: 500 14px Kumbh Sans, sans-serif;
`;

const StudentDetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
    max-width: 100%;
  }
`;

const StudentDetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PhoneNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const PhoneNumberLabel = styled.label`
  color: var(--Grey-200, #8a8a8a);
  font: 500 14px Kumbh Sans, sans-serif;
`;

const PhoneNumberInput = styled.input`
  border: 1px solid rgba(167, 167, 167, 1);
  border-radius: 4px;
  height: 42px;
  margin-top: 9px;
  padding: 0px 7px;
`;

const AddStudentButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  /* justify-content: space-between;
  margin-top: 59px; */
  padding: 0 1px;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const AddAnotherButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: var(--Grey-400, #4f4f4f);
  cursor: pointer;
  display: flex;
  font: 500 16px Kumbh Sans, sans-serif;
  gap: 10px;
  margin: auto 0;
  padding: 0;
`;

const AddStudentButton = styled.button`
  background-color: var(--Grey-10, #f1f1f1);
  border: none;
  border-radius: 4px;
  color: var(--Grey-400, #4f4f4f);
  cursor: pointer;
  font: 600 14px Kumbh Sans, sans-serif;
  justify-content: center;
  padding: 12px 14px;
  text-align: center;
  width: 131px;
  height: 41px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const PasswordLabel = styled.label`
  color: var(--Grey-200, #8a8a8a);
  font: 500 14px Kumbh Sans, sans-serif;
`;

const PasswordInput = styled.input`
  border: 1px solid rgba(167, 167, 167, 1);
  border-radius: 4px;
  height: 42px;
  margin-top: 9px;
  padding: 0px 7px;
`;

export default Add_Student;