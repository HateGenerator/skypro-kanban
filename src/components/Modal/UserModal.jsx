import { useState } from 'react';
import { StyledModalOverlay, ModalContent, CloseButton, Input, ThemeButton } from './Modal.styled';

export default function UserModal({ onClose, onLogout }) {
  const [name, setName] = useState('Ivan Ivanov');
  const [email, setEmail] = useState('ivan@example.com');
  const [theme, setTheme] = useState('light');

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log('Theme switched to:', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <StyledModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}> {/* Закрытие при клике на оверлей */}
      <ModalContent onClick={(e) => e.stopPropagation()}> {/* Предотвращение закрытия при клике внутри */}
        <h2>Профиль</h2>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" disabled />
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" disabled />
        <ThemeButton onClick={handleThemeToggle}>
          Сменить тему: {theme === 'light' ? 'Темная' : 'Светлая'}
        </ThemeButton>
        <CloseButton onClick={onLogout}>Выйти</CloseButton>
        <CloseButton onClick={onClose}>Закрыть</CloseButton> {/* Дополнительная кнопка для закрытия */}
      </ModalContent>
    </StyledModalOverlay>
  );
}