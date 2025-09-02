import { useState } from 'react';
import { StyledModalOverlay, ModalContent, CloseButton, Input } from './Modal.styled';

export default function Modal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <StyledModalOverlay>
      <ModalContent>
        <h2>Создать задачу</h2>
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CloseButton onClick={onClose}>Выход</CloseButton>
      </ModalContent>
    </StyledModalOverlay>
  );
}