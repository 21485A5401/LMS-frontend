import MenueIcon from "../Assets/MenueIcon.png";
import Delete from "../Assets/Delete.png";
import './Exams.css'
import { useEffect, useState } from "react";
import Select from 'react-select';
import instance from "../Utils/api";
import Teachers_Topnav from "../components/Teachers_Topnav";
import { useNavigate } from "react-router-dom";

function CustomeInput({LabelName, placeholder, value, onChange, type, required=true}){
    return (
        <div className="styled-input" style={{display:'flex', alignItems:'center'}}>
            <label >{LabelName}:</label>
            <input 
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type ? type : 'text'}
            />
        </div>
    )
}

function CustomSelect({ LabelName, options, onChange, value, getOptionLabel, getOptionValue, isMulti, placeholder}) {
    const handleChange = (selectedOptions) => {
        onChange(selectedOptions);
    };
    return (
        <div className="questions-select-dropdown" style={{display:'flex', alignItems:'center'}}>
            {LabelName && <label >{LabelName}:</label>}
            <Select
                required
                placeholder={placeholder}
                options={options}
                getOptionLabel={getOptionLabel ? getOptionLabel : (option) => option.name}
                getOptionValue={getOptionValue ? getOptionValue : (option) => option._id}
                onChange={handleChange}
                value={value}
                isSearchable
                isMulti = {isMulti ? isMulti : false}
            />
        </div>
    );
}

export default function Exams(){
    const [questions, setQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState(null);
    const [name, setName] = useState('');
    const [academicTerms, setAcademicTerms] = useState([]);
    const [selectedAcademicTerm, setSelectedAcademicTerm] = useState('');
    const [academicYears, setAcademicYears] = useState([]);
    const [selectedAcademicYear, setSelectedAcademicYear] = useState('');
    const [classLevels, setClassLevels] = useState([]);
    const [selectedClassLevel, setSelectedClassLevel] = useState('');
    const [examDate, setExamDate] = useState('');
    const [examTime, setExamTime] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [programs, setPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    async function fetchQuestions(){
        console.log('fetch')
        try {
            const response = await instance.get('/api/v1/questions');
            const academicTermResp = await instance.get('/api/v1/academic-terms/teacher');
            const academicYearResp = await instance.get('/api/v1/academic-years/teacher');
            const classLevelResp = await instance.get('/api/v1/class-levels/teacher');
            const subjectResp = await instance.get('/api/v1/subjects/teacher');
            const programResp = await instance.get('/api/v1/programs/teacher');
            // console.log(response.data.data)
            setQuestions(response.data.data);
            setAcademicTerms(academicTermResp.data.data);
            setAcademicYears(academicYearResp.data.data);
            setClassLevels(classLevelResp.data.data)
            setSubjects(subjectResp.data.data);
            setPrograms(programResp.data.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])


    function handleRemove(question){
        setSelectedQuestions(prev => prev.filter(item => item.id !== question.id))
        console.log(question)
    }

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            name,
            description,
            subject : selectedSubject,
            program : selectedProgram,
            academicTerm : selectedAcademicTerm,
            duration,
            examDate,
            examTime,
            academicYear : selectedAcademicYear,
            classLevel : selectedClassLevel,
            questionsArray : selectedQuestions
        }
        try{
            const response = await instance.post('/api/v1/exams',data);
            console.log(response)
            alert('Successfully added the exam')
            navigate('/Teacher/Exam_list')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <Teachers_Topnav
                Title='Create Exam'
            />
            <form className="exam-container" onSubmit={handleSubmit}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <CustomeInput
                        LabelName='Exam Name'
                        placeholder='Enter Name...'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <CustomSelect
                        LabelName='Academic Term'
                        placeholder='Select Term'
                        options={academicTerms}
                        onChange={setSelectedAcademicTerm}
                        value={selectedAcademicTerm}
                    />
                    <CustomSelect
                        LabelName='Academic Year'
                        placeholder='Select Year'
                        options={academicYears}
                        onChange={setSelectedAcademicYear}
                        value={selectedAcademicYear}
                    />
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <CustomSelect
                        LabelName='Class Level'
                        placeholder='Select Year'
                        options={classLevels}
                        onChange={setSelectedClassLevel}
                        value={selectedClassLevel}
                    />
                    <CustomeInput
                        LabelName='Exam Date'
                        placeholder='Enter Date...'
                        onChange={(e) => setExamDate(e.target.value)}
                        type='date'
                        value={examDate}
                    />
                    <CustomeInput
                        LabelName='Exam Time'
                        placeholder='Enter Time...'
                        type='time'
                        onChange={(e) => setExamTime(e.target.value)}
                        value={examTime}
                    />
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <CustomSelect
                        LabelName='Subject'
                        placeholder='Select Subject'
                        options={subjects}
                        onChange={setSelectedSubject}
                        value={selectedSubject}
                    />
                    <CustomSelect
                        LabelName='Program'
                        placeholder='Select Program'
                        options={programs}
                        onChange={setSelectedProgram}
                        value={selectedProgram}
                        required={false}
                    />
                    <CustomeInput
                        LabelName='Duration'
                        placeholder='Enter duration...'
                        onChange={(e) => setDuration(e.target.value)}
                        value={duration}
                    />
                </div>
                <div id="exam-container-description">
                    <CustomeInput
                        LabelName='Description'
                        placeholder='Enter Description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <div id="exam-container-Question-select">
                    <CustomSelect
                        options={questions}
                        getOptionLabel={(option) => option.question}
                        getOptionValue={(option) => option.question}
                        onChange={setSelectedQuestions}
                        value={selectedQuestions}
                        isMulti={true}
                        placeholder="Select or search for a question..."
                    />
                </div>
                
                {selectedQuestions && selectedQuestions.map((question, index) => (
                    <div key={index} className="exam-base-styled-div question-collapsed">
                        <div className="question-collapsed-main">
                            <img src={MenueIcon} alt="menue icon" />
                            <p className="question-lable">Question {index + 1}:</p>
                            <p className="question">{question.question}</p>
                        </div>
                        <img src={Delete} alt="" className="question-collapsed-main-delete" 
                            onClick={() => {handleRemove(question)}}
                        />
                    </div>
                ))}
                {/* <div className="exam-base-styled-div question-add" onClick={handleAddQuestion}>
                    <p>+ Add Question</p>
                </div> */}
                <div className="exam-buttons-list">
                    <button className="button-1">Discard</button>
                    <button className="button-2">Keep in Draft</button>
                    <button className="button-3">Publish</button>
                </div>
            </form>
        </>
    )
}
