import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const PortalFooter = () => {
  const [year, setYear] = useState();
  const getYear = () => {
    return setYear(new Date().getFullYear());
  };
  useEffect(() => {
    getYear();
  }, []);
  return (
    <React.Fragment>
      <footer className="bg-light border-top py-3 mt-auto">
        <Container>&copy; React Auth Demo - {year} </Container>
      </footer>
    </React.Fragment>
  );
};

export default PortalFooter;
