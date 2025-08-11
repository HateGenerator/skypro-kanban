import { useParams } from 'react-router-dom';

export default function CardDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Карточка #{id}</h1>
      <p>Здесь будет детальная информация и форма редактирования.</p>
    </div>
  );
}