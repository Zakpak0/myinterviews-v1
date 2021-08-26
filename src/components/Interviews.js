import React from 'react';
import Interview from './Interview'
import './Interviews.css'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';

const Interviews = ({ onDelete }) => {
      const [interviews] = useCollection(
      db.collection('interviews').orderBy('timestamp', 'desc')
    );
    return (
      <div className='row interview-well intervews-section'>
        <div className="">
          <header>
          {interviews? interviews.docs.map((interview)=> (
            <Interview 
            key={interview.id}
            id={interview.id}
            company={interview.data().company}
            note={interview.data().note}
            timestamp={interview.data().timestamp}
            date={interview.data().date}
            experience={interview.data().experience}
            category={interview.data().category}
            onDelete={onDelete} /> 
              )) : <p>'No Tasks to Show!'</p> }
          </header>
          </div>
          </div>
    )
}

export default Interviews
