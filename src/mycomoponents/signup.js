import React from 'react';
import '../css/sup.css';

export const Signup = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    const formData = new FormData(event.target); // Get the form data

    fetch('/submit-form', {
      method: 'POST',
      body: JSON.stringify({ username: formData.get('username'), roll_no: formData.get('roll_no'), password: formData.get('password'), id: formData.get('id') }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then((data) => {
        let a = JSON.parse(data)
        if (a.value) {
          props.setCurrentPage("studentslogin")
        }
        else {
          props.setCurrentPage("signup")
          console.log("false username or paasword")
        }
        // Handle the server response here 
        console.log(data)
        // let a = JSON.parse(data)
        // console.log(a.userid)
        // let a = document.getElementById("bc")
        // a.innerHTML= <h1>${data}</h1>

      })
      .catch(error => {
        console.log(`error happened ${error}`)
      });
  };

  return (
    <div className="bomdy">
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit} >
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="roll_no" placeholder="Roll no" />
            <input type="password" name="password" placeholder="Password" />
            <input type="text" name="id" placeholder="Id" />

            <input className='subb' type="submit" name="signup_submit" value="Sign me up" />
          </form>
        </div>



        <div className="rightt">
          <span className="loginwith">Sign in with<br />social network</span>
          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>

      </div>
    </div>

  )

}
