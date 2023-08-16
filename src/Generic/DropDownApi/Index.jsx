import React from 'react';
import { MenuWrapper } from '../Style/style.';
import { SettingOutlined, TranslationOutlined, LogoutOutlined } from '@ant-design/icons';


const useDropDownApi = () => {
    
    const navbarDropDown = () => {
        return [
            {
              label: (
                <MenuWrapper>
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
              label:(
                <MenuWrapper isDanger={true}>
                   <LogoutOutlined/> Log out
                </MenuWrapper>),
              key: '2',
            },
          ];
    }
    
  return {navbarDropDown}
}

export default useDropDownApi
