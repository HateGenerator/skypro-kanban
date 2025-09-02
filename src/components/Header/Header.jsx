import { useState } from 'react';
import Modal from '../Modal/Modal';
import UserModal from '../Modal/UserModal';
import LogoutConfirmModal from '../Modal/LogoutConfirmModal';
import { StyledHeader, HeaderBlock, HeaderLogo, HeaderNav, HeaderBtnMainNew, HeaderUser } from './Header.styled';

export default function Header() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

  return (
    <StyledHeader>
      <HeaderBlock>
        <HeaderLogo className="_show _light">
          <a href="/">
            <img src="/images/logo.png" alt="Skypro Logo" />
          </a>
        </HeaderLogo>
        <HeaderLogo className="_dark">
          <a href="/">
            <img src="/images/logo-dark.png" alt="Skypro Logo Dark" />
          </a>
        </HeaderLogo>
        <HeaderNav>
          <HeaderBtnMainNew onClick={() => setIsTaskModalOpen(true)}>
            Создать новую задачу
          </HeaderBtnMainNew>
          <HeaderUser onClick={() => setIsUserModalOpen(true)}>Ivan Ivanov</HeaderUser>
        </HeaderNav>
      </HeaderBlock>
      {isTaskModalOpen && <Modal onClose={() => setIsTaskModalOpen(false)} />}
      {isUserModalOpen && <UserModal onClose={() => setIsUserModalOpen(false)} onLogout={() => setIsLogoutConfirmOpen(true)} />}
      {isLogoutConfirmOpen && <LogoutConfirmModal onClose={() => setIsLogoutConfirmOpen(false)} onConfirmLogout={() => { setIsLogoutConfirmOpen(false); setIsUserModalOpen(false); }} />}
    </StyledHeader>
  );
}