// deprecated

import React from "react";
import styled from "styled-components/native";

import { Entypo } from '@expo/vector-icons'; 

interface SelectButtonProps {
  buttonText: string;
  buttonType: string;
}

const SelectButton = ({ buttonText, buttonType } : SelectButtonProps) => {
  return(
    <>
      <ButtonContainer>
          { buttonType === "homework" ? 
            <Entypo name="pencil" size={18} color="#020715" /> : 
            <Entypo name="bookmark" size={18} color="#020715" />
          }
          <ButtonText>{buttonText}</ButtonText>
        <Entypo name="chevron-right" size={18} color="#020715" />
      </ButtonContainer>
    </>
  );
};

export default SelectButton;

// styled
const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  border-radius: 12px;
  padding: 15px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const ButtonText = styled.Text`
  color: #020715;
  font-size: 16px;
  font-family: "Bold";
`;