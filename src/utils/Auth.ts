import AsyncStorage from "@react-native-async-storage/async-storage";

// 액세스 토큰 저장하기
export const setAccessToken = async (accessToken: string | null): Promise<void> => {
  try {
    if (accessToken !== null) {
      await AsyncStorage.setItem("access-token", accessToken);
    }
  } catch (e) {
    console.log(e);
  }
};

// 액세스 토큰 불러오기
export const getAccessToken = async (): Promise<string | null> => {
  try {
    const accessToken = await AsyncStorage.getItem("access-token");
    if (accessToken !== null) {
      return accessToken;
    } else {
      return null; // 액세스 토큰이 없을 경우 null 반환
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 인증 유무 저장하기
export const setAuthentication = (boolean: boolean): void => {
  AsyncStorage.setItem("isAuthenticated", boolean.toString());
};