import React from "react";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { currentTs, deleteTs, toggleCompleted } from "../actions/actionsTodo";

const Task = ({ todo: { id, description, isDone } }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.id === "edit") {
      dispatch(currentTs({ id, description, isDone }));
    }
    if (e.target.id === "delete") {
      dispatch(deleteTs(id));
    }

    if (e.target.id === "completed") {
      dispatch(toggleCompleted(id));
    }
  };
  return (
    <div style={{ padding: 7 }}>
      <li
        className={`list-group-item ${
          isDone && "list-group-item-success"
        } d-flex align-items-center justify-content-between`}
      >
        <div className={isDone && "completed"}>{description}</div>
        <div className="btn-group" role="group">
          <IconContext.Provider style={{ color: "DarkGreen", size: 20 }}>
            <i
              id="completed"
              className={`fa fa-check text-${isDone ? "success" : "secondary"}`}
              onClick={handleClick}
              style={{ color: "Purple" }}
            ></i>
            <i
              id="edit"
              className="fa-solid fa-pen-to-square"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ color: "Purple" }}
              onClick={handleClick}
            ></i>
            <i
              id="delete"
              className="fa-solid fa-trash-can"
              onClick={handleClick}
              style={{ color: "Purple" }}
            ></i>
          </IconContext.Provider>
        </div>
      </li>
    </div>
  );
};

export default Task;
