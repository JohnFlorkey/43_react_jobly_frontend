import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import UserContext from "./UserContext";
import FunctionContext from "./FunctionContext";
import useFormData from "./useFormData";

function ProfileForm() {
  const user = useContext(UserContext);
  const { updateProfile } = useContext(FunctionContext);
  const [formData, updateFormData] = useFormData(user);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await updateProfile(formData);
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
          onChange={updateFormData}
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
        <Button type="submit">Update Profile</Button>
      </Form.Group>
    </Form>
  );
}

export default ProfileForm;
