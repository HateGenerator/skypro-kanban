import { StyledExit } from './ExitPage.styled';

export default function ExitPage({ onLogout }) {
  const handleExit = () => {
    onLogout();
  };

  return (
    <StyledExit>
      <h2>Exit</h2>
      <button onClick={handleExit}>Logout</button>
    </StyledExit>
  );
}