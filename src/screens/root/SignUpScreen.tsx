import React, {useState} from "react";
import styled from "styled-components/native";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import ProgressButton from "../../components/signUp/ProgressButton";
import RolePage from "../../pages/signUp/RolePage";
import BasicInfoPage from "../../pages/signUp/BasicInfoPage";
import CompletePage from "../../pages/signUp/CompletePage";

const SignUpScreen = () => {
  const [role, setRole] = useState("Tutor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState("RolePage");

  let pageComponent;
  switch(page) {
    case "RolePage":
      pageComponent = (
        <RolePage
          role={role}
          setRole={setRole}
        />
      )
      break;
    case "BasicInfoPage":
      pageComponent = (
        <BasicInfoPage
          email={email}
          password={password}
          name={name}
          setEmail={setEmail}
          setPassword={setPassword}
          setName={setName}
        />
      )
      break;
    case "CompletePage":
      pageComponent = (
        <CompletePage />
      )
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Header text="회원가입" type="withBack"/>
      <ComponentWrapper>
        {pageComponent}
      </ComponentWrapper>
      <ButtonWrapper>
        <ProgressButton
          role={role}
          email={email}
          password={password}
          name={name}
          page={page} 
          setPage={setPage}
        />
      </ButtonWrapper>
    </Layout>
  );
};

export default SignUpScreen;

// styled
const ComponentWrapper = styled.View`
  flex: 1;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 20px;
`;