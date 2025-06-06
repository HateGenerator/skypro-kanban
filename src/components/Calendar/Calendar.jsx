export default function Calendar() {
  return (
    <div className="calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">Сентябрь 2023</div>
          <div className="nav__actions">
            <div className="nav__action" data-action="prev">&#8592;</div>
            <div className="nav__action" data-action="next">&#8594;</div>
          </div>
        </div>
        <div className="calendar__week">
          <div className="calendar__day-name">пн</div>
          <div className="calendar__day-name">вт</div>
          <div className="calendar__day-name">ср</div>
          <div className="calendar__day-name">чт</div>
          <div className="calendar__day-name">пт</div>
          <div className="calendar__day-name -weekend-">сб</div>
          <div className="calendar__day-name -weekend-">вс</div>
        </div>
        <div className="calendar__cells">
          <div className="calendar__cell _other-month">28</div>
          <div className="calendar__cell _other-month">29</div>
          <div className="calendar__cell _other-month">30</div>
          <div className="calendar__cell _cell-day">31</div>
          <div className="calendar__cell _cell-day">1</div>
          <div className="calendar__cell _cell-day _weekend">2</div>
          <div className="calendar__cell _cell-day _weekend">3</div>
        </div>
      </div>
    </div>
  )
}