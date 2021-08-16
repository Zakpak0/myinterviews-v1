import Header from './components/Header';
import Interviews from './components/Interviews';
import AddInterview from './components/AddInterview';
import { useState } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestone';

import './App.css';

const App = () => {

  const [showAddInterview, setShowAddInterview] = useState(false);

  /* Firebase Configuration */
  const firebaseConfig = {
    // Firebase 
    apiKey: `${process.env.API_KEY}`,
    authDomain: "my-interview-diary.firebaseapp.com",
    databaseURL: "https://my-interview-diary.firebaseio.com",
    projectId: "my-interview-diary",
    storageBucket: "my-interview-diary.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "my-interview-diary",
  };

  /* Initialize Firebase */
  firebase.initializeApp(firebaseConfig);

  const [interviews, setInterviews] = useState([
      {
          id: 1,
          companyName: "Phil",
          note: "This is what happened at Phil org during my interview",
          day: "Feb 8th at 3pm",
          reminder: true
      },
      {
          id: 2,
          companyName: "Microsoft",
          note: "Spent time on-site with microsoft and felt their culture was good, it just lacked a lot of organization.",
          day: "April 16th at 10am",
          reminder: true
      },
      {
          id: 3,
          companyName: "NVIDIA",
          note: "Interview 2 went well, just trying to figure out if there are any other women on staff.",
          day: "April 20nd at 1pm",
          reminder: true
      },
      {
          id: 4,
          companyName: "RE CO",
          note: "Scheduled 3 interviews in a row.",
          day: "July 5th at 1pm",
          reminder: false
      }
  ]);

  const addInterview = (interview => {
    console.log("add", interview);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newInterviewEntry = { id, ...interview }
    setInterviews([...interviews, newInterviewEntry]);
  })

  const deleteInterview = (id => {
    console.log('deelete', id);
    setInterviews(interviews.filter((interview) => interview.id !== id))
  })

  return (
    <div className="container">
      <Header onAdd={() => setShowAddInterview(!showAddInterview)} showAdd={showAddInterview} />
      {showAddInterview && <AddInterview onAdd={addInterview} />}
      {interviews.length > 0 ? (<Interviews 
        interviews={interviews} 
        onDelete={deleteInterview}
      />) : ( 'No Tasks to Show!') }
    </div>
  );
}

export default App;
