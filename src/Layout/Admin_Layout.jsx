import React from 'react';
import styled from 'styled-components';
import LeftMenuBar from '../components/LeftMenuBar';
import TopNavbar from '../components/TopNavbar';
import { Outlet } from 'react-router-dom';

const Admin_Layout = () => {
    return (
        <Layouts>
            <LeftMenuBar />
            <TopNavbar />
            <Content>
                <Outlet />
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
    /* background-color:#E9EBF5; */
    

`;

const Content = styled.div`
    position: absolute;
    top: 70px;
    left: 16%;
    width: 84%;
    height: 875px;
    /* z-index: -1; */
    
`


export default Admin_Layout;
