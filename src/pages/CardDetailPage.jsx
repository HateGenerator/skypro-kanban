import { useParams } from 'react-router-dom';
import { StyledCardDetail } from './CardDetailPage.styled';

export default function CardDetailPage() {
  const { id } = useParams();

  return (
    <StyledCardDetail>
      <h2>Card Detail</h2>
      <p>Card ID: {id}</p>
    </StyledCardDetail>
  );
}