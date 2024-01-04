import React from 'react'

const MetricCard = ({title, results}) => {
  return (
    <div className='card'>
      <h3 className='card__title'>{title}</h3>
      <h2 className='metric-card__results'>{results}</h2>
    </div>
  )
}

export default MetricCard