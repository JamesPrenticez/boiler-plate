import React, { useContext, createContext, type ReactNode, type ReactElement } from "react";

import type { IUser, IFeature, IUserPermission } from "../modals";

import { useUser, useUserPermissions } from "../hooks";

interface IUserContext {
  user: IUser | undefined;
  userPermissions: IUserPermission[] | undefined;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): ReactElement => {
  const { data: user, isLoading: isLoadingUser } = useUser();
  const { data: userPermissions, isLoading: isLoadingUserPermissions } = useUserPermissions();

  if (isLoadingUser || isLoadingUserPermissions) {
    return <p>Loading...</p>;
  }

  return <UserContext.Provider value={{ user, userPermissions }}>{children}</UserContext.Provider>;
};

export const useUserDetails = (): IUser | undefined => {
  const context = useContext(UserContext);

  // Handle context error
  if (context === undefined) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { user } = context;

  return user;
};

export const useUserHasAccessToFeature = (routeFeatureId: IFeature["id"]): boolean => {
  const context = useContext(UserContext);

  // Handle context error
  if (context === null || context === undefined) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { userPermissions } = context;

  // Search through the userpermissions array and check each feature id again the "routeFeatureId" then CHECK if it is enabled
  const userHasAccessToFeatureID =
    userPermissions?.find((permission) => permission.featureId === routeFeatureId)?.enabled ===
    true;

  return userHasAccessToFeatureID;
};
