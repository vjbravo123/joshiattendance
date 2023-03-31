import React from 'react'
import "../css/login.css"
export const Loginpage = (props) => {


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    const formData = new FormData(event.target); // Get the form data
    fetch('/login', {
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
        props.onLogin("teachersdashboard")
      }
      else{
        props.onLogin("teacherlogin")
        console.log("false username or paasword")
      }
      
    //  {data?(props.onLogin("attendance")):props.onLogin("teacherlogin")}
      // let a = document.getElementById("bc")
      // a.innerHTML= <h1>${data}</h1>
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };

  return (
    <div className='bc' id='bc'>
      <div className='todoadd'>
        <form onSubmit={handleSubmit}> 
          <div className="input">
            <label htmlFor="username"></label>
            <input type="text" name="username" id="username" placeholder='username' />
          </div>
          <div className="input">
            <label htmlFor="password"></label>
            <input type="text" name="password" id="password" placeholder='password'/>
          </div>
          <div className="btn">
            {/* <input type="submit" className='button' value={"LOGIN"} /> */}
           <button type='submit' className='button'>login</button>
            {/* <div className='button'>Sign-Up</div> */}
          </div>
        </form>
      </div>
    </div>
  )
}

  
