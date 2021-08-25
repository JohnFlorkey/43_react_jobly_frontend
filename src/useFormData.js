import { useState } from "react";

function useFormData(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  const updateFormData = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return [formData, updateFormData];
}

export default useFormData;
