import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import EditIcon from "@mui/icons-material/Edit";

const List = ({ id, text, deleteItem, updateItem }) => {
  const [done, setdone] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [run, setRun] = useState(false);

  const handleDelete = () => {
    return deleteItem(id);
  };

  const handleUpdate = () => {
    return updateItem(id);
  };

  const handleDone = () => {
    setdone(!done);
    setRun(false);
  };

  const startTimer = () => {
    setRun(true);
  };

  const pauseTimer = () => {
    setRun(false);
  };
  useEffect(() => {
    let interval = 0;
    if (run === true) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [run]);

  return (
    <button
      type="button"
      className="d-flex justify-content-between align-items-center btn btn-outline-light list-group-item list-group-item-action"
    >
      {done ? (
        <p style={{ textDecoration: "line-through" }}>{text}</p>
      ) : (
        <p style={{ textDecoration: "none" }}>{text}</p>
      )}
      <div className="box2 d-flex align-items-center">
        <div className="buttons">
          <button
            onClick={handleDone}
            type="button"
            className="btn btn-outline-success"
          >
            {done ? <CancelIcon /> : <DoneIcon />}
          </button>
          {done ? null : run === false ? (
            <button
              onClick={startTimer}
              type="button"
              className="btn btn-outline-secondary"
            >
              <PlayArrowIcon />
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              type="button"
              className="btn btn-outline-secondary"
            >
              <PauseIcon />
            </button>
          )}

          {done ? null : (
            <button
              onClick={handleUpdate}
              type="button"
              className="btn btn-outline-dark"
            >
              <EditIcon />
            </button>
          )}

          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-outline-danger"
          >
            <DeleteForeverIcon />
          </button>
        </div>
        <div className="timer ms-3">
          <p>
            {Math.floor(seconds / 3600)}:{Math.floor(seconds / 60)}:
            {seconds % 60}
          </p>
        </div>
      </div>
    </button>
  );
};

export default List;
