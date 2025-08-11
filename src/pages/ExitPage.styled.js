import styled from 'styled-components';

export const ExitContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff4444;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;