import React, { useState } from "react";
import "../css/query_resolving.css"
export const Queryresolver = (props) => {
 
 
  // console.log(props.queried_attendance);


  const handleAttendanceChange = (index, field, value) => {
  const newAttendance = [...props.queried_attendance];
  newAttendance[index][field] = value;
  props.setqueried_attendance(newAttendance);
};

const handleSaveAttendance = () => {
  fetch(`${process.env.REACT_APP_SERVER_URL}/queriedattendancechange`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(props.queried_attendance)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
};


  return (
    <div className="attendance">
      <h2>Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Date</th>
            <th>Attendance Status</th>
            <th>Change Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          {props.queried_attendance.map((student, index) => (
            <tr key={index}>
              <td>{student.roll_no}</td>
              <td>{student.date}</td>
              <td>{student.attendance_status}</td>
              <td>
                <select
                  value={student.attendance_status}
                  onChange={(e) =>
                    handleAttendanceChange(
                      index,
                      "attendance_status",
                      e.target.value
                    )
                  }
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
                <button onClick={handleSaveAttendance}>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};