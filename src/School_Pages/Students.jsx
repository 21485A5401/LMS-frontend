import React from 'react';
import Student_Topmenu from '../components/Student_Topmenu';
import TeacherSearchFilter from '../components/TeacherSearchFilter';
import notification from '../Assets/notification.png';
import styled from 'styled-components';
import uparrow from '../Assets/uparrow.png';
import support from '../Assets/support.png';

const Students = () => {
    return (
        <div>
            <Student_Topmenu />
            <TeacherSearchFilter />

            <Content>
                <img src={notification} />
                <h1>No students at this time</h1>
                <p>Students will appear here after they enroll in your school</p>
            </Content>
            <But>
                <Button><B><img src={support} />Support</B><img src={uparrow} /></Button>
            </But>

        </div>
    )
}
const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;

& h1{
    margin: 0px;
    padding-top: 31px;
}
    & img 
    {
        width: 340px;
        height: 255px;
    }
`;
const B = styled.div`
  display: flex;
  gap: 10px;
`
const But = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 120px;
`

const Button = styled.button`
  width: 181px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: #152259;
  color: #FCFAFA;
  display: flex;
  align-items: center;
  /* gap: 10px; */
  justify-content: space-evenly;
  

`;

export default Students
