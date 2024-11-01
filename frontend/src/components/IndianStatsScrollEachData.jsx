import React from 'react'
import "../componentsStyling/IndianStatsScrollEachData.css"

const IndianStatsScrollEachData = ({message,messagePerson,TVChannelImage,className}) => {
  return (
    <div className={`IndianStatsScrollEachData ${className}`}>
      <div className='IndianStatsEachDataTop'>
        <p className='IndianStatsMessage'>{message}</p>
        <p className='IndianStatsMessagePerson'>{messagePerson}</p>
      </div>
      <div className='IndianStatsEachDataBottom'>
        <img src={TVChannelImage} alt="" className="TVChannelImgage"/>
        <button className="ReadArticleButton">
            <p className='ReadArticleText'>Read Article</p>
        </button>
      </div>
    </div>
  )
}

export default IndianStatsScrollEachData
