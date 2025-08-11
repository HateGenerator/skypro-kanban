import styled from 'styled-components';

export const LoginContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #565EEF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;