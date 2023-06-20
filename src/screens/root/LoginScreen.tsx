import React from "react";
import styled from "styled-components/native";

import Margin from "../../components/Margin";
import LoginLogo from "../../components/login/LoginLogo";
import LoginForm from "../../components/login/LoginForm";
import LoginOptions from "../../components/login/LoginOptions";

const LoginScreen = () => {

  return (
    <Wrapper>
      <Margin props={40} />
      <LoginLogo />
      <Margin props={20} />
      <LoginForm />
      <LoginOptions />
    </Wrapper>
  );
};

export default LoginScreen;

// styled
const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
