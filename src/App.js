// import logo from './logo.svg';
// import './App.css';
import { Header } from "./mycomoponents/header";
import { Loginpage } from "./mycomoponents/login";
import { Studentsdashboard } from "./mycomoponents/studentsdashboard";
import { StudentsLogin } from "./mycomoponents/studentslogin";
import { Homepage } from "./mycomoponents/homepage/homepage";
import { Attendancepage } from "./mycomoponents/attendance";
import { Querypage } from "./mycomoponents/query_page";
import { Queryresolver } from "./mycomoponents/query_resolving";
import { Teachers_dashboard } from "./mycomoponents/teachers_dashboard";
import { Footer } from "./mycomoponents/footer";
import { Signup } from './mycomoponents/signup';
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [no_of_working_days, set_no_of_working_days] = useState(50);
  const [presentdays, setpresentdays] = useState(40);
  const [currentpage, setCurrentPage] = useState("homepage");
  const [attendancce_result, setattendance_result] = useState([]);
  const [queries, setqueries] = useState([]);
  const [queried_attendance, setqueried_attendance] = useState([]);

  function handleLogin(data) {
    setCurrentPage(data);
  }

  return (
    <Router>

      {currentpage === "homepage" &&(<> < Homepage setCurrentPage={setCurrentPage}/>  <Footer /> </>)}
      {currentpage === "signup" && (<> <Header/> <Signup setCurrentPage={setCurrentPage}/> <Footer /> </>)}
      {currentpage === "teacherlogin" && (
        <>
         <Header />
        <Loginpage onLogin={handleLogin} />
        <Footer />
        </>
      )}

      {currentpage === "studentslogin" &&
       (<>
         <Header />
          <StudentsLogin setattendance_result={setattendance_result} setCurrentPage={setCurrentPage} setpresentdays={setpresentdays}/>
          <Footer />
        </>
       ) }

      {currentpage === "attendance" &&  (
      <>
         <Header />
         <Attendancepage />
         <Footer />
        </>
       ) }
      {currentpage === "teachersdashboard" &&  (
      <>
         <Header />
         <Teachers_dashboard setqueries={setqueries} setCurrentPage={setCurrentPage}  />
        </>
       ) }
      {currentpage === "Querypage" &&  (
      <>
         <Header />
         <Querypage setqueried_attendance={setqueried_attendance} queries={queries} setCurrentPage={setCurrentPage} />
         <Footer />
        </>
       ) }
      {currentpage === "Queryresolverpage" &&  (
      <>
         <Header />
         <Queryresolver setqueried_attendance={setqueried_attendance} queried_attendance={queried_attendance} />
         <Footer />
        </>
       ) }
      {currentpage === "studentsdashboard" && ( <>
         {/* <Header /> */}
         <Studentsdashboard attendancce_result={attendancce_result}  workingdays={no_of_working_days} presentdays={presentdays}/>
        </>
       ) }

      
    </Router>
  );
}


export default App;

//  <Router>
//         <Header />
//         <Homepage/>
//         {/* <Routes>

//           <Route path='/' element={isLoggedIn ? (<Attendancepage />) : (<Loginpage onLogin={handleLogin} />)} />

//           <Route path='/Signup' element={<Signup />} />

//         </Routes> */}

//         <Footer />
//       </Router> 