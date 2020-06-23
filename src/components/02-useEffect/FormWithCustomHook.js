import React from "react";
import "./effect.css";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [formState, hadleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { email, name, password } = formState;

  const hadleSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  };

  return (
    <form onSubmit={hadleSubmit}>
      <h1>Form With Custom Hook </h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          placeholder="Tu nombre"
          name="name"
          className="form-control"
          autoComplete="off"
          value={name}
          onChange={hadleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="email@hotmail.com"
          name="email"
          className="form-control"
          autoComplete="off"
          value={email}
          onChange={hadleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="*****"
          name="password"
          className="form-control"
          value={password}
          onChange={hadleInputChange}
        />
      </div>

      <button className="btn btn-danger btn-lg"> Guardar </button>
    </form>
  );
};
