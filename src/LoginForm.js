import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function LoginForm({ props }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "test_user",
    password: "hepdahep",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await props.handleLogin(formData);
    history.push("/");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Button type="submit">Login</Button>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
