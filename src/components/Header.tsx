import React from "react";
import styled from "styled-components/native";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <HeaderView>
      <Text>{text}</Text>
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
  justifyContent: center;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 24px;
  color: #fff;
  fontFamily: ExtraBold;
`;

const TouchableArea = styled.TouchableOpacity`
  opacity: 0.8;
  padding: 6px 5px;
`;

export default Header;