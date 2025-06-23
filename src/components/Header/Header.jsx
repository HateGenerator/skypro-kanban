import { useState, useEffect, useRef } from 'react';
import PopUser from '../popups/PopUser';

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
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>

          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </div>

          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <div style={{ position: 'relative' }}>
              <a
                href="#user-set-target"
                className="header__user _hover02"
                onClick={togglePopup}
              >
                Ivan Ivanov
              </a>
              {isPopupOpen && (
                <div ref={popupRef}>
                  <PopUser onClose={closePopup} />
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}