import React from 'react';
import { Wrapper } from './style';
import { Dropdown } from 'antd';

const Navbar = () => {
  return (
    <Wrapper>
      <Wrapper.Left>
        <Wrapper.Title>NIHOL</Wrapper.Title>
      </Wrapper.Left>
      <Wrapper.Right>
         <Wrapper.Avatar>A</Wrapper.Avatar>
      </Wrapper.Right>
    </Wrapper>
  )
}

export default Navbar
