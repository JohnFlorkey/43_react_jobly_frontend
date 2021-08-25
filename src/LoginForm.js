import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import FunctionContext from "./FunctionContext";
import useFormData from "./useFormData";

function LoginForm() {
  const { handleLogin } = useContext(FunctionContext);
  const history = useHistory();
  const [formData, updateFormData] = useFormData({
    username: "test_user",
    password: "hepdahep",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await handleLogin(formData);
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
          onChange={updateFormData}
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
          onChange={updateFormData}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Button type="submit">Login</Button>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
