import React from 'react'

// Icons
import { AiOutlineArrowUp } from 'react-icons/ai'

function Card(props) {
    return (
        <div className="card border-bottom border-info my-2">
            <div className="card-header bg-primary d-flex justify-content-between">
                <div className="text mx-1">
                    <h3 className="title">{props.title}</h3>
                    <span>{props.value}</span>
                </div>
                {props.icon}
            </div>
            <div className="card-body">
                <span className='increasement-percent d-block mb-1'>
                    <AiOutlineArrowUp/> 
                    {props.increasementPercent}
                </span>
                <span className="time text-muted">{props.time}</span>
            </div>
        </div>
    )
}

export default Card
