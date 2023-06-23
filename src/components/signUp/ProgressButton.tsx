import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { Ionicons } from '@expo/vector-icons'; 

import { useSignUpFormStore } from "../../store/store";

interface ProgressButtonProps {
  page: string;
  email: string;
  password: string;
  name: string;
  role: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

type addFormProps = {
  email: string;
  password: string;
  name: string;
};

const ProgressButton = ({ page, email, password, name, role, setPage }: ProgressButtonProps) => {
  const { datas, addDatas, clearDatas } = useSignUpFormStore(); // 회원가입 폼 전역 상태 저장
  const navigation = useNavigation<any>();

  const addForm = ({email, password, name}: addFormProps) => {
    addDatas(email);
    addDatas(password);
    addDatas(name);
  };

  const createForm = async () => {
    const body = {
      "userId": email,
      "password": password,
      "role": role,
      "name": name,
    }
    console.log("보내기 전", body);
    try {
      const response = await axios.post("http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/auth/signup", body);
      console.log("response: ", response)
    } catch (error) {
      console.log("error: ", error);
    }
  };

  let component;
  let handleButton;
  let handleBackButton;

  switch (page) {
    case "RolePage":
      handleButton = async () => {
        await addDatas(role)
        setPage("BasicInfoPage");
      };
      component = (
        <>
          <UntouchableContainer />
          <ButtonContainer
            onPress={handleButton}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 2,
            }}
          >
            <Ionicons name="caret-forward" size={32} color="#0C9BFB" />
          </ButtonContainer>
        </>
      );
      break;
    case "BasicInfoPage":
      handleButton = async () => {
        await addForm({email, password, name});
        await createForm();
        setPage("CompletePage");
      };
      handleBackButton = () => {
        setPage("RolePage");
      };
      component = (
        <>
          <ButtonContainer
            onPress={handleBackButton}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 2,
            }}
          >
            <Ionicons name="caret-back" size={32} color="#0C9BFB" />
          </ButtonContainer>
          <ButtonContainer
            onPress={handleButton}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 2,
            }}
          >
            <Ionicons name="caret-forward" size={32} color="#0C9BFB" />
          </ButtonContainer>
        </>
      );
      break;
    case "CompletePage":
      handleButton = () => {
        console.log(datas);
      }
      component = (
        <>
          <LongButton
            onPress={handleButton}
          >
            <LongButtonText>
              시작하기
            </LongButtonText>
          </LongButton>
        </>
      )
  }

  return (
    <Wrapper>
      {component}
    </Wrapper>
  );
};

export default ProgressButton;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

const ButtonContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  activeOpacity: 0.8;
  background-color: #fff;
  border-radius: 4px;
`;

const UntouchableContainer = styled.View`
  width: 40px;
  height: 40px;
`;

const LongButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  activeOpacity: 0.8;
  background-color: #0C9BFB;
  padding: 10px;
`;

const LongButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "ExtraBold";
`;