import Task from "./Task";
import TaskHookForm from "./TaskHookForm";
import PeopleForm from "./PeopleForm";
import { useState } from "react"
import { initialTasks, initialTeam } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./app.css";

 export function notify(text) { toast.success(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0.4,
    theme: "dark",
    })};


function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [team, setTeam] = useState(initialTeam);

  
  function handleTaskSubmit(yeniTask) {
    setTasks([yeniTask, ...tasks])
  }

  function handlePeopleSubmit(yeniKisi) {
    setTeam([...team, yeniKisi])
  }

  function handleComplete(id) {
    console.log("tamamlama fonksiyonunu buraya yazın")
    // const completedTask= tasks.find((e)=>{e.id===id})
    // completedTask.status = "yapıldı"

  }

  return (
    <div className="app">
         <ToastContainer/>
      <div className="formColumn">
        <div className="form-container">
          <h2>Yeni Task</h2>
       {/* <TaskForm kisiler={team} submitFn={handleTaskSubmit} /> */}
          <TaskHookForm kisiler={team} submitFn={handleTaskSubmit} notify={notify}/>
        </div>

        <div className="form-container">
          <h2>Yeni Kişi</h2>
          <PeopleForm kisiler={team} submitFn={handlePeopleSubmit} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="column-title">Yapılacaklar</h2>
          <div className="column-list">
            {tasks
              .filter((t) => t.status === "yapılacak")
              .map((t) => (
                <Task key={t.id} taskObj={t} onComplete={handleComplete} />
              ))}
          </div>
        </div>
        <div className="column">
          <h2 className="column-title">Tamamlananlar</h2>
          <div className="column-list">
            {tasks
              .filter((t) => t.status === "yapıldı")
              .map((t) => (
                <Task key={t.id} taskObj={t} />
              ))}
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default App;
