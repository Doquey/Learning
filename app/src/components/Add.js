import React, { useState } from "react";
import "./Add.css";
import Button from "./Button";

const Add_task = ({ handleTaskAddition }) => {
  const [inputData, setinputData] = useState("");

  const handleInputChange = (e) => {
    setinputData(e.target.value);
  };

  const handleInputTaskAddition = () => {
    handleTaskAddition(inputData);
    setinputData("");
  };
  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
        name="task"
      />

      <div className="add-button">
        <Button onClick={handleInputTaskAddition}>Add</Button>
      </div>
    </div>
  );
};

export default Add_task;
