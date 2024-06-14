import React from 'react';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import './Classes.css';
import Subject_Topmenu from '../components/Subject_Topmenu';
import Default from '../Assets/default.png'
import Class_Topnav from '../components/Class_Topnav';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import instance from '../Utils/api';
import Admin_Filter from '../components/Admin_Filter';



const Classes = () => {
    const [name, setName] = useState([]);
    const [data, setData] = useState([]);
    const formData = async () => {
        try {
            const token = Cookies.get("token");
            const config = {
                headers: {
                    "x-token": token
                }
            }
            const response = await instance.get("api/v1/class-levels/");
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
    console.log(data);

    return (
        <>
            {/* <Subject_Topmenu Title={''} ButtonTitle={'Add Classes/sections'}/> */}

            <div className="classes-sections-container">
                <Class_Topnav />
                {/* <TeacherSearchFilter /> */}
                {/* <Admin_Filter /> */}
                <table className='classes-sections-table'>
                    <thead className='classes-sections-thead'>
                        <tr>
                            {/* <th>Teachers</th> */}
                            <th>Class</th>
                            <th>Section</th>
                            <th>Room No</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody className='classes-sections-tbody'>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {/* <td style={{ display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '50%' }}>
                                    <img src={Default} alt='profile pic' style={{ width: '24px', height: '24px' }} />
                                    {row.teachers}
                                </td> */}
                                <td>{row.name}</td>
                                <td>{row.sectionname}</td>
                                <td>{row.roomno}</td>
                                
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Classes;