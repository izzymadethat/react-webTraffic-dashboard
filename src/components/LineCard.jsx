
const LineCard = ({title, results}) => {
  return (
    <div className='card'>
      <h3 className='card__title'>{title}</h3>
      <h2 className='line-card__results'>{results}</h2>
    </div>
  )
}

export default LineCard