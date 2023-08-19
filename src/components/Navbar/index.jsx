import React from 'react';
import { Wrapper } from './style';
import { Dropdown } from 'antd';
import useDropDownApi from '../../Generic/DropDownAPI/Index';
import useDropDownApi from '../../Generic/DropDownApi/Index';

const Navbar = () => {
  
  const {navbarDropDown} = useDropDownApi();
  
  return (
    <Wrapper>
      <Wrapper.Left>
        <Wrapper.Title>NIHOL</Wrapper.Title>
      </Wrapper.Left>
      <Wrapper.Right>
        <Dropdown
          trigger={['click']}
          menu={{items: navbarDropDown()}}
        >
         <Wrapper.Avatar>A</Wrapper.Avatar>
        </Dropdown>
      </Wrapper.Right>
    </Wrapper>
  )
}

export default Navbar
