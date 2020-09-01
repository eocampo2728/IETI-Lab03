import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/Login.js';

const data=[
  {
    "description": "Implement loginView",
    "responsible": {
      "name": localStorage.getItem("name"),
      "email": localStorage.getItem("email")
    },
    "status": "In Progress",
    "dueDate": "12-05-2019"
  },
  {
    "description": "Implement login Controller",
    "responsible": {
      "name": localStorage.getItem("name"),
      "email": localStorage.getItem("email")
    },
    "status": "Ready",
    "dueDate": "12-05-2019"
 },
 {
   "description": "Facebook Integration",
   "responsible": {
     "name": localStorage.getItem("name"),
     "email": localStorage.getItem("email")
   },
   "status": "Completed",
   "dueDate": "12-05-2019"
 }
];

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>

  );
}

export default App;
