export default function PopBrowse() {
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <a href="#" className="pop-browse__close">&#10006;</a>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide"><p>Без статуса</p></div>
                <div className="status__theme _gray"><p className="_gray">Нужно сделать</p></div>
                <div className="status__theme _hide"><p>В работе</p></div>
                <div className="status__theme _hide"><p>Тестирование</p></div>
                <div className="status__theme _hide"><p>Готово</p></div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea className="form-browse__area" name="text" id="textArea01" readOnly placeholder="Введите описание задачи..."></textarea>
                </div>
              </form>
              <div className="pop-browse__calendar calendar">
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
            </div>
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
                <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
              </div>
              <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
              <button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}