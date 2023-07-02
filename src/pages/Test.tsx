import React, { type ReactElement } from "react";
import Layout from "../components/layout/Layout";
import Body from "../components/common/Body";

const Test = (): ReactElement => {
  return (
    <Layout>
      <Body>
        <h1>Test</h1>
      </Body>
    </Layout>
  );
};

export default Test;
