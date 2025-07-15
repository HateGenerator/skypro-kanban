import styled from 'styled-components';

export const StyledCalendar = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CalendarTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 15px;
`;

export const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CalendarMonth = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
`;

export const NavActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavAction = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: #565EEF;

  &:hover {
    color: #33399b;
    background-color: #E6E8FF;
    border-radius: 50%;
  }
`;

export const CalendarWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
`;

export const DayName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #94A6BE;
  text-align: center;

  &.-weekend- {
    color: #FF6D00; // Пример цвета для выходных, можно настроить
  }
`;

export const CalendarCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const CalendarCell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333333;
  cursor: pointer;

  &._other-month {
    color: #94A6BE; // Серая цвет для дней других месяцев
  }

  &._cell-day {
    color: #000000;
  }

  &._weekend {
    color: #FF6D00; // Цвет для выходных
  }

  &:hover {
    background-color: #E6E8FF;
    border-radius: 50%;
  }
`;