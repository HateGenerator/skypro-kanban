import { useState, useEffect } from 'react';
import Column from '../Column/Column';
import Card from '../Card/Card';


export default function Main() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      import('../../data').then(data => {
        setCards(data.default);
        setLoading(false);
      });
    }, 1500);
  }, []);

  if (loading) {
    return <div className="loader">Данные загружаются...</div>;
  }

  const groupedByStatus = {
    'Без статуса': [],
    'Нужно сделать': [],
    'В работе': [],
    'Готово': []
  };

  cards.forEach(card => {
    if (groupedByStatus[card.status]) {
      groupedByStatus[card.status].push(card);
    }
  });

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column status="Без статуса">
              {groupedByStatus['Без статуса'].map(card => (
                <Card key={card.id} {...card} />
              ))}
            </Column>

            <Column status="Нужно сделать">
              {groupedByStatus['Нужно сделать'].map(card => (
                <Card key={card.id} {...card} />
              ))}
            </Column>

            <Column status="В работе">
              {groupedByStatus['В работе'].map(card => (
                <Card key={card.id} {...card} />
              ))}
            </Column>

            <Column status="Готово">
              {groupedByStatus['Готово'].map(card => (
                <Card key={card.id} {...card} />
              ))}
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
}