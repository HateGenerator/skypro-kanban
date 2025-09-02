import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

export const MainBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 19px;
  width: 100%;
  flex-wrap: wrap; /* Для адаптивности */
`;

export const Loader = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;