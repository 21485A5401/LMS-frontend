import { useState } from "react";
import MenueIcon from "../Assets/MenueIcon.png";
import './Exams.css'
import instance from "../Utils/api.js";
import Teachers_Topnav from "../components/Teachers_Topnav.jsx";
import { useNavigate } from "react-router-dom";

function CustomeInput({LabelName, placeholder, onChange, value, required=true}){
    return (
        <div className="styled-input" style={{display:'flex', alignItems:'center'}}>
            <label >{LabelName}:</label>
            <input 
                placeholder={placeholder}  
                required={required}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

function CustomeRadioInput({LabelName, onChange, value}){
    return(
        <div style={{display:'flex', alignItems:'center'}}>
            <input 
                type='radio' 
                name={LabelName} 
                onChange={onChange}
                checked={value === LabelName}
                />
            <label style={{width:'15px'}}>{LabelName}</label>
        </div>
    )
}

export default function AddQuestion() {
    const [question, setQuestion] = useState('');
    const [choice1, setChoice1] = useState('');
    const [choice2, setChoice2] = useState('');
    const [choice3, setChoice3] = useState('');
    const [choice4, setChoice4] = useState('');
    const [correctChoice, setCorrectChoice] = useState('');
    const [score, setScore] = useState('');
    const [points, setPoints] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            question : question,
            optionA : choice1,
            optionB : choice2,
            optionC : choice3,
            optionD : choice4,
            correctAnswer : correctChoice,
        }
        try {
            const response = await instance.post('/api/v1/questions',data);
            console.log(response)
            alert('Successfully added the Question')
            navigate('/Teacher/Questions_list')
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <Teachers_Topnav
                Title='Create Question'
            />
            <form className="exam-base-styled-div question-expanded" onSubmit={handleSubmit}>
                <div id="question-expanded-main">
                    <img src={MenueIcon} alt="menue icon"/>
                    <CustomeInput LabelName='Question ' placeholder='Define Matter.' onChange={(e) => setQuestion(e.target.value)} value={question}/>
                </div>
                <div className="question-expanded-body">
                    <div id="question-expanded-options">
                        <CustomeInput LabelName='A' placeholder='Choice 1' onChange={(e) => setChoice1(e.target.value)} value={choice1}/>
                        <CustomeInput LabelName='B' placeholder='Choice 2' onChange={(e) => setChoice2(e.target.value)} value={choice2}/>
                        <CustomeInput LabelName='C' placeholder='Choice 3' onChange={(e) => setChoice3(e.target.value)} value={choice3}/>
                        <CustomeInput LabelName='D' placeholder='Choice 4' onChange={(e) => setChoice4(e.target.value)} value={choice4}/>
                    </div>
                    <div style={{display:'flex'}}>
                        <label style={{width:'130px'}}>Correct Choice:</label>
                        <div className="question-expanded-Correct-Choice">
                            <CustomeRadioInput LabelName='A' name='correctChoice' onChange={(e) => setCorrectChoice('A')} value={correctChoice}/>
                            <CustomeRadioInput LabelName='B' name='correctChoice' onChange={(e) => setCorrectChoice('B')} value={correctChoice}/>
                            <CustomeRadioInput LabelName='C' name='correctChoice' onChange={(e) => setCorrectChoice('C')} value={correctChoice}/>
                            <CustomeRadioInput LabelName='D' name='correctChoice' onChange={(e) => setCorrectChoice('D')} value={correctChoice}/>
                        </div>
                    </div>
                    {/* <div id="question-expanded-marks">
                        <CustomeInput LabelName='Score' placeholder='' onChange={(e) => setScore(e.target.value)} value={score} required={false}/>
                        <CustomeInput LabelName='Points' placeholder='' onChange={(e) => setPoints(e.target.value)} value={points} required={false}/>
                    </div> */}
                </div>
                <div style={{display:'flex', justifyContent:'end'}}>
                    <button className="question-button">Add Question</button>
                </div>
                
            </form>
        </>
        
    )
}