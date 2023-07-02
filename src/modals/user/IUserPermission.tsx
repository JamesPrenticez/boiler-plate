import type { IUser, IFeature } from "..";

export interface IUserPermission {
  userId: IUser["id"];
  featureId: IFeature["id"];
  enabled: boolean;
}
