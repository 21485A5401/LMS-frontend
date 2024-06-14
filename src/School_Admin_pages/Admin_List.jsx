import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import styled from 'styled-components';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import instance from '../Utils/api';
import Admin_Filter from '../components/Admin_Filter';
import { useNavigate } from 'react-router-dom';


const Admin_List = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([]);

    const fetchData = async () => {

        try {
            const token = Cookies.get("token");
            const config = {
                headers: {
                    'x-token': token
                }
            }
            const response = await instance.get("app/v1/school-admins/admins");
            console.log(response);
            if (response) {
                // const data = await response.json();
                // console.log(response.data.data);
                setData(response.data.data);
            } else {
                alert("Failed to fetched Branches data");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            // alert("Error while Fetcheing Data",error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Beside>
                {/* <h1>Branches List</h1> */}
                <Top>
                    <h1>School Branches</h1>
                    <LogoutButton onClick={()=>{navigate('/SchoolAdmin/Branches')}}>Add Branch Admin</LogoutButton>
                </Top>
                <Con>
                    <SuperTable>
                        {/* <TeacherSearchFilter /> */}
                        <Admin_Filter />
                        <Table>
                            <Thead>
                                <tr>
                                    <th>Branch Name</th>
                                    <th>Sp.Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Gender</th>
                                    <th>Experience</th>
                                    <th>Location</th>
                                    
                                </tr>
                            </Thead>
                            <Tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.branchname}</td>
                                        <td>{row.superintendentname}</td>
                                        <td>{row.email}</td>
                                        <td>{row.phonenumber}</td>
                                        <td>{row.gender}</td>
                                        <td>{row.experience}</td>
                                        <td>{row.location}</td>
                                        

                                    </tr>
                                ))}
                            </Tbody>
                        </Table>
                    </SuperTable>
                </Con>
            </Beside>

        </div>
    )
}

const Top = styled.div`
    display: flex;
    justify-content: space-between;

`

const LogoutButton = styled.button`
  font-family: Kumbh Sans, sans-serif;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--Project-secondary-300, #509cdb);
  padding: 10px;
  border: none;
  color: #fff;
  width: 170px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SuperTable = styled.div`
    width: 90%;
    height: 700px;
    background-color: #fff;
    padding: 10px;
    margin-top:30px ;
`

const Con = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`
const Beside = styled.div`
    background-color: #e8e6e6;
    height: 876px;
    & h1{
        margin: 0px;
        color: #4F4F4F;
        padding-top: 30px;
        padding-left: 50px;
    }
    
`
// const Tbody = styled.tbody`
//     & td{
//         padding: 10px 0px;
//     }
// `





const Table = styled.table`
    width:90%;
    margin-left: 50px;
    margin-top: 10px;
    margin-right: 50px;
    border-spacing: 0;
    border-collapse: collapse;
    border-radius: 10px;
    background-color: #63a2d5;
    
`

const Thead = styled.thead`
    width: 100%;
    
    & th{
        text-align: start;
        padding: 10px 10px;
        color: white;
        /* background-color: #E3F2FF; */
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



export default Admin_List;