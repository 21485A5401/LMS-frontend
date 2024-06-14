import React from 'react';
import styled from 'styled-components';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import Teacher_Topnav from '../components/Teacher_Topnav';
import Default from '../Assets/default.png';
import instance from '../Utils/api';
import Admin_Filter from '../components/Admin_Filter';
import { useNavigate } from 'react-router-dom';
// import 'dotenv/config';


const Teachers_List = () => {
  const [data, setData] = useState([]);
  // const [subject,setSubject] = useState([]);
  const navigate = useNavigate();
  const formData = async () => {
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          "x-token": token
        }
      }
      const response = await instance.get("api/v1/teachers/teachers");
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
  // const handleSubject = async()=>{
  //   try{
  //     const response = await instance.get(`api/v1/subjects/${data[0].subject}`);
  //     console.log(response);
  //     set
  //   }catch(error){
  //     if (error.response && error.response.data) {
  //       alert(JSON.stringify(error.response.data)); // Display error message
  //     } else {
  //       alert('An error occurred'); // Display generic error message
  //     }
  //   }
  // }
  useEffect(() => {
    formData();
  }, [])
  return (
    <div>
      <Teacher_Topnav />
      {/* <TeacherSearchFilter /> */}
      {/* <Admin_Filter /> */}
      <Table>
        <Thead>
          <tr>
            <th>Name</th>
            <th>Teacher Id</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Gender</th>
          </tr>

        </Thead>



        <Tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => { navigate(`/Admin/Teacher_Profile/${row._id}`) }}>
                <img src={Default} alt='profile pic' style={{ width: '24px', height: '24px' }} />
                {row.name}
              </td>
              <td>{row.teacherId}</td>
              <td>{row.subject.name}</td>
              <td>{row.classLevels[0].name}</td>
              <td>{row.email}</td>
              <td>{row.phone_no}</td>
              <td>{row.gender}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

const Table = styled.table`
    width:90%;
    background-color: #63a2d5;
    margin-left: 60px;
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

export default Teachers_List;
