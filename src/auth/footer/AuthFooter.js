import React from "react";
import { Container } from "react-bootstrap";

const AuthFooter = () => {
  const [year, setYear] = useState();
  const getYear = () => {
    return setYear(new Date().getFullYear());
  };
  useEffect(() => {
    getYear();
  }, []);
  return (
    <React.Fragment>
      <footer className="bg-light border-top py-3 fixed-bottom">
        <Container>&copy; Shopping Bliss - {year}</Container>
      </footer>
    </React.Fragment>
  );
};

export default AuthFooter;
