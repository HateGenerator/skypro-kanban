import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ThemeButton = styled.button`
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5a6268;
  }
`;

export const ConfirmButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:first-child {
    background-color: #dc3545;
    color: white;
    margin-right: 10px;
  }
  &:last-child {
    background-color: #6c757d;
    color: white;
  }
`;