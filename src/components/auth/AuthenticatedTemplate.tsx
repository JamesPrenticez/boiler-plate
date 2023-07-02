import React, { type ReactElement, type ReactNode } from "react";

interface AuthenticatedTemplateProps {
  children: ReactNode;
}

const AuthenticatedTemplate = ({ children }: AuthenticatedTemplateProps): ReactElement => {
  return <div>{children}</div>;
};

export default AuthenticatedTemplate;
