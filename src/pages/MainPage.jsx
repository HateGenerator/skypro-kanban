import { useState, useEffect } from 'react';
import Column from '../components/Column/Column';
import Card from '../components/Card/Card';
import data from '../data';
import { MainContainer, MainContent } from './MainPage.styled';
import { STATUSES } from '../constants/statuses';

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCards(data);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Данные загружаются...</div>; // Простая заглушка вместо Loader
  }

  return (
    <MainContainer>
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
    </MainContainer>
  );
}