import 'antd/dist/reset.css'; 
import React from 'react';
import { Button, Card,Input } from 'antd';
import { useState } from 'react';
import { HomeOutlined, PoweroffOutlined, ProfileFilled, UserOutlined } from '@ant-design/icons';
import './App.css';


function App() {

  

  
  return (
   
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // This makes the container take the full viewport height
    }}>


<Input.TextArea
placeholder="Enter your name"
maxLength={10}
prefix={<UserOutlined />}
allowClear

/>
   
    </div>
    
  );
}

export default App;
