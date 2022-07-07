import React, { Fragment } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { add, filter } from "../actions/actionsTodo";
const Add = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (text) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        description: text,
        isDone: false,
      };
      dispatch(add(newTask));
      setText("");
    }
  };

  const handleFilter = (e) => {
    dispatch(filter(e.target.value));
  };
  return (
    <Fragment>
      <div className="slect-box float-end">
        <select
          className="form-select form-select-sm"
          aria-label="form-select-sm example"
          style={{
            backgroundColor: "DarkGreen",
            color: "white",
            border: 0,
            outline: 0,
          }}
          onClick={handleFilter}
        >
          <option
            selected
            defaultvalue="All"
            value="All"
            onClick={handleFilter}
          >
            All
          </option>

          <option value="Completed" id="Completed" onClick={handleFilter}>
            Completed
          </option>
          <option value="Uncompleted" id="Uncompleted" onClick={handleFilter}>
            Uncompleted
          </option>
        </select>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
        />
      </div>

      <div className=" float-start">
        <button
          className="btn"
          style={{ width: 150, backgroundColor: "DarkGreen", color: "white" }}
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </Fragment>
  );
};

export default Add;
