import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from './Tools/Wrapper';
import Root from './root';
import Navbar from './components/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Wrapper>
     <Root/>
    <Root/>
     {/* <Navbar/> */}
    {/* <Root/> */}
     <Navbar/>
   </Wrapper>
);


