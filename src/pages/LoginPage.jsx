import { useState } from 'react';
import { StyledLogin, LoginForm, LoginButton } from './LoginPage.styled';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting with username:', username);
    if (username && !isSubmitting) {
      setIsSubmitting(true);
      try {
        console.log('Calling onLogin');
        await onLogin();
        console.log('Login completed, should redirect');
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        setIsSubmitting(false); // Сбрасываем состояние после завершения
      }
    } else {
      console.log('Username is empty or already submitting');
    }
  };

  return (
    <StyledLogin>
      <LoginForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          disabled={isSubmitting} // Блокируем ввод во время отправки
        />
        <LoginButton type="submit" disabled={isSubmitting}>
          Login
        </LoginButton>
      </LoginForm>
    </StyledLogin>
  );
}