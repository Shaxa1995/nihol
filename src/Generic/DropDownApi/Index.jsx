import React from 'react';
import { MenuWrapper } from '../Style/style.';
import { SettingOutlined, TranslationOutlined, LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { switchProfileModalVisibility } from '../../redux/modalSlice';


const useDropDownApi = () => {
  
  const dispatch = useDispatch();
    
    const navbarDropDown = () => {
        return [
            {
              label: (
                <MenuWrapper onClick={()=> dispatch(switchProfileModalVisibility())} >
                  <SettingOutlined/> Setting
                </MenuWrapper>),
              key: '0',
            },
            {
              label:(
                <MenuWrapper>
                   <TranslationOutlined/> Change language
                </MenuWrapper>),
              key: '1',
            },
          {
            label: (
              <MenuWrapper isdanger="true">
                   <LogoutOutlined/> Log out
                </MenuWrapper>),
              key: '2',
            },
          ];
    }
    
  return {navbarDropDown}
}

export default useDropDownApi
