import React, {
  useState,
  useContext,
  createContext,
  type ReactNode,
  type ReactElement,
} from "react";

import { type ISettings } from "../modals/settings/ISettings";
import { mockSettings } from "../constants/data/mockSettings";

interface SettingsProviderProps {
  children: ReactNode;
}

export interface SettingsContext {
  settingsState: ISettings[];
  setSettingsState: (settingsState: ISettings[]) => void;
}

const SettingsStateContext = createContext<SettingsContext>({
  settingsState: [],
  setSettingsState: () => {},
});

const SettingsProvider = ({ children }: SettingsProviderProps): ReactElement => {
  const [settingsState, setSettingsState] = useState<ISettings[]>(mockSettings);

  const value = { settingsState, setSettingsState };
  return <SettingsStateContext.Provider value={value}>{children}</SettingsStateContext.Provider>;
};

const useSettings = (): SettingsContext => {
  const context = useContext(SettingsStateContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export { useSettings, SettingsProvider, SettingsStateContext };
