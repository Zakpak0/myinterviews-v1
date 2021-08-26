import React from "react";
import { red } from 'chalk'
import { FaTimes } from 'react-icons/fa'
import './Interviews.css'

const Interview = ({ interview, id, onDelete, note, timestamp, date, experience, catergory, company }) => {
    return (
        <div className="">
        <header>
            <div className="task">
                <h3>{company}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(id)}
                />
                </h3>
                {timestamp ? (<p>{new Date(timestamp.toDate()).toLocaleString()}</p>)
                :
                <p>Loading</p>
            }
                <p>{note}</p>
                <p>{date}</p>
                </div>
            </header>
        </div>
    )
}

export default Interview
