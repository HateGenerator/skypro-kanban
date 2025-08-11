import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 19px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: block;
  }
`;