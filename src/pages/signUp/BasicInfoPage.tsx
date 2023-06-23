import React, { useState } from "react";
import styled from "styled-components/native";

interface BasicInfoPageProps {
  email: string;
  password: string;
  name: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const BasicInfoPage = ({email, password, name, setEmail, setPassword, setName} : BasicInfoPageProps) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("유효한 이메일을 입력해주세요.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("비밀번호는 최소 6자 이상이어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("이름을 입력해주세요.");
    } else {
      setNameError("");
    }
  };

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <WarningContainer>
            <WarningText>
              {emailError}
            </WarningText>
          </WarningContainer>
          <FormContainer>
            <SignUpForm
              value={email}
              onChangeText={setEmail}
              onBlur={validateEmail}
              placeholder="이메일"
              placeholderTextColor="#979797"
            />
          </FormContainer>
        </ContentWrapper>
        <ContentWrapper>
          <WarningContainer>
            <WarningText>
              {passwordError}
            </WarningText>
          </WarningContainer>
          <FormContainer>
            <SignUpForm
              value={password}
              onChangeText={setPassword}
              onBlur={validatePassword}
              secureTextEntry
              placeholder="비밀번호"
              placeholderTextColor="#979797"
            />
          </FormContainer>
        </ContentWrapper>
        <ContentWrapper>
          <WarningContainer>
            <WarningText>
              {confirmPasswordError}
            </WarningText>
          </WarningContainer>
          <FormContainer>
            <SignUpForm
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onBlur={validateConfirmPassword}
              secureTextEntry
              placeholder="비밀번호 확인"
              placeholderTextColor="#979797"
            />
          </FormContainer>
        </ContentWrapper>
        <ContentWrapper>
          <WarningContainer>
            <WarningText>
              {nameError}
            </WarningText>
          </WarningContainer>
          <FormContainer>
            <SignUpForm
              value={name}
              onChangeText={setName}
              onBlur={validateName}
              placeholder="이름"
              placeholderTextColor="#979797"
            />
          </FormContainer>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default BasicInfoPage;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 15px;
`;

const FormContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
`;

const SignUpForm = styled.TextInput`
  width: 100%;
  color: #0C9BFB;
  padding: 15px
`;

const WarningContainer = styled.View`
  width: 100%;
`;

const WarningText = styled.Text`
  padding: 0 15px;
  color: #DB4455;
  font-size: 13px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;