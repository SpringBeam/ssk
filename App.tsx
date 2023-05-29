import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RootNavigator from "./src/navigations/RootNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {

  // 로컬 폰트 불러오기: font-family로 사용 가능
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Light: require("./src/global/fonts/NanumSquareL.ttf"),
        Regular: require("./src/global/fonts/NanumSquareR.ttf"),
        Medium: require("./src/global/fonts/NanumSquare.ttf"),
        Bold: require("./src/global/fonts/NanumSquareB.ttf"),
        ExtraBold: require("./src/global/fonts/NanumSquareEB.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  // 스플래시 스크린 2초 뒤 숨기기
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}