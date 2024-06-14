import './App.css';
// import LeftMenuBar from './components/LeftMenuBar.jsx';
// import TopNavbar from './components/TopNavbar.jsx';
import Admin_Layout from './Layout/Admin_Layout.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Admin_Pages/Dashboard.jsx';
import Superinendent from './Admin_Pages/Superinendent.jsx';
import Branches from './Admin_Pages/Branches.jsx';
import Superinendentlist from './Admin_Pages/superinendent_list.jsx';
import Branches_list from './Admin_Pages/Branches_list.jsx';
import Admin_login from './Admin_Pages/Admin_login.jsx';
import Admin_Registration from './Admin_Pages/Admin_Registration.jsx';
import School_Registration from './School_Pages/School_Registration.jsx';
import School_Menu_bar from './components/school_Menu_bar.jsx';
import School_Topnav from './components/School_Topnav.jsx';
import School_Layout from './Layout/School_Layout.jsx';
import School_Dashboard from './School_Pages/School_Dashboard.jsx';
import TeacherSearchFilter from './components/TeacherSearchFilter.jsx';
import Student_Topmenu from './components/Student_Topmenu.jsx';
import Students from './School_Pages/Students.jsx';
import Teachers from './School_Pages/Teachers.jsx';
import Teacher_Profile from './School_Pages/Teacher_Profile.jsx';
import Add_Teacher from './School_Pages/Add_Teacher.jsx';
import Teachers_List from './School_Pages/Teachers_List.jsx';
import Student_list from './School_Pages/Student_list.jsx';
import Add_Student from './School_Pages/Add_Student.jsx';
import Subjects from './School_Pages/Subjects.jsx';
import Upload_Subject_Details from './School_Pages/Upload_Subject_Details.jsx';
import Branch_Admin_login from './School_Pages/Branch_Admin_login.jsx';
import Class from './School_Pages/Class.jsx';
import Add_Class from './School_Pages/Add_Class.jsx';
import Exams from './School_Pages/Exams.jsx';
import Add_Subject from './School_Pages/Add_Subject.jsx';
import Classes from './School_Pages/Classes.jsx';
import AddQuestion from './School_Pages/AddQuestion.jsx';
// import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import School_Login from './School_Admin_pages/School_Login.jsx';
import School_Admin_Layout from './Layout/School_Admin_Layout.jsx';
import School_Admin_Dashboard from './School_Admin_pages/School_Admin_Dashboard.jsx';
import Add_Admin from './School_Admin_pages/Add_Admin.jsx';
import Admin_List from './School_Admin_pages/Admin_List.jsx';
import Teacher_menubar from './components/Teacher_menubar.jsx';
import Teacher_Dashboard from './Teacher_Pages/Teacher_Dashboard.jsx';
import Teacher_Login from './Teacher_Pages/Teacher_Login.jsx';
import Teacher_Layout from './Layout/Teacher_Layout.jsx';
import Admin_Filter from './components/Admin_Filter.jsx';
import Exam_list from './School_Pages/Exam_list.jsx';
import Questions_list from './School_Pages/Questions_list.jsx';
import Subjects_list from './School_Pages/Subjects_list.jsx';
import { useEffect, useState } from 'react';
import Student_Results from './Teacher_Pages/Student_Results.jsx';
import Results_page from './School_Pages/Results_page.jsx';



const SuperAdminRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Admin_Layout />} >
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Superinendent' element={<Superinendent />} />
        <Route path='/Branches' element={<Branches />} />
        <Route path='/Admin_filter' element={<Admin_Filter/>} />
        <Route path='/superinendent_list' element={<Superinendentlist />} />
        <Route path='/Branches_list' element={<Branches_list />} />
      </Route>
    </Routes>
  )
}

const SchoolAdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<School_Admin_Layout />} >
        <Route path="/Dashboard" element={<School_Admin_Dashboard />} />
        <Route path="/Branches" element={<Add_Admin />} />
        <Route path='/Admin_filter' element={<Admin_Filter/>} />
        <Route path="/Admin_List" element={<Admin_List />} />
      </Route>
    </Routes>
  )
}
const TeacherRouters = () => {
  return (
    <Routes>
      <Route path='' element={<Teacher_Layout />} >
        <Route path='/Dashboard' element={<Teacher_Dashboard />} />
        <Route path='/AddQuestion' element={<AddQuestion />} />
        <Route path='/Exams' element={<Exams />} />
        <Route path='/Exam_list' element={<Exam_list />} />
        <Route path='/Questions_list' element={<Questions_list />} />
        <Route path='/Student_Results' element={<Student_Results />} />
        <Route path='/Results_page/:examId' element={<Results_page />} />
      </Route>
    </Routes>
  )
}

const AdminRoutes = () => {
  // const Role = Cookies.get('Role');
  return (
    <Routes>
      <Route path='' element={<School_Layout />} >
        <Route path='/dashboard' element={<School_Dashboard />} />
        <Route path='/Admin_filter' element={<Admin_Filter/>} />
        <Route path='/TeacherSearchFilter' element={<TeacherSearchFilter />} />
        <Route path='/Student_Topmenu' element={<Student_Topmenu />} />
        <Route path='/Students' element={<Students />} />
        <Route path='/Teachers' element={<Teachers />} />
        <Route path='/Teacher_Profile/:Id' element={<Teacher_Profile />} />
        <Route path='/Add_teacher' element={<Add_Teacher />} />
        <Route path='/Teachers_list' element={<Teachers_List />} />
        <Route path='/Student_list' element={<Student_list />} />
        <Route path='/Add_Student' element={<Add_Student />} />
        <Route path='/Subjects' element={<Subjects />} />
        <Route path='/Subjects_list' element={<Subjects_list />} />
        <Route path='/Upload_Subject_Details' element={<Upload_Subject_Details />} />
        <Route path='/Class' element={<Class />} />
        <Route path='/Add_Class' element={<Add_Class />} />
        <Route path='/Exams' element={<Exams />} />
        <Route path='/Add_Subject' element={<Add_Subject />} />
        <Route path='/Classes' element={<Classes />} />
        <Route path='/AddQuestion' element={<AddQuestion />} />
        
      </Route>
      <Route path='/School_Menu_bar' element={<School_Menu_bar />} />
      <Route path='/School_Topnav' element={<School_Topnav />} />
    </Routes >
  )
}

function App() {
  const [triggerRefresh,setTriggerRefresh] = useState();
  // useEffect(()=>{
    
  // },[triggerRefresh])
  const Role = Cookies.get('Role');
  const token = Cookies.get('token');
  let role = Role;
  let authenticated = false;
  if (token) {
    authenticated = true;
  }

  // let role = 'SuperAdminRoutes';
  // role = 'SchoolAdminRoutes';
  // let role = 'Admin';

  // authenticated = true;
  if (!authenticated) {
    return (
      <Routes>
        <Route path='/Branch_Login' element={<Branch_Admin_login setTriggerRefresh={setTriggerRefresh} />} />
        <Route path='/Admin_login' element={<Admin_login setTriggerRefresh={setTriggerRefresh} />} />
        <Route path='/School_Login' element={<School_Login setTriggerRefresh={setTriggerRefresh} />} />
        <Route path='/Teacher_login' element={<Teacher_Login setTriggerRefresh={setTriggerRefresh} />} />
        {/* <Route path='/Admin_Registration' element={<Admin_Registration />} /> */}
        {/* <Route path='/School_Registration' element={<School_Registration />} /> */}
      </Routes>
    )
  }
  else if (role === 'SuperAdmin' && authenticated) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to={'SuperAdmin/Dashboard'} />} />
        <Route path="SuperAdmin/*" element={<SuperAdminRoutes />} />
      </Routes>
    )
  }
  else if (role === 'schoolAdmin' && authenticated) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to={'SchoolAdmin/dashboard'} />} />
        <Route path="SchoolAdmin/*" element={<SchoolAdminRoutes />} />
      </Routes>
    )
  }
  else if (role === 'admin' && authenticated) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to={'Admin/dashboard'} />} />
        <Route path="Admin/*" element={<AdminRoutes />} />
      </Routes>
    )
  }
  else if (role === 'teacher' && authenticated) {
    return (
      <Routes>
        <Route path='/' element={<Navigate to={'Teacher/Dashboard'} />} />
        <Route path="Teacher/*" element={<TeacherRouters />} />
      </Routes>
    )
  }
}

export default App;
