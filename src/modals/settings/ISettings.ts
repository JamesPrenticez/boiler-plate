export interface ISettings {
  Icon: React.ElementType;
  name: string;
  items: Array<{
    label: string;
    checked: boolean;
    options?: Array<{
      label: string;
      value: number;
      checked: boolean;
    }>;
  }>;
}
