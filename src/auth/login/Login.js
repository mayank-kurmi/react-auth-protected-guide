import axios from "axios";
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
//import {useNavigate } from "react-router-dom";
import { Link as RouterLink, useNavigate } from "react-router-dom";
const Login = () => {
  //const  = "eve.holt@reqres.in";
  //const  = "cityslicka";
  const [enteredUserEmail, setEnteredUserEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const loginAPI = "https://reqres.in/api";
  const navigate = useNavigate();

  const submitLoginForm = (event) => {
    //debugger;
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    const formElement = document.querySelector("#loginForm");
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);
    const userData = {
      email: formDataJSON.email,
      password: formDataJSON.password,
    };

    const userStoredValue = window.localStorage.getItem("user");
    if (userStoredValue) {
      const userDetails = JSON.parse(userStoredValue);
      if (
        userData.email == userDetails.email &&
        userData.password == userDetails.password
      ) {
        //localStorage.setItem("user-token", token);
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } else {
      setShowAlert(true);
    }
    /* const btnPointer = document.querySelector("#login-btn");
    btnPointer.innerHTML = "Please wait..";
    btnPointer.setAttribute("disabled", true);

    axios
      .post(loginAPI + "/login", JSON.stringify(userData), {
        headers: headers,
      })
      .then((response) => {
        btnPointer.innerHTML = "Login";
        btnPointer.removeAttribute("disabled");
        const data = response.data;
        const token = data.token;
        if (!token) {
          alert("Unable to login. Please try after some time.");
          return;
        }
        localStorage.clear();
        localStorage.setItem("user-token", token);
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        btnPointer.innerHTML = "Login";
        btnPointer.removeAttribute("disabled");
        alert("Oops! Some error occured.");
      }); */
  };

  const handleInputChange = (e) => {
    //debugger;
    const eleName = e.target.name;
    const eleValue = e.target.value;
    switch (eleName) {
      case "email":
        setEnteredUserEmail(e.target.value);
        break;
      case "password":
        setEnteredPassword(e.target.value);
        break;
      default:
        break;
    }
    const { name, value } = e.target;
  };

  const handleSignUp = () => {
    navigate("/auth/signup");
  };
  return (
    <React.Fragment>
      <Container className="my-5">
        <h2 className="fw-normal mb-5">Login</h2>
        <Row>
          <Col md={{ span: 6 }}>
            {showAlert ? (
              <div className="alert alert-danger" role="alert">
                No records found this user.Please Sign-Up.
              </div>
            ) : (
              <></>
            )}

            <Form id="loginForm" onSubmit={submitLoginForm}>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-username"}>Email</FormLabel>
                <input
                  type={"text"}
                  className="form-control"
                  id={"login-username"}
                  name="email"
                  required
                  onChange={handleInputChange}
                  value={enteredUserEmail}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-password"}>Password</FormLabel>
                <input
                  type={"password"}
                  className="form-control"
                  id={"login-password"}
                  name="password"
                  onChange={handleInputChange}
                  value={enteredPassword}
                  required
                />
              </FormGroup>
              <Button type="submit" className="btn-success mt-2" id="login-btn">
                Login
              </Button>
              {/* <RouterLink >
              <button type="button" className="btn btn-link" onClick={handleSignUp}> {"Don't have an account? Sign Up"}</button>
                
              </RouterLink> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Login;
