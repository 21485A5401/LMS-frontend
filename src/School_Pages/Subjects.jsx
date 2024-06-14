import React, { useEffect, useState } from 'react';
import Subject_Topmenu from '../components/Subject_Topmenu';
import Subject_card from '../components/Subject_card';
import styled from 'styled-components';
import instance from '../Utils/api';


const Subjects = () => {
    const [data, setData] = useState([]);
    const fetchSubjects = async () => {
        try {
            const response = await instance.get('api/v1/subjects/');
            // console.log(response.data.data);
            const subjects = response.data.data;
            const subjectdata = JSON.stringify(subjects)
            setData(subjects);
        } catch (error) {
            console.log("Error", error);
        }
    }
    useEffect(() => {
        fetchSubjects();
    }, []);
    console.log(data);
    return (
        <div>
            <Subject_Topmenu />
            <Cards>
                {Array.isArray(data) ? (
                    data.map(subjectslist => (
                        <Subject_card key={subjectslist.id} {...subjectslist} />
                    ))
                ) : (
                    <p>No data available</p>
                )}
                {/* <Subject_card />
                <Subject_card />
                <Subject_card />
                <Subject_card />
                <Subject_card /> */}


            </Cards>

        </div>
    )
}
const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 50px;
    /* margin: 20px; */
    width: 92%;
`

export default Subjects
