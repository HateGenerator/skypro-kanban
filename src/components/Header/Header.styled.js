import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;

  @media screen and (max-width: 495px) {
    .header__btn-main-new {
      z-index: 3;
      position: fixed;
      left: 16px;
      bottom: 30px;
      top: auto;
      width: calc(100vw - 32px);
      height: 40px;
      border-radius: 4px;
      margin-right: 0;
    }
  }
`;

export const HeaderLogo = styled.div`
  &._show._light {
    display: block;

    a {
      img {
        width: 85px;
      }
    }
  }

  &._dark {
    display: none;

    a {
      img {
        width: 85px;
      }
    }
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  text-decoration: none;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: #33399b;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;