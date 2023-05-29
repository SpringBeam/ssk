import React from "react";
import styled from "styled-components/native";
import * as Linking from "expo-linking";

const REDIRECT_URI = "exp://192.168.120.1:19000/index.exp";
const authKakao = `http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;

interface OAuthLoginButtonProps {
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
  isClicked: number;
}

const OAuthLoginButton: React.FC<OAuthLoginButtonProps> = ({ setIsClicked, isClicked }) => {
  const link = () => {
    Linking.openURL(authKakao);
  };

  const onPressHandler = () => {
    console.log('백엔드 링크로 고고싱');
    setIsClicked(isClicked + 1);
    link();
  };

  return (
    <ImageButton onPress={onPressHandler}>
      <ButtonText>
        로그인하기
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