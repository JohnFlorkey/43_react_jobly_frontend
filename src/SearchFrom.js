import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function SearchForm({ updateSearchTerm }) {
  const INITIAL_FORM_STATE = { searchTerm: "" };
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if formData.searchTerm has a value use it, otherwise use undefined
    const searchValue = formData.searchTerm ? formData.searchTerm : undefined;
    updateSearchTerm(searchValue);
    //clear the form input
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          name="searchTerm"
          placeholder="enter search term"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </InputGroup>
    </Form>
  );
}

export default SearchForm;
