import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import styled from "styled-components";
  import Header from "../components/Header";
  import { firebaseAuth } from "../utils/firebase-config";
  import BackgroundImage from "../components/BackgroundImage";
  function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      number: "",
      password: "",

    });
    const navigate = useNavigate();
  
    const handleSignIn = async () => {
      try {
        const { email, password } = formValues;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
        console.log(error);
      }
    };
  
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  
    return (
      <Container showPassword={showPassword}>
        <BackgroundImage />
        <div className="content">
          <Header login />
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1>Sell Your Car At Best Price</h1>
              <h4>Watch anywhere. Cancel anytime.</h4>
            </div>
            <div className="form">
            <input
                type="name"
                placeholder="Name"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="name"
                value={formValues.name}
              />
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="email"
                value={formValues.email}
              />
              <input
                type="mobile number"
                placeholder="Phone Number"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="number"
                value={formValues.number}
              />
              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="password"
                  value={formValues.password}
                />
              )}
              
              {!showPassword && (
                <button onClick={() => setShowPassword(true)}>Get Started</button>
              )}
            </div>
            {showPassword && <button onClick={handleSignIn}>SignUp</button>}
          </div>
        </div>
      </Container>
    );
  }
  
  const Container = styled.div`
    position: relative;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0,0, 0.5);
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template-rows: 15vh 85vh;
      .body {
        gap: 5rem;
        color: white;
        .text {
          gap: 1rem;
          
          text-align: center;
          font-size: 1.5rem;
          h1 {
            padding: 0 25rem;
          }
        }
        .form {
          display: grid;
          grid-template-columns: ${({ showPassword }) =>
            showPassword ? "1fr 1fr" : "2fr 1fr"};
          width: 60%;
          input {
            color: black;
            border: none;
            padding: 1rem;
            font-size: 1.2rem;
            border: 1px solid black;
            &:focus {
              outline: none;
            }
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #040451;
            border: none;
            cursor: pointer;
            color: #ffffff;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color:#040451;
          border: none;
          cursor: pointer;
          color:white;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
  `;
  
  export default Signup;