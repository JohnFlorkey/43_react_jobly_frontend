import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router";
import CompanyCard from "./CompanyCard";
import JoblyAPI from "./api";
import SearchForm from "./SearchFrom";
import UserContext from "./UserContext";

function CompanyList() {
  const user = useContext(UserContext);
  const [companyList, setCompanyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    async function getCompaniesAPI(searchTerm) {
      const response = await JoblyAPI.getCompanies(searchTerm);
      setCompanyList(response);
    }
    getCompaniesAPI(searchTerm);
    return function cleanup() {
      setCompanyList([]);
    };
  }, [searchTerm]);

  const updateSearchTerm = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return user.username ? (
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
  ) : (
    <Redirect to="/"></Redirect>
  );
}

export default CompanyList;
