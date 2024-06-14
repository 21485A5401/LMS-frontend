import Subject_Topmenu from "../components/Subject_Topmenu";
import styled from "styled-components";
import MenueIcon from "../Assets/MenueIcon.png";
import './Add_Subject.css';
import DragNdrop from "../components/DragNDrop";
import { useState } from "react";
import Teachers_Topnav from "../components/Teachers_Topnav";
import { Navigate, useNavigate } from "react-router-dom";
import instance from "../Utils/api";

function CustomeInput({LabelName, placeholder, onChange, value, required=true, id}){
    return (
        <div className="styled-input" id={id} style={{display:'flex', flexDirection:'column'}}>
            <label >{LabelName}</label>
            <input 
                placeholder={placeholder}  
                required={required}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

function CustomeTextarea({LabelName, placeholder, onChange, value, required=true, id}){
    return (
        <div className="styled-input" id={id} style={{display:'flex', flexDirection:'column'}}>
            <label >{LabelName}</label>
            <textarea 
                placeholder={placeholder}  
                required={required}
                onChange={onChange}
                value={value}
                rows={4}
            />
        </div>
    )
}

export default function Add_Subject(){
    // const [files, setFiles] = useState([]);
    // console.log(files);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    
    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: title,
            description
        }
        try {
            const response = await instance.post('/api/v1/subjects/create_subject',data);
            console.log(response)
            alert('Successfully added the Subject')
            navigate('/Admin/Subjects_list');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <Teachers_Topnav Title={'Add Subject'}/>
            <form className="add-subject-container" onSubmit={handleSubmit}>
                <div style={{display:'flex', alignItems:'center', gap:'40px'}}>
                    <div className="add-subject-container-top-left">
                        <CustomeInput id="add-subject-container-top-left-title" 
                            LabelName='Title' 
                            placeholder='Type here'
                            onChange={(e) => setTitle(e.target.value)} 
                            value={title}
                        />
                        <CustomeTextarea id="add-subject-container-top-left-description" 
                            LabelName='Description' 
                            placeholder='Type here'
                            onChange={(e) => setDescription(e.target.value)} 
                            value={description} 
                        />
                    </div>
                    {/* <div>
                        <DragNdrop onFilesSelected={setFiles} width="394px" height='108px'/>
                    </div> */}
                </div>
                {/* <div>
                    <label style={{fontWeight:'700'}}>Subject Content</label>
                    <div style={{display:'flex', flexDirection:'column', gap:'20px', marginTop:'10px'}}>
                        <div className="add-subject-base-styled-div">
                            <p>Chapter 1</p>
                            <CustomeInput className='add-subject-base-styled-div-input'
                                LabelName='Title' placeholder='Type here'/>
                        </div>
                        <div className="add-subject-base-styled-div">
                            <p>Chapter 2</p>
                            <CustomeInput className='add-subject-base-styled-div-input'
                                LabelName='Title' placeholder='Type here'/>
                        </div>
                    </div>
                </div>
                <div className="add-subject-base-styled-div Chapter-add">
                    <p>+ Add Chapter</p>
                </div> */}
                <div className="exam-buttons-list">
                    <button className="button-3">Publish Course</button>
                </div>
            </form>
        </>
    )
}
