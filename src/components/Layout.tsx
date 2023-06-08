import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: #0c9bfb;
`;

const Inner = styled.View`
  width: 100%;
  flex: 1;
  background-color: #f8f9fa;
`;
export default Layout;