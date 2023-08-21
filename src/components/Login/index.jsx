import { Wrapper } from './style';
import { useRef, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useNotificationAPI } from '../../Generic/NotificationAPI'; 
import axios from 'axios';

const Login = () => {
  const statusChecker = useNotificationAPI();
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef();
  const passwordRef = useRef();
  
  // onkeydown
  const onKeyDetect = (e) => {
    if (e.key === 'Enter' || e.type === 'click' || e.keyCode === 13)
      return onAuth();
  }

  const onAuth = () => {
    
    if (loading) return;
    
    const {phoneNumber, password} = {
      phoneNumber: phoneRef.current.input.value,
      password: passwordRef.current.input.value
    };
    
    if (!password || !phoneNumber) statusChecker(400);
    
      setLoading(true);
    
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
      method: 'POST',
      data: {
        phoneNumber: `+998${phoneNumber}`,
        password
      }
    })
      .then((res) => {
        const { token, user } = res.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(user))
        setLoading(false);
        return notification.success({message: "Successfully logged in!"})
      })
      .catch((res) => {
        const status = res.response.status;
        setLoading(false)
        return statusChecker(status)
      });
  }
  
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
        <Wrapper.PhoneNumber
          ref={phoneRef}
          bordered={false}
          addonBefore="+998"
          placeholder='Enter your number'
        />
        <Wrapper.Password
          ref={passwordRef}
          placeholder='Enter your password'
          onKeyDown = {onKeyDetect}
        />
        <Wrapper.Button onClick={onKeyDetect}>
           {
             loading ? <LoadingOutlined /> : 'Login'
           }
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login
