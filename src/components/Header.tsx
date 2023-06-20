import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons'; 

interface HeaderProps {
  text: string;
  type?: string;
}

const Header = ({ text, type }: HeaderProps) => {
  const navigation = useNavigation<any>();

  const handleBackButton = () => {
    navigation.goBack();
  }

  let component;
  switch(type) {
    case "basic": 
      component = (
        <>
          <UntouchableArea />        
          <Text>
            {text}
          </Text>
          <UntouchableArea />
        </>
      );
      break;
    case "withBack":
      component = (
        <>
          <TouchableArea
            onPress={handleBackButton}
          >
            <Ionicons name="caret-back" size={24} color="#fff" />
          </TouchableArea>
          <Text>
            {text}
          </Text>
          <UntouchableArea />
        </>
      );
      break;
    case "advanced":
      component = (
        <>
          <TouchableArea
            onPress={handleBackButton}
          >
            <Ionicons name="caret-back" size={24} color="#fff" />
          </TouchableArea>
          <Text>
            {text}
          </Text>
          <TouchableArea>
            <Ionicons name="caret-forward" size={24} color="#fff" />
          </TouchableArea>
        </>
      );
      break;
    default:
      component = (
        <>
          <UntouchableArea />        
          <Text>
            {text}
          </Text>
          <UntouchableArea />
        </>
      );
      break;
  }

  return (
    <HeaderView>
      {component}
    </HeaderView>
  );
};

// styled
const HeaderView = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  backgroundColor: #0c9bfb;
  padding: 15px;
  justifyContent: space-between;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 24px;
  color: #fff;
  fontFamily: ExtraBold;
`;

const TouchableArea = styled.TouchableOpacity`
  activeOpacity: 0.8;
  width: 24px;
  height: 24px;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

const UntouchableArea = styled.View`
  width: 24px;
  height: 24px;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

export default Header;