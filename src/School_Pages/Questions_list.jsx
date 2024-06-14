import React from 'react';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import './Exam_list.css';
import { useState, useEffect } from 'react';
import instance from '../Utils/api';
import Teachers_Topnav from '../components/Teachers_Topnav';



const Questions_list = () => {
    const [name, setName] = useState([]);
    const [data, setData] = useState([]);
    const formData = async () => {
        try {
            const response = await instance.get("api/v1/questions/");
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
                    Title='Question list'
                    buttonName='Add Question' buttonpath='/Teacher/AddQuestion'
                    exportButton={true}
                />
                <TeacherSearchFilter />
                <table className='Exam-list-table'>
                    <thead className='Exam-list-thead'>
                        <tr>
                            <th>Question</th>
                            <th>created on</th>
                            <th>Created by</th>
                        </tr>
                    </thead>
                    <tbody className='Exam-list-tbody'>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    {row.question}
                                </td>
                                <td>{new Date(row.createdAt).toLocaleDateString('en-IN', { day:"numeric", month:"short", year:"numeric" })}</td>
                                <td>{row.createdBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Questions_list;