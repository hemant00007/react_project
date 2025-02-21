import 'antd/dist/reset.css'; 
import React from 'react';
import { Button, Card,Input } from 'antd';
import { useState } from 'react';
import { HomeOutlined, PoweroffOutlined, ProfileFilled, UserOutlined } from '@ant-design/icons';
import './App.css';


function App() {

  return (

    <div className="container">
      <h1>Form In React</h1>
      <form>
        <label htmlFor='firstname'> First Name*</label>
        <input type ='text' placeholder='Enter your first name' name="firstname"/>
        <label htmlFor='lasttname'> Last Name</label>
        <input type="text" placeholder ="Enter Your Last Name" name ="lastname"/>
        <label htmlFor ="email">Email</label>
        <input type ="email" placeholder="Enter your email" namme ="email"/>
        <label htmlFor="mobile">Phone No</label>
        <input type ="number" placeholder="Enter your phone no" name ="phone"/>
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender"/> Male
        <input type ="radio" name ="gender"/> Female
        <input type ="radio" name="gender"/> Other
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject">
          <option value="math">Math</option>
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
        </select>
        <label htmlFor="resume">Resume</label>
        <input type="file" placeholder="Upload your resume" name="resume"/>
        <label htmlFor="url">URL</label>
        <input type="text" placeholder="Enter your Image URL" name="url"/>
        <label htmlFor="about">About </label>
       <textarea name="about" id="about" cols="30" rows="10" placeholder="Enter Description"></textarea>
      <button type="button">Reset</button>
      <button type="submit">Submit</button>







        </form>
      </div >    
  )
}

export default App;
