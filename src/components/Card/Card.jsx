export default function Card({ taskTitle = "Название задачи", category = "_orange", date = "30.10.23" }) {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${category}`}>
            <p className={category}>Web Design</p>
          </div>
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div><div></div><div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <a href=""><h3 className="card__title">{taskTitle}</h3></a>
          <div className="card__date">
            <svg>...</svg>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}