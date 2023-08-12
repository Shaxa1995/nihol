import { Wrapper } from './style';
import { useState } from 'react';

const Login = () => {
  
  const [userValue, setUserValue] = useState({
    phoneNumber: "",
    password: ""
  });
  
  const onAuth = () => {
    console.log(userValue);
  }
  
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
        <Wrapper.PhoneNumber onChange={(e)=> setUserValue(e.target.value)} bordered={false} addonBefore="+998" placeholder='Enter your number' />
        <Wrapper.Password onChange={(e)=> setUserValue(e.target.value)} placeholder='Enter your password' />
        <Wrapper.Button onClick={onAuth}  >Login</Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login
