import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Subject_Topmenu from '../components/Subject_Topmenu';
import instance from '../Utils/api';

const Subjects_list = () => {
    const [data, setData] = useState([]);
    const formData = async () => {
        try {
            const response = await instance.get("api/v1/subjects/");
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
        formData();
    }, [])
    return (
        <div>
            <Subject_Topmenu />
            <Table>
                <Thead>
                    <tr>
                        <th>Subject Name</th>
                        {/* <th>Duration</th> */}
                        <th>Created Date</th>
                    </tr>
                </Thead>
                <Tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            {/* <td>{row.duration}</td> */}
                            <td>{new Date(row.createdAt).toLocaleDateString()}</td>
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
    margin-top: 30px;
    border-spacing: 0;
    color: #4F4F4F;
    border-collapse: collapse;
    border-radius: 10px;
    /* border: 1px solid black; */
    
`

const Thead = styled.thead`
    width: 100%;
    
    & th{
        text-align: start;
        padding: 10px 10px;
        font-weight: 700;
        font-size: 14px;
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

export default Subjects_list
