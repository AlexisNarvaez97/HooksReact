import React, { useRef } from "react";
import "../02-useEffect/effect.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const hadleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Su nombre"
        className="form-control"
      />

      <button className="btn btn-outline-danger mt-3" onClick={hadleClick}>
        Guardar
      </button>
    </div>
  );
};
