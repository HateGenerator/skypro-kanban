import { useState, useEffect } from 'react';
import Column from '../components/Column/Column';
import Card from '../components/Card/Card';
import cards from '../data';
import { StyledMain, MainBlock, MainContent, Loader } from './MainPage.styled';
import { Container } from '../components/Shared.styled';
import { STATUSES } from '../constants/statuses';

export default function MainPage() {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('MainPage useEffect triggered, cards:', cards);
    setTimeout(() => {
      setCardsData(cards);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader>Данные загружаются...</Loader>;
  }

  console.log('MainPage rendering, cardsData:', cardsData, 'STATUSES:', STATUSES);
  if (cardsData.length === 0) {
    return <div>No cards to display</div>; // Отладочный вывод
  }

  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            {STATUSES.map((status) => (
              <Column key={status} status={status}>
                {cardsData
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