import { useState, useEffect } from 'react';
import { ColumnContainer, ColumnTitle, Cards } from '../components/Column/Column.styled';
import { CardItem, CardStyled, CardGroup, CardTheme, CardButton, CardContent, CardTitle, CardDate } from '../components/Card/Card.styled';
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
    return <div>No cards to display</div>;
  }

  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            {STATUSES.map((status) => (
              <ColumnContainer key={status}>
                <ColumnTitle>
                  <p>{status}</p>
                </ColumnTitle>
                <Cards>
                  {cardsData
                    .filter((card) => card.status === status)
                    .map((card) => {
                      const themeType = {
                        'Web Design': '_orange',
                        'Research': '_green',
                        'Copywriting': '_purple',
                      }[card.topic] || '';
                      return (
                        <CardItem key={card.id}>
                          <CardStyled>
                            <CardGroup>
                              <CardTheme themeType={themeType}>
                                <p>{card.topic}</p>
                              </CardTheme>
                              <CardButton href="#">
                                <div></div>
                                <div></div>
                                <div></div>
                              </CardButton>
                            </CardGroup>
                            <CardContent>
                              <CardTitle href="#">{card.title}</CardTitle>
                              <CardDate>
                                {/* SVG для даты можно добавить, если есть */}
                                <p>{card.date}</p>
                              </CardDate>
                            </CardContent>
                          </CardStyled>
                        </CardItem>
                      );
                    })}
                </Cards>
              </ColumnContainer>
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
}