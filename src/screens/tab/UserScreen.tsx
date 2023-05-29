import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";

const UserScreen: React.FC = () => {
  return (
    <>
      <Layout>
        <Header text="마이 페이지"/>
        <Margin props={30}/>
      </Layout>
    </>
  );
};

export default UserScreen;