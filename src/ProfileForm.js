import React, { useContext, useState } from "react";
import UserContext from "./userContext";

/**
 */
function ProfileForm({ updateUser }) {
  const { currUser } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState([]);
  const initialFormData = {
    userData: {
      username: currUser.user.username,
      firstName: currUser.user.firstName,
      lastName: currUser.user.lastName,
      email: currUser.user.email,
    },
    isUpdated: false,
  };
  const [formData, setFormData] = useState(initialFormData);

  /** Update form input. */
  //ASK FOR A CLEANER WAY
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      userData: { ...fData.userData, [name]: value },
      isUpdated: false,
      //   fData[userData[name]] : value,
    }));
  }

  /** Call parent function to update.*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    let userData = { ...formData.userData };
    delete userData.username;

    try {
      await updateUser(userData, currUser.user.username);
      setFormData((fData) => ({
        userData: { ...fData.userData },
        isUpdated: true,
        //   fData[userData[name]] : value,
      }));
    } catch (error) {
      setErrorMsg(error);
    }
  }

  //separate file
  function renderForm() {
    let fullPrompt = [];
    Object.keys(initialFormData.userData).map((field) => {
      fullPrompt.push(
        <div className="mb-3" key={field}>
          <input
            disabled={field === "username"}
            id={`Profile-${field}`}
            name={field}
            className="form-control"
            placeholder={field}
            onChange={handleChange}
            value={formData.userData[field]}
            aria-label={field}
          />
        </div>
      );
    });
    return fullPrompt;
  }

  return (
    <div>
      <form className="ProfileForm" onSubmit={handleSubmit}>
        {renderForm()}

        <button className="btn-primary rig btn btn-sm ProfileForm-Btn">
          Save changes
        </button>
      </form>
      {errorMsg.map((err) => (
        <p>{err}</p>
      ))}
    </div>
  );
}

export default ProfileForm;
