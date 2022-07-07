import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../actions/actionsTodo";
const Edit = () => {
  const current = useSelector((state) => state.current);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    const updTask = {
      id: current.id,
      description: text,
    };
    dispatch(edit(updTask));
  };

  useEffect(() => {
    if (current) {
      setText(current.description);
    }
  }, [current]);
  return (
    <div style={{ color: "" }}>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ backgroundColor: "Gainsboro" }}
          >
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ color: "purple" }}
              >
                Edit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="w3-input w3-animate-input"
                style={{ width: "30%" }}
                type="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "Purple" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClick}
                style={{ backgroundColor: "Purple" }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
