import { StyledCalendar, CalendarTitle, CalendarBlock, CalendarNav, CalendarMonth, NavActions, NavAction, CalendarWeek, DayName, CalendarCells, CalendarCell } from './Calendar.styled';

export default function Calendar() {
  return (
    <StyledCalendar>
      <CalendarTitle className="calendar__ttl subttl">Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <NavActions>
            <NavAction data-action="prev">←</NavAction>
            <NavAction data-action="next">→</NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarWeek>
          <DayName>пн</DayName>
          <DayName>вт</DayName>
          <DayName>ср</DayName>
          <DayName>чт</DayName>
          <DayName>пт</DayName>
          <DayName className="-weekend-">сб</DayName>
          <DayName className="-weekend-">вс</DayName>
        </CalendarWeek>
        <CalendarCells>
          <CalendarCell className="_other-month">28</CalendarCell>
          <CalendarCell className="_other-month">29</CalendarCell>
          <CalendarCell className="_other-month">30</CalendarCell>
          <CalendarCell className="_cell-day">31</CalendarCell>
          <CalendarCell className="_cell-day">1</CalendarCell>
          <CalendarCell className="_cell-day _weekend">2</CalendarCell>
          <CalendarCell className="_cell-day _weekend">3</CalendarCell>
        </CalendarCells>
      </CalendarBlock>
    </StyledCalendar>
  );
}