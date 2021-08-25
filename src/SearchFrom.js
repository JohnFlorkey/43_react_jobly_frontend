import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import useFormData from "./useFormData";

function SearchForm({ updateSearchTerm }) {
  const INITIAL_FORM_STATE = { searchTerm: "" };
  const [formData, updateFormData] = useFormData(INITIAL_FORM_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if formData.searchTerm has a value use it, otherwise use undefined
    const searchValue = formData.searchTerm ? formData.searchTerm : undefined;
    updateSearchTerm(searchValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          name="searchTerm"
          placeholder="enter search term"
          value={formData.searchTerm}
          onChange={updateFormData}
        />
        <Button type="submit">Search</Button>
      </InputGroup>
    </Form>
  );
}

export default SearchForm;
