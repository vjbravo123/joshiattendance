import React from 'react'
import "../css/teachers_dashboard.css"
export const Teachers_dashboard = (props) => {
    const handleclick = ()=>{
        props.setCurrentPage("attendance")
    }
    const handleclick2 =()=>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/documents`)
        .then(response => response.json())
        .then(data => {
          // handle the response data
          // console.log(data);
         props.setqueries(data);
         props.setCurrentPage("Querypage")
        })
        .catch(error => {
          // handle any errors
        });
    }
  return (
    <>
    <div className="body">
   <h1>Welcome, Teacher!</h1>
	
	<section>
		<h2>Take Attendance</h2>
		<p>Click the button below to take attendance for your class.</p>
		<button onClick={handleclick}>Take Attendance</button>
	</section>
	
	<section>
		<h2>Student Queries</h2>
		<p>Click the button below to view and respond to student queries.</p>
		<button onClick={handleclick2}>Student Queries</button>
	</section>
<footer>
		<p>&copy; 2023 Teacher Dashboard</p>
	</footer>
    </div>
    </>
  )
}
