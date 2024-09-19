import React from 'react'
import "../sectionsStyling/DragAndDrop.css";
import DropVectorBottomLeft from "../assets/DropVectorBottomLeft.svg";
import DropVectorBottomRight from "../assets/DropVectorBottomRight.svg";
import DropVectorTopLeft from "../assets/DropVectorTopLeft.svg";
import DropVectorTopRight from "../assets/DropVectorTopRight.svg";
const DragAndDrop = () => {
  return (
    <div className='DragAndDrop'>
      <img src={DropVectorTopLeft} alt="" className='DropVectorTopLeft'/>
      <img src={DropVectorTopRight} alt="" className='DropVectorTopRight'/>
      <img src={DropVectorBottomLeft} alt="" className='DropVectorBottomLeft'/>
      <img src={DropVectorBottomRight} alt="" className='DropVectorBottomRight'/>
      <p className='DragDropText'>DRAG & DROP HERE</p>
    </div>
  )
}

export default DragAndDrop
