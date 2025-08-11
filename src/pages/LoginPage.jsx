import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Title, Input, Button } from './LoginPage.styled';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login attempt', { username, password });
    onLogin(); // Устанавливает isAuth в true
    navigate('/'); // Перенаправление на главную страницу
  };

  return (
    <LoginContainer>
      <Title>Логин</Title>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Имя пользователя"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <Button onClick={handleLogin}>Войти</Button>
    </LoginContainer>
  );
}