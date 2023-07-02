import React, { type ReactElement } from "react";
import Loading1 from "./Loading1";

const Fallback = (): ReactElement => {
  return <Loading1 fullScreen={true} transparent={true} />;
};

export default Fallback;
