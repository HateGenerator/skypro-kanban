import { useState, useEffect, useRef } from 'react';
import PopUser from '../popups/PopUser';
import { StyledHeader, HeaderBlock, HeaderLogo, HeaderNav, HeaderBtnMainNew, HeaderUser } from './Header.styled';
import { Container } from '../Shared.styled'; // Импорт Container из Shared.styled.js

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = (e) => {
    e.preventDefault();
    setIsPopupOpen((prev) => !prev);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnMainNew>
            <div style={{ position: 'relative' }}>
              <HeaderUser
                href="#user-set-target"
                className="_hover02"
                onClick={togglePopup}
              >
                Ivan Ivanov
              </HeaderUser>
              {isPopupOpen && (
                <div ref={popupRef}>
                  <PopUser onClose={closePopup} />
                </div>
              )}
            </div>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}