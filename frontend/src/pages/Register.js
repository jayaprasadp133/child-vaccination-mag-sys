import { useState } from "react";
import { registerChild } from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    parent_name: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerChild(form);

    alert(
      "Registered!\nReg No: " + res.data.register_number
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="name" onChange={handleChange} placeholder="Name" />
      <input id="dob" type="date" onChange={handleChange} />
      <input id="parent_name" onChange={handleChange} placeholder="Parent" />
      <input id="phone" onChange={handleChange} placeholder="Phone" />
      <button>Register</button>
    </form>
  );
}

export default Register;