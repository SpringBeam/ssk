import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";

const ClassListScreen: React.FC = () => {
  return (
    <>
      <Layout>
        <Header text="수업 목록"/>
        <Margin props={30}/>
      </Layout>
    </>
  );
};

export default ClassListScreen;