import React, { type ReactElement, type ReactNode } from "react";

interface UnauthenticatedTemplateProps {
  children: ReactNode;
}

const UnauthenticatedTemplate = ({ children }: UnauthenticatedTemplateProps): ReactElement => {
  return <div>{children}</div>;
};

export default UnauthenticatedTemplate;
