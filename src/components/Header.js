import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo1.jpg";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <StyledHeader className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  padding: 0 4rem;
  @media (max-width: 600px) {
    padding: 0 2.5rem;
  }
  .logo {
    img {
      height: 5rem;
      @media (max-width: 600px) {
        height: 3rem;
      }
    }
   
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #040451;
    border: none;
    cursor: pointer;
    color: #ffffff;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;