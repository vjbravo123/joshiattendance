import React from 'react';
import '../css/studentslogin.css';
import logo from "../mycomoponents/homepage/logo.jpg";
export const StudentsLogin = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    const formData = new FormData(event.target); // Get the form data
    fetch(`${process.env.REACT_APP_SERVER_URL}/studentslogin`, {
      method: 'POST',
      body: JSON.stringify({username: formData.get('username'), password: formData.get('password')}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(data => {
      // Handle the server response here

      console.log("login button clicked response from server is :", data)

      let a = JSON.parse(data)

      if(a.value){
        props.setCurrentPage("studentsdashboard")
      }
      else{
        props.setCurrentPage("studentslogin")
        console.log("false username or paasword")
      }
  
    //   let z = "0"+a.attendancevalue
     props.setpresentdays(a.attendance)
     props.setattendance_result(a.attendance_data)
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };

  // const handleSubmit = (event) => {
  //   console.log("button was clicked");
  //   event.preventDefault();
  // }

  const showMenu = () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.right = '0';
  };

  const hideMenu = () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.right = '-200px';
  };
const handleclick=()=>{
  props.setCurrentPage("signup")
}
  return (
    <section className="header">
      <nav>
        <a href="">
          <img className="logo" src={logo} />
        </a>

        <div className="navLinks" id="nav-links">
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </nav>

      <div className="studentslogin-form">
        <h3>Login Here</h3>

        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <br />
          <input type="text" name="username" placeholder="Enter your username" />
          <br />

          <label>Password:</label>
          <br />
          <input type="Password" name="password" placeholder="Enter your password" />

          <div className="flexx">
          <button className='newuserbtn' onClick={handleclick}>
          New User?
        </button>

        
          <button type='submit' className='btnn'>Login</button>
         </div>
        </form>

        
        

      </div>
    </section>
  );
};


