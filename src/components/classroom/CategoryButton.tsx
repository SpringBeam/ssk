import React from "react";
import styled, { css } from "styled-components/native";

import { Ionicons, Entypo } from "@expo/vector-icons";

interface UserButtonProps {
  isSelected: number;
  setIsSelected: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryButton = ({ isSelected, setIsSelected }: UserButtonProps) => {
  return (
    <>
      <ButtonListContainer>
        <ButtonContainer onPress={() => setIsSelected(1)} isSelected={isSelected === 1}>
          <Ionicons
            name="calendar" 
            size={24} 
            color={isSelected === 1 ? "#fff" : "#a4a4a4"} 
          />
          <ButtonText isSelected={isSelected === 1}>일정 관리</ButtonText>
        </ButtonContainer>
        <ButtonContainer
          activeOpacity={0.8}
          onPress={() => setIsSelected(2)}
          isSelected={isSelected === 2}
        >
          <Entypo
            name="pencil"
            size={24}
            color={isSelected === 2 ? "#fff" : "#a4a4a4"}
          />
          <ButtonText isSelected={isSelected === 2}>숙제 관리</ButtonText>
        </ButtonContainer>
        <ButtonContainer onPress={() => setIsSelected(3)} isSelected={isSelected === 3}>
          <Entypo
            name="bookmark"
            size={24}
            color={isSelected === 3 ? "#fff" : "#a4a4a4"}
          />
          <ButtonText isSelected={isSelected === 3}>복습 관리</ButtonText>
        </ButtonContainer>
      </ButtonListContainer>
    </>
  );
};

export default CategoryButton;

// styled
const ButtonListContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
`;

const ButtonContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 12px;
  width: 33.3333%;
  height: 50px;
  gap: 5px;
  background-color: ${(props) => (props.isSelected ? "#0c9bfb" : "#fff")};
`;

const ButtonText = styled.Text<{isSelected: boolean}>`
  font-size: 14px;
  font-family: "Medium";
  color: ${(props) => (props.isSelected ? "#fff": "#a4a4a4")};
`;