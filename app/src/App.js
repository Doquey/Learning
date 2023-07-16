import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Tasks from "./components/Tasks";
import Add_task from "./components/Add";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
const App = () => {
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      { title: taskTitle, id: uuidv4(), completed: false },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskID) => {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  };
  const handleTaskClick = (taskID) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) return { ...task, completed: !task.completed };
      return task;
    });

    // Update the tasks array with newTasks
    setTasks(newTasks); // Assuming you have a state or setter function called setTasks to update the tasks state
  };

  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Add_task handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
