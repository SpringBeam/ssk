import React from "react";
import styled from "styled-components/native";

import { Ionicons } from '@expo/vector-icons'; 

interface ProgressButtonProps {
  page: string;
}

const ProgressButton = ({page}: ProgressButtonProps) => {
  let component;
  switch (page) {
    case "RolePage":
      component = (
        <>
          <UntouchableContainer />
          <ButtonContainer
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