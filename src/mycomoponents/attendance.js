import React, { useState, useEffect } from 'react';
import { data } from "./sheet_data.js/sheet_data";
import "../css/attendence.css"
export const Attendancepage = () => {
  
  const populateTable = () => {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();
    const date = `${d} / ${m} / ${y}`;
    const table = document.getElementById("attendance");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < data.length; i++) {
      const row = document.createElement("tr");
      const snoCell = document.createElement("td");
      snoCell.textContent = data[i].sno;
      row.appendChild(snoCell);

      const yearCell = document.createElement("td");
      yearCell.textContent = data[i].year;
      row.appendChild(yearCell);

      const rollNoCell = document.createElement("td");
      rollNoCell.textContent = data[i].roll_no;
      row.appendChild(rollNoCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = data[i].name;
      row.appendChild(nameCell);

      const dateCell = document.createElement("td");
      dateCell.textContent = date;
      row.appendChild(dateCell);

      const statusCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "attendance_status[]";
      checkbox.value = "present";
      checkbox.classList = "attendance-checkbox";
      checkbox.onclick = handleCheckboxClick;

      statusCell.appendChild(checkbox);
      row.appendChild(statusCell);

      tbody.appendChild(row);
    }
  };


  const [present, setPresent] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleCheckboxClick = (event) => {
    const checkbox = event.target;
    if (checkbox.checked) {
      const row = checkbox.parentNode.parentNode;
      const sno = row.cells[0].textContent;
      const roll_no = row.cells[2].textContent;
    
      const obj = { sno: parseInt(sno) , roll_no:roll_no };
      setPresent((prevPresent) => [...prevPresent, obj]);
    }
  };
  
  useEffect(() => {

    const table = document.getElementById("attendance");
    const tbody = table.getElementsByTagName("tbody")[0];
  
    if (tbody.children.length === 0) {
      // Only populate the table if it doesn't have any rows
      populateTable();
    }

  
  }, []);

  const handleDownload = async () => {
    console.log(present)
    setIsDownloading(true);
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(present)
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'attendance.xlsx';
      downloadLink.click();
      setIsDownloading(false);
      setIsDownloaded(true);
    } else {
      console.log('Server error:', response.status);
      setIsDownloading(false);
    }
    
  };

  const handleDownloadedClick = () => {
    setIsDownloaded(false);
  }

  return (
    <>
    <div className="tb">
      <table id="attendance">
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>YEAR</th>
            <th>ROLL NO.</th>
            <th>NAME</th>
            <th>DATE</th>
            <th>ATTENDANCE STATUS</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    {
    isDownloaded ? (
      <div>
        <button onClick={handleDownloadedClick}>Download Excel File</button>
      </div>
    ) : (
      <div>
        {isDownloading ? (
          <button disabled>Downloading...</button>
        ) : (
          <button onClick={handleDownload}>Download Excel File</button>
        )}
      </div>
    )
  } 
  </div>
  </>
  );
}
