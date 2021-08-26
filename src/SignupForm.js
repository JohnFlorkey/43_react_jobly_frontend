import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";
import FunctionContext from "./FunctionContext";
import useFormData from "./useFormData";

function SignupForm() {
  const { handleSignup } = useContext(FunctionContext);
  const history = useHistory();

  const SIGNUP_INTIIAL_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  };

  const [formData, updateFormData] = useFormData(SIGNUP_INTIIAL_STATE);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await handleSignup(formData);
    history.push("/");
  };

  return (
    <Form className="SignupForm" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="username">Username: </Form.Label>
        <Form.Control
          type="text"
          placeholder="username"
          value={formData.username}
          name="username"
          id="username"
          onChange={updateFormData}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Password: </Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          value={formData.password}
          name="password"
          id="password"
          onChange={updateFormData}
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
          onChange={updateFormData}
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
          onChange={updateFormData}
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
          onChange={updateFormData}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Button type="submit">Signup</Button>
      </Form.Group>
    </Form>
  );
}

export default SignupForm;
