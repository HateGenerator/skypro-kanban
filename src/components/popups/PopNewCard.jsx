export default function PopNewCard() {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">&#10006;</a>
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
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
              <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__themes">
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p className="_green">Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p className="_purple">Copywriting</p>
                  </div>
                </div>
              </div>
              <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}