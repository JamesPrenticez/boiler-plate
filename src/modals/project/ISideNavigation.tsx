import { type ReactNode } from "react";

export interface ISideNavigationGroup {
  name: string;
  items?: ISideNavigationItem[];
}

export interface ISideNavigationItem {
  name: string;
  icon: ReactNode;
  url: string;
  featureId: number;
  supported: boolean;
}
