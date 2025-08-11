import { useState } from 'react';
import { RegisterContainer, Title, Input, Button } from './RegisterPage.styled';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Register attempt', { username, password });
  };

  return (
    <RegisterContainer>
      <Title>Регистрация</Title>
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
      <Button onClick={handleRegister}>Зарегистрироваться</Button>
    </RegisterContainer>
  );
}