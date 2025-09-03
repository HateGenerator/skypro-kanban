import { useNavigate } from 'react-router-dom';
import { StyledModalOverlay, ModalContent, ConfirmButton } from './Modal.styled';

export default function LogoutConfirmModal({ onClose, onConfirmLogout }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onConfirmLogout(); // Закрываем модальные окна
    navigate('/login'); // Редирект на страницу логина
  };

  return (
    <StyledModalOverlay>
      <ModalContent>
        <h2>Подтверждение выхода</h2>
        <p>Вы уверены, что хотите выйти?</p>
        <ConfirmButton onClick={handleConfirm}>Да, выйти</ConfirmButton>
        <ConfirmButton onClick={onClose}>Нет, остаться</ConfirmButton>
      </ModalContent>
    </StyledModalOverlay>
  );
}