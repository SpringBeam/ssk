import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";
import { Linking } from "react-native";

const REDIRECT_URI = "http://localhost:19006/--/index.exp";
const authKakao = `http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;

interface OAuthLoginButtonProps {
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
  isClicked: number;
}

const OAuthLoginButton: React.FC<OAuthLoginButtonProps> = ({ setIsClicked, isClicked }) => {
  const onPressHandler = async () => {
    let data = await WebBrowser.openBrowserAsync(authKakao);
  };
  
  return (
    <ImageButton onPress={() => onPressHandler()}>
      <ButtonText>
        하이
      </ButtonText>
    </ImageButton>
  );
};

export default OAuthLoginButton;

const ImageButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ButtonText = styled.Text`
  
`;