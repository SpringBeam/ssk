import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import styled from "styled-components/native";
import queryString from "query-string";
import * as WebBrowser from "expo-web-browser";

import { setAccessToken, getAccessToken, setAuthentication } from "../../utils/Auth";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import OAuthLoginButton from "../../components/login/OAuthLoginButton";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [isClicked, setIsClicked] = useState(0);

  useEffect(() => {
    const getParamsFromUrl = async () => {
      try {
        const url = await Linking.getInitialURL(); // 비동기로 호출하고 null일 경우 예외 처리
        if (url !== null) {
          const params = queryString.parseUrl(url).query;
          const accessToken = params.accessToken as string;
          const { refreshToken, loginMemberId, accessTokenExpirationTime } = params;
          console.log('로그인을 시도합니다.');
          setAccessToken(accessToken);
          // setAuthentication(true);
          console.log("accessToken: ", accessToken)
          console.log("refreshToken: ", refreshToken)
          console.log('로그인 결과값은 다음과 같습니다.', url, accessToken, refreshToken);
          if (accessToken) {
            console.log("로그인 값을 잘 가져왔다!");
          }
        }
      } catch (error) {
        console.log('getParamsFromURL error', error);
      }
    };
    getParamsFromUrl();
  }, [isClicked]);

  useEffect(() => {
      const fetchToken = async () => {
        const tk = await getAccessToken();
        console.log(tk);
        if (tk !== null) {
          setToken(tk);
        };
        console.log("토큰", token);
        WebBrowser.dismissBrowser();
      }
      fetchToken();
    }, []);

  return (
    <>
    <Layout>
      <Header text="로그인하기" />
      <Container>
        <OAuthLoginButton
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      </Container>
    </Layout>
    </>
  );
};

export default LoginScreen;

// styled
const Container = styled.View`
  flex: 1;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  marginHorizontal: 15px;
`;