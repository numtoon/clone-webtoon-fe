import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

const LogoWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CookieWrapper = styled.View`
  margin-right: 9%;
`;

const SearchWrapper = styled.View`
  margin-left: 9%;
`;

const NaviHeaderLogo = () => {
  return (
    <LogoWrapper>
      <CookieWrapper>
        <Image
          source={require('WebtoonProject/public/images/home/cookie.png')}
          style={{width: 40, height: 40}}
        />
      </CookieWrapper>
      <SearchWrapper>
        <Image
          source={require('WebtoonProject/public/images/home/search-icon.png')}
          style={{width: 28, height: 28}}
        />
      </SearchWrapper>
    </LogoWrapper>
  );
};

export default NaviHeaderLogo;
