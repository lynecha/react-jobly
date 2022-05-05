import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

/** 
*/
function LoginForm({ login }) {
  const navigate = useNavigate();
  let initialFormData = {username: "", password: ""};
  const [formData, setFormData] = useState(initialFormData);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData(initialFormData);
    navigate("/")
    }


  function renderForm() {
    let fullPrompt = []
    Object.keys(initialFormData).map((field) => {
      fullPrompt.push(
        <div className="mb-3" key={field}>
          <input
            id={`login-${field}`}
            name={field}
            className="form-control"
            placeholder={field}
            onChange={handleChange}
            value={formData[field]}
            aria-label={field}
          />
        </div>
      )
    })
    return fullPrompt;
  }

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>

        {renderForm()}

        <button className="btn-primary rig btn btn-sm loginForm-Btn">
          Login
        </button>
      </form>
    </div>

  );
}

export default LoginForm;