import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleFirstNameChange(e) {
    // setFirstName(event.target.value);
    setFormData({ ...formData, firstName: e.target.value

    });
  }

  function handleLastNameChange(e) {
    // setLastName(event.target.value);
    setFormData({ ...formData, lastName: e.target.value
    });
  }

  function handleChange(e) {
    const name = e.target.value;
    const value = e.target.value;

    if(e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({ ...formData, [name]: value,
    });
  }

  function handleSubmit (e)  {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      onChange={handleFirstNameChange} 
      value={formData.firstName} 
      />
      <input 
      type="text" 
      onChange={handleLastNameChange} 
      value={formData.lastName} 
      />
      <input
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin} />


      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
