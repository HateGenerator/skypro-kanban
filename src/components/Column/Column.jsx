import Card from '../Card/Card'

export default function Column({ status }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        <Card taskTitle="Название задачи" category="_orange" date="30.10.23" />
        <Card taskTitle="Ещё одна задача" category="_green" date="01.11.23" />
      </div>
    </div>
  )
}