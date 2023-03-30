// // import {data} from "..../server/data_extractor_from_excel.js";
// // import {data} from "./data_extractor_from_excel";
// // const data = require("./data_extractor_from_excel")
// // import { excelmaker } from "./presentdata.js";
// // import * as XLSX from './xlsx';
// import { data } from "./sheet_data.js/sheet_data";
// import  { handleCheckboxClick } from "./attnedence";


// export const datajs =()=>{

 

//   const today = new Date();
// let d = today.getDate();
// let m = today.getMonth();
// let y = today.getFullYear();

// let date = `${d} / ${m} / ${y}`;





// const table = document.getElementById("attendance");
// const tbody = table.getElementsByTagName("tbody")[0];

// for (let i = 0; i < data.length; i++) {
//   const row = document.createElement("tr");

//   const snoCell = document.createElement("td");
//   snoCell.textContent = data[i].sno;
//   row.appendChild(snoCell);

//   const yearCell = document.createElement("td");
//   yearCell.textContent = data[i].year;
//   row.appendChild(yearCell);

//   const rollNoCell = document.createElement("td");
//   rollNoCell.textContent = data[i].roll_no;
//   row.appendChild(rollNoCell);

//   const nameCell = document.createElement("td");
//   nameCell.textContent = data[i].name;
//   row.appendChild(nameCell);

//   const dateCell = document.createElement("td");
//   dateCell.textContent = date;
//   row.appendChild(dateCell);

//   const statusCell = document.createElement("td");
//   var checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.name = "attendance_status[]";
//   checkbox.value = "present";
//   checkbox.classList = "attendance-checkbox";
//   checkbox.onclick= handleCheckboxClick;

//   statusCell.appendChild(checkbox);
//   row.appendChild(statusCell);

//   tbody.appendChild(row);
// }



// }

// module.exports=datajs;