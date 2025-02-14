import 'antd/dist/reset.css'; 
import React from 'react';
import { Button, Card } from 'antd';
import { useState } from 'react';
import { PoweroffOutlined, ProfileFilled } from '@ant-design/icons';
import './App.css';


function App() {

  const [loading,setLoading] = useState(false);
  const onButtonClick = (e) => {
    console.log('Button clicked');
    setLoading(true);
  
    setTimeout(() => {
      setLoading(false);
  },2000);
}
  
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // This makes the container take the full viewport height
    }}>
   <Button type="primary"
   loading={loading} 
   icon={<ProfileFilled />}
   className="my-btn"
  //  style={{backgroundColor: 'green',color:'pink'}}
   onClick={onButtonClick}
    >click</Button>
    </div>
  );
}

export default App;
