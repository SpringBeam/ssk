import React, {useState} from "react";
import { View } from "react-native";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import RolePage from "../../pages/signUp/RolePage";
import ProgressButton from "../../components/signUp/ProgressButton";

const SignUpScreen = () => {
  const [page, setPage] = useState("RolePage");

  let pageComponent;
  switch(page) {
    case "RolePage":
      pageComponent = (
        <RolePage />
      )
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Header text="회원가입" type="withBack"/>
      <View>
        {pageComponent}
      </View>
      <View>
        <ProgressButton page={page} />
      </View>
    </Layout>
  );
};

export default SignUpScreen;
