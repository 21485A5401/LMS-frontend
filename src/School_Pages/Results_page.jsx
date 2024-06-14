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
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import 'dotenv/config';


const Results_page = () => {
  const [data, setData] = useState([]);
  // const [subject,setSubject] = useState([]);
  const navigate = useNavigate();
  const examId = useParams();
  console.log(examId);

  const formData = async () => {
    try {
      const response = await instance.get(`api/v1/teachers/results/${examId.examId}`);
      console.log(response.data.data);
      setData(response.data.data);
      if ((response.data.data).length == 0) {
        toast.error("No students are written this Exam");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(JSON.stringify(error.response.data)); // Display error message
      } else {
        toast.error('An error occurred'); // Display generic error message
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
  // console.log(data[0].exam.name);
  return (
    <div>
      <center>
        <h1>Student Results</h1>
      </center>
      <div>
        {data.length > 0 && (
          <HBelow>
            <p><b>Exam Name:</b> {data[0]?.exam?.name}</p>
            <p><b>Subject:</b> {data[0]?.subject}</p>
          </HBelow>
        )}
      </div>
      <Table>
        <Thead>
          <tr>
            <th>Student Name</th>
            {/* <th>Subject</th> */}
            <th>Class</th>
            {/* <th>Exam Name</th> */}
            <th>Gmail</th>
            <th>Marks</th>
            <th>Points</th>
            <th>Status</th>
          </tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <img src={Default} alt='profile pic' style={{ width: '24px', height: '24px' }} />
                {row.student.name}
              </td>
              {/* <td>{row.subject}</td> */}
              <td>{row.student.classLevels[0].name}</td>
              {/* <td>{row.exam.name}</td> */}
              <td>{row.student.email}</td>
              <td>{row.grade}/100</td>
              <td>{row.score}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}
const HBelow = styled.div`
  display: flex;
  justify-content: space-evenly;
`

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

export default Results_page;
