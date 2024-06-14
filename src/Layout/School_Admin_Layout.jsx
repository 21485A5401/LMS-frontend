import React from 'react';
import styled from 'styled-components';
import TopNavbar from '../components/TopNavbar';
import { Outlet } from 'react-router-dom';
import School_Admin_Leftmenu from '../components/School_Admin_Leftmenu';
import Branch_Topnav from '../components/Branch_Topnav';

const School_Admin_Layout = () => {
    return (
        <Layouts>
            <School_Admin_Leftmenu />
            <Branch_Topnav />
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


export default School_Admin_Layout;
