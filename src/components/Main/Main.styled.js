import styled from 'styled-components';
import { Container } from '../Shared.styled';

export const StyledMain = styled.main`
  width: 100%;
  background-color: #EAEEF6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 19px;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  color: #94A6BE;
`;