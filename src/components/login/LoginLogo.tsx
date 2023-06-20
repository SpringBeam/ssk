import React from "react";
import styled from "styled-components/native";

const LoginLogo = () => {
  return (
    <ImageWrapper>
      <LogoImage
        source={require("../../assets/brands/login.png")}
      />
    </ImageWrapper>
  );
};

export default LoginLogo;

// styled
const ImageWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 327px;
  height: 153px;
  object-fit: scale-down;
`;