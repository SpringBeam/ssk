import React, { useState } from "react";
import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Wrapper>
        <FormWrapper>
          <FormInput
            editable
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="이메일"
            placeholderTextColor="#979797"
          />
        </FormWrapper>
        <FormWrapper>
          <FormInput
            editable
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="비밀번호"
            placeholderTextColor="#979797"
          />
        </FormWrapper>
        <LoginButton>
          <LoginText>로그인 하기</LoginText>
        </LoginButton>
      </Wrapper>
    </>
  );
};

export default LoginForm;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 15px 30px;
`;

const FormWrapper = styled.View`
  background-color: #e9ecef;
  border-radius: 4px;
  padding: 5px
`;

const FormInput = styled.TextInput`
  padding: 10px;
  color: #0C9BFB;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0C9BFB;
  padding: 10px;
`;

const LoginText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;