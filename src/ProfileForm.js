import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import UserContext from "./UserContext";
import FunctionContext from "./FunctionContext";

function ProfileForm() {
  const user = useContext(UserContext);
  const { updateProfile } = useContext(FunctionContext);
  const [formData, setFormData] = useState(user);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await updateProfile(formData);
    setFormData({ ...formData, password: "" });
    document.getElementById("password").value = "";
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          disabled
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">First Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="firstName"
          value={formData.firstName}
          name="firstName"
          id="firstName"
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Last Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="lastName"
          value={formData.lastName}
          name="lastName"
          id="lastName"
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Email: </Form.Label>
        <Form.Control
          type="text"
          placeholder="email"
          value={formData.email}
          name="email"
          id="email"
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Password: </Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
        ></Form.Control>
        <Form.Text>Enter password to update profile</Form.Text>
      </Form.Group>
      <Form.Group>
        <Button type="submit">Update Profile</Button>
      </Form.Group>
    </Form>
  );
}

export default ProfileForm;
