import { useState } from "react";

function useSearchTerm(initialValue) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const updateSearchTerm = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return [searchTerm, updateSearchTerm];
}

export default useSearchTerm;
