import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyAPI from "./api";
import SearchForm from "./SearchFrom";

function CompanyList() {
  const [companyList, setCompanyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    async function getCompaniesAPI(searchTerm) {
      const response = await JoblyAPI.getCompanies(searchTerm);
      setCompanyList(response);
    }
    getCompaniesAPI(searchTerm);
  }, [searchTerm]);

  const updateSearchTerm = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <SearchForm updateSearchTerm={updateSearchTerm} />
      {companyList.map((c) => (
        <CompanyCard
          key={c.handle}
          handle={c.handle}
          name={c.name}
          description={c.description}
        />
      ))}
    </div>
  );
}

export default CompanyList;
