import React from 'react'
import styled from 'styled-components';

const Upload_Subject_Details = () => {
    return (
        <Subject>
            <h1>Upload Subject Details</h1>
            <Title>
                <label>Title</label>
                <input type='text' placeholder='Subject Title' />
            </Title>
            <Description>
                <label>Description</label>
                <textarea type='text' placeholder='Description' />
            </Description>
            <Content>
                <label>Subject Content</label>
                <Chapters>
                    <Chapterslist><p>Chapter 1</p><b>Title</b><input type='text' placeholder='Type Here' /></Chapterslist>
                    <Chapterslist><p>Chapter 1</p><b>Title</b><input type='text' placeholder='Type Here' /></Chapterslist>
                    <button>Add Chapter</button>
                </Chapters>
            </Content>
            <Buttondiv>
                <Button>Publish Course</Button>
            </Buttondiv>
        </Subject>
    )
}
const Chapterslist = styled.div`
    display: flex;
    border: 1px solid ;
    width: 640px;
    border-radius: 10px;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
    & input{
        width: 455px;
        padding: 12px;
        border-radius: 10px;
        border-color: #000000 19%;
    }
`
const Buttondiv = styled.div`
    display: flex;
    
    justify-content: flex-end;
    margin-right: 207px;
`
const Button = styled.button`
    width: 169px;
    height: 49px;
    background-color: #2B59CE;
    color: #fff;
    border: none;
    border-radius: 10px;
`
const Chapters = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border:1px solid #000000 19%;
    
    & button{
        width: 151px;
        height: 48px;
        border-radius: 10px;
        border: 1px solid #F90909;
        color: #F90909;
    }
`

const Subject = styled.div`
    margin-left: 65px;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 405px;
    & input{
        padding: 10px;
        border-radius: 10px;
    }
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 405px;
    margin-top: 23px;
    & textarea{
        height: 145px;
        border-radius: 10px;
        padding: 10px;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 10px;
`
export default Upload_Subject_Details;
