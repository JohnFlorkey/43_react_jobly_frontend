import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";
// import JoblyApi from "./api";

function SignupForm({ props }) {
  const history = useHistory();

  const SIGNUP_INTIIAL_STATE = {
    username: "test_user",
    firstName: "test",
    lastName: "user",
    password: "hepdahep",
    email: "test.user@nodomain.com",
  };
  const [formData, setFormData] = useState(SIGNUP_INTIIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await props.handleSignup(formData);
    history.push("/");
    // async function registerAPI(formData) {
    //   const response = await JoblyApi.postSignup(formData);
    //   updateAuthToken({
    //     username: formData.username,
    //     authToken: response.token,
    //   });
    //   setFormData(SIGNUP_INTIIAL_STATE);
    //   history.push("/");
    // }
    // registerAPI(formData);
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
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Password: </Form.Label>
        <Form.Control
          type="text"
          placeholder="password"
          value={formData.password}
          name="password"
          id="password"
          onChange={handleChange}
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
        <Button type="submit">Signup</Button>
      </Form.Group>
    </Form>
  );
}

export default SignupForm;
