import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";

const ClassRoomScreen: React.FC = () => {
  return (
    <>
      <Layout>
        <Header text="강의실"/>
        <Margin props={30}/>
      </Layout>
    </>
  );
};

export default ClassRoomScreen;