import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'June 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting with XY',
        day: 'June 14th at 10:00am',
        reminder: true, 
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'May 3rd at 1:15pm',
        reminder: false,
    }
])
// Delete Task 

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Display'}
    </div>
  );
}


export default App;
