import { useState, useEffect } from 'react';
import Column from '../Column/Column';
import Card from '../Card/Card';
import data from '../../data';

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
    return <div className="loader">Данные загружаются...</div>;
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {STATUSES.map((status) => (
              <Column key={status} status={status}>
                {cards
                  .filter((card) => card.status === status)
                  .map((card) => (
                    <Card key={card.id} {...card} />
                  ))}
              </Column>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}