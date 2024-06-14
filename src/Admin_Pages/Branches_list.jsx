import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import styled from 'styled-components';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import instance from '../Utils/api';



const Branches_list = () => {
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
                <h1>Branches List</h1>
                <Con>
                    <SuperTable>
                        <TeacherSearchFilter />
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
    background-color: #eae4e4;
    height: 876px;
    
    & h1{
        margin: 0px;
        color: #4F4F4F;
        padding-top: 30px;
        padding-left: 50px;
    }
    
`
const Tbody = styled.tbody`
    & td{
        padding: 10px 0px;
    }
`





const Table = styled.table`
    width:90%;
    margin-left: 50px;
    margin-top: 10px;
    margin-right: 50px;
    
`

const Thead = styled.thead`
    width: 100%;
    
    & th{
        text-align: start;
        padding: 10px 10px;
        background-color: #E3F2FF;
    }
`



export default Branches_list;