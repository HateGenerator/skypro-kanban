import { NotFoundContainer, Title, Message } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <Title>404 - Страница не найдена</Title>
      <Message>Такой страницы не существует.</Message>
    </NotFoundContainer>
  );
}