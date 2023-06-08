import React from "react";
import styled from "styled-components/native";
import { Linking } from "react-native";
import { WebView } from "react-native-webview";

const REDIRECT_URI = "exp://192.168.176.254:19000/--/index.exp";
const authKakao = `http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;

interface OAuthLoginButtonProps {
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
  isClicked: number;
}

const OAuthLoginButton: React.FC<OAuthLoginButtonProps> = ({ setIsClicked, isClicked }) => {
  const onPressHandler = () => {
    console.log('백엔드 링크로 고고싱');
    setIsClicked(isClicked + 1);
    Linking.openURL(authKakao);
  };
  
  return (
    <ImageButton onPress={() => onPressHandler()}>
      <WebView
        source={{ uri: authKakao }}
        onMessage={(event) => {
          // WebView에서의 메시지 처리
          const message = event.nativeEvent.data;
          console.log('Message from WebView:', message);
        }}
      />
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