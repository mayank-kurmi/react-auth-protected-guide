import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: {
      value: "",
      error: false,
      errorMessage: "First Name cannot be blank.",
    },
    lastName: {
      value: "",
      error: false,
      errorMessage: "Last Name cannot be blank.",
    },
    email: {
      value: "",
      error: false,
      errorMessage: "Invalid email id.",
    },
    password: {
      value: "",
      error: false,
      errorMessage: "Password should not be blank.",
    },
    isFormValid: false,
  });

  const navigate = useNavigate();

  const submitSignUpForm = (event) => {
    debugger;
    event.preventDefault();

    //const formElement = document.querySelector("#signUpForm");
    //const formData = new FormData(formElement);

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
          },
        };
      } else {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: false,
          },
        };
      }
    }
    const isFormValid =
      !newFormValues.email.error &&
      !newFormValues.firstName.error &&
      !newFormValues.lastName.error &&
      !newFormValues.password.error;

    if (isFormValid) {
      const userDetails = {
        firstName: newFormValues.firstName.value,
        lastName: newFormValues.lastName.value,
        email: newFormValues.email.value,
        password: newFormValues.password.value,
      };
      setLocalStorage("user", userDetails);
      setFormValues(newFormValues);
      navigate("/auth/login");
    } else {
      setFormValues(newFormValues);
      return;
    }
  };
  const setLocalStorage = (keyName, Value) => {
    debugger;
    try {
      window.localStorage.setItem(keyName, JSON.stringify(Value));
    } catch (err) {}
    //setStoredValue(newValue);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
      },
    });
  };
  return (
    <React.Fragment>
      <Container className="my-5">
        <h2 className="fw-normal mb-5">Sign Up</h2>
        <Row>
          <Col md={{ span: 6 }}>
            {/* <FormErrors formErrors={formValues.formErrors}/> */}
            <Form id="signUpForm" onSubmit={submitSignUpForm}>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"signup-firstname"}>FirstName</FormLabel>
                <input
                  type={"text"}
                  className="form-control"
                  id={"idfirstname"}
                  name="firstName"
                  onChange={handleChange}
                  value={formValues.firstName.value}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"signup-lastname"}>LastName</FormLabel>
                <input
                  type={"text"}
                  className="form-control"
                  id={"idlastname"}
                  name="lastName"
                  onChange={handleChange}
                  value={formValues.lastName.value}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"signup-email"}>Email</FormLabel>
                <input
                  type={"text"}
                  className="form-control"
                  id={"idemail"}
                  name="email"
                  onChange={handleChange}
                  value={formValues.email.value}
                  required
                />
              </FormGroup>

              <FormGroup className="mb-3">
                <FormLabel htmlFor={"signup-password"}>Password</FormLabel>
                <input
                  type={"password"}
                  className="form-control"
                  id={"idpassword"}
                  name="password"
                  onChange={handleChange}
                  value={formValues.password.value}
                  required
                />
              </FormGroup>
              <Button type="submit" className="btn-primary" id="signup-btn">
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;
