import React from 'react';
import styled from 'styled-components';
// import LeftMenuBar from '../components/LeftMenuBar';
// import TopNavbar from '../components/TopNavbar';
import School_Menu_bar from '../components/school_Menu_bar';
import School_Topnav from '../components/School_Topnav';
import { Outlet } from 'react-router-dom';
import Teacher_menubar from '../components/Teacher_menubar';
import Teacher_logout from '../components/Teacher_logout';

const Teacher_Layout = () => {
    return (
        <Layouts>
            <Teacher_menubar />
            <Teacher_logout />
            <Content>
                <Outlet/>
            </Content>

        </Layouts>
    )
}

const Layouts = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    

`;

const Content = styled.div`
    position: absolute;
    top: 70px;
    left: 16%;
    width: 84%;
    height: 875px;
    /* z-index: -1; */
    
`


export default Teacher_Layout;
