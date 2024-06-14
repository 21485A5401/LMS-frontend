import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import axios from 'axios';
import Cookies from 'js-cookie';
import Student_Topmenu from '../components/Student_Topmenu';
import Default from '../Assets/default.png';
import instance from '../Utils/api';
import Admin_Filter from '../components/Admin_Filter';
import Colleague_1 from '../Assets/Ellipse 16.png';
import Colleague_2 from '../Assets/Ellipse 17.png';
import Colleague_3 from '../Assets/Ellipse 18.png';
import Colleague_4 from '../Assets/Ellipse 19.png';
import Colleague_5 from '../Assets/Ellipse 20.png';
import avatarUrl from "../Assets/avatarUrl.png";
import emailicon from '../Assets/Frame 30087.png';
import callicon from '../Assets/Frame 30086.png';
import capicon from '../Assets/Frame 30085.png';


const Student_list = () => {
  const [data, setData] = useState([]);
  const [studentlist, setStudentlist] = useState([]);
  const [studentid, setStudentid] = useState("6638b45031f25dc46e0ccc06");
  const formData = async () => {
    try {
      const response = await instance.get("api/v1/students/students");
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data)); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
    }
  }
  useEffect(() => {
    const studentData = async () => {
      try {
        const response = await instance.get(`api/v1/students/${studentid}`);
        const data = response.data.data;
        setStudentlist(data);
      } catch (error) {
        if (error.response && error.response.data) {
          alert(JSON.stringify(error.response.data.message)); // Display error message
        } else {
          alert('An error occurred'); // Display generic error message
        }
      }
    }

    formData();
    studentData();
  }, [studentid])
  console.log(studentlist);
  return (
    <div>
      <Student_Topmenu />
      {/* <TeacherSearchFilter /> */}
      {/* <Admin_Filter /> */}
      <ProfileGrid>
        <div>
          <Table>
            <Thead>
              <tr>
                <th>Name</th>
                <th>Student ID</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Section</th>
              </tr>
            </Thead>
            <Tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => { setStudentid(row._id) }}>
                    <img src={Default} alt='profile pic' style={{ width: '24px', height: '24px' }} />
                    {row.name}
                  </td>
                  <td>{row.studentId}</td>
                  <td>{row.gender}</td>
                  <td>{row.classLevels[0].name}</td>
                  <td>{row.section}</td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </div>
        <Maindiv>
          <center>
            <Sectionid>{studentlist ? studentlist.studentId : "StudentId"}</Sectionid>
          </center>
          <img src={avatarUrl} alt="" />
          <ChildDiv>
            <SectionTitle>{studentlist ? studentlist.name : "Name"}</SectionTitle>
            <AboutText>{studentlist ? studentlist.email : "Email"}</AboutText>
          </ChildDiv>
          <ChildDiv2>
            <Iocnimg src={emailicon} alt="email icon" />
            <img src={callicon} alt="callicon" />
            <img src={capicon} alt="capicon" />
          </ChildDiv2>
          {/* <SectionTitle2>About</SectionTitle2> */}
          <Submain>
            <div>
              <SectionTitle>Mobile Number</SectionTitle>
              <AboutText>{studentlist ? studentlist.phonenumber : "9999999999"}</AboutText>
            </div>
            <div>
              <SectionTitle>Gender</SectionTitle>
              <AboutText>{studentlist ? studentlist.gender : "Mail"}</AboutText>
            </div>

          </Submain>
          <SectionTitle1>Students from the same class</SectionTitle1>
          <ColleagueWrapper>
            <ColleagueImages src={Colleague_1} alt="Colleague_1" />
            <ColleagueImage src={Colleague_2} alt="Colleague_2" />
            <ColleagueImage src={Colleague_3} alt="Colleague_3" />
            <ColleagueImage src={Colleague_4} alt="Colleague_4" />
            <ColleagueImage src={Colleague_5} alt="Colleague_5" />
            <ColleagueCount>+12 more</ColleagueCount>
          </ColleagueWrapper>
        </Maindiv>
      </ProfileGrid>

    </div>
  )
}

const Sectionid = styled.h5`
  color: var(--grey-800, #1a1a1a);
  font: 600 16px "Kumbh Sans", sans-serif;
  /* margin:0px 0px 10px 0px; */
  margin-bottom: 10px;
  margin-top: 0px;
`

const Table = styled.table`
    width:95%;
    background-color: #63a2d5;
    margin-left: 20px;
    margin-top: 10px;
    border-spacing: 0;
    border-collapse: collapse;
    border-radius: 10px;
    /* border: 1px solid black; */
    
`

const Thead = styled.thead`
    width: 100%;
    
    & th{
        text-align: start;
        padding: 10px 10px;
    }
    & tr{
        color: white;
    }
`
const Tbody = styled.tbody`
  width: 100%;
  & td{
      padding: 10px 10px;
      font-weight: 500;
      font-size: 14px;
  }
  & tr:nth-child(even) td {
  background-color: #EBF6FF;
  }

  & tr:nth-child(odd) td {
    background-color: #ffffff;
  }
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 70% 20%;
  gap: 20px; 
  margin-left: 40px;
margin-top: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
const Maindiv = styled.div`
display  : flex;
justify-content: center;
flex-direction: column;
margin-bottom: 50px;
// align-items: center;
`;
const ChildDiv = styled.div`
display  : flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin:20px 0px 35px 0px;
`

const ChildDiv2 = styled.div`
display  : flex;
justify-content: space-between;
align-items: center;
// width:150px;
width:100%;
`;
const SectionTitle = styled.h5`
  color: var(--grey-800, #1a1a1a);
  font: 600 16px "Kumbh Sans", sans-serif;
  margin:0px 0px 10px 0px;
`;

const AboutText = styled.p`
  color: var(--grey-100, #a7a7a7);
  font: 500 16px/21px "Kumbh Sans", sans-serif;
  margin:0px 0px 0px 0px;
`;
const SectionTitle2 = styled.h4`
color: var(--grey-800, #1a1a1a);
  font: 600 16px "Kumbh Sans", sans-serif;
  margin:80px 0px 120px 0px;
`
const Submain = styled.div`
display  : flex;
justify-content: space-between;
align-items: center;
width:100%;
margin-top:20px;
`
const Iocnimg = styled.img`
margin:0px 0px 0px 30px;
`
const SectionTitle1 = styled.h4`
color: var(--grey-800, #1a1a1a);
  font: 600 16px "Kumbh Sans", sans-serif;
  margin:40px 0px 0px 0px;
`

const ColleagueWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 10px;
  color: var(--project-secondary-200, #73b0e2);
  font-weight: 500;
`;

const ColleagueImage = styled.img`
  margin-left: -20px;
`;
const ColleagueImages = styled.img`
// width: 186px;
// max-width: 100%;
// aspect-ratio: 3.7;
// object-fit: cover;
// border-radius: 50%;
`;

const ColleagueCount = styled.span`
  font-family: "Kumbh Sans", sans-serif;
  margin-left: 20px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.4px;

`;

export default Student_list;
