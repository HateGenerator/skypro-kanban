import { ColumnContainer, ColumnTitle, Cards } from './Column.styled';

export default function Column({ status, children }) {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <p>{status}</p>
      </ColumnTitle>
      <Cards>{children}</Cards>
    </ColumnContainer>
  );
}