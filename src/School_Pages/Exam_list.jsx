import React from 'react';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import './Exam_list.css';
import { useState, useEffect } from 'react';
import instance from '../Utils/api';
import Teachers_Topnav from '../components/Teachers_Topnav';
import { useNavigate } from 'react-router-dom';



const Exam_list = () => {
    const [name, setName] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const formData = async () => {
        try {
            const response = await instance.get("api/v1/exams/");
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
            <div className="Exam-list-container">
                <Teachers_Topnav
                    Title='Exam list'
                    buttonName='Add Exam' buttonpath='/Teacher/Exams'
                    exportButton={true}
                />
                <TeacherSearchFilter />
                <table className='Exam-list-table'>
                    <thead className='Exam-list-thead'>
                        <tr>
                            <th>Exam Name</th>
                            <th>Subject</th>
                            <th>Exam Status</th>
                            <th>Exam Data</th>
                            <th>Exam Time</th>
                            <th>Created on</th>
                            <th>Created by</th>
                        </tr>
                    </thead>
                    <tbody className='Exam-list-tbody'>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td onClick={()=>{navigate(`/Teacher/Results_page/${row._id}`)}} style={{cursor:'pointer'}}>
                                    {row.name}
                                </td>
                                <td>{row.subject.name}</td>
                                <td>{row.examStatus}</td>
                                <td>{new Date(row.examDate).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</td>
                                <td>{row.examTime}</td>
                                <td>{new Date(row.createdAt).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</td>
                                <td>{row.createdBy.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Exam_list;