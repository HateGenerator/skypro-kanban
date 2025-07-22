import { useState, useEffect } from 'react';
import Column from '../Column/Column';
import Card from '../Card/Card';
import data from '../../data';
import { StyledMain, Container, MainBlock, MainContent, Loader } from './Main.styled';

export const STATUSES = ['Без статуса', 'Нужно сделать', 'В работе', 'Готово'];

export default function Main() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCards(data);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader>Данные загружаются...</Loader>;
  }

  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            {STATUSES.map((status) => (
              <Column key={status} status={status}>
                {cards
                  .filter((card) => card.status === status)
                  .map((card) => (
                    <Card key={card.id} {...card} />
                  ))}
              </Column>
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
}