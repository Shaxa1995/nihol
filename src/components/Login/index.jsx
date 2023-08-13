import { Wrapper } from './style';
import { useRef, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef();
  const passwordRef = useRef();
  
  // onkeydown
  const onKeyDetect = (e) => {
    if (e.key === 'Enter' || e.type === 'click' || e.keyCode === 13)
      return onAuth();
  }

  const onAuth = () => {
    
    const {phoneNumber, password} = {
      phoneNumber: phoneRef.current.input.value,
      password: passwordRef.current.input.value
    };
    
    if (!password || !phoneNumber) {
      return notification.error({ message: "Please fill all the fields!" });
    }
    setLoading(true);
    
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
      method: 'POST',
      data: {
        phoneNumber: `+998${phoneNumber}`,
        password,
      }
    })
      .then((res) => {
        const { token } = res.data.data;
        localStorage.setItem('token', token);
        setLoading(false);
        return notification.success({message: "Successfully logged in!"})
      })
      .catch((res) => {
        console.log(res);
        const response = res.response;
        if (response.status === 409) {
          notification.error({
            message: 'User not found',
            description: 'Phone number or password is wrong!'
          })
        }
        setLoading(false)
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
          // name='phoneNumber'
        />
        <Wrapper.Password
          ref={passwordRef}
          placeholder='Enter your password'
          // name='password'
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
