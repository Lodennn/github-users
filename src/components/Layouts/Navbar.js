import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "../../assets/preloader.gif";

const Navbar = () => {
  const { isLoading, isAuthenticated, user, logout } = useAuth0();

  const logoutHandler = () => {
    logout({ returnTo: window.location.origin });
  };

  const isUser = isAuthenticated && user;
  const username = isUser && (user.name || user.nickname);

  if (isLoading)
    return (
      <Wrapper>
        <img src={LoadingSpinner} alt="Loading..." />
      </Wrapper>
    );

  return (
    <Wrapper>
      {isUser && <img src={user.picture} alt={user.name} />}
      {isUser && (
        <h4>
          Welcome, <strong>{username.toUpperCase()}</strong>
        </h4>
      )}
      {isUser && <button onClick={logoutHandler}>Logout</button>}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;