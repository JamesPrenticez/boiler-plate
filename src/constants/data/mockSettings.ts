import { AiOutlineNotification } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { BsTrophy } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
import { type ISettings } from "../../modals/settings/ISettings";

export const mockSettings: ISettings[] = [
  {
    Icon: AiOutlineNotification,
    name: "Notifications",
    items: [
      {
        label: "Remind me before billing close off date",
        checked: true,
        options: [
          { label: "3 days", checked: true, value: 72 },
          { label: "2 days", checked: true, value: 48 },
          { label: "1 day", checked: true, value: 24 },
          { label: "12 hours", checked: true, value: 12 },
        ],
      },
      {
        label: "Email me a summary of cutomer biling data once submitted to Netsuite",
        checked: true,
      },
      {
        label: "Email my boss a summary of customer biling data once submitted to Netsuite",
        checked: true,
      },
    ],
  },
  {
    Icon: BiDonateHeart,
    name: "Quality of Life",
    items: [
      {
        label: "Automatically highlight text when focusing an input field",
        checked: true,
      },
      {
        label: "Default to chuck display mode (otherwise list mode)",
        checked: true,
      },
    ],
  },
  {
    Icon: FiHelpCircle,
    name: "Prompts",
    items: [
      {
        label: "Show me if a transaction line can be automated",
        checked: true,
      },
      { label: "Warn me if a quantity changes more that 10%", checked: true },
      { label: "Warn me if a rate changes more than 10%", checked: true },
      {
        label: "Show the country currency values pertain to eg. NZD/AUD",
        checked: true,
      },
      { label: "Remember where I left off", checked: true },
    ],
  },
  {
    Icon: BsTrophy,
    name: "Highscores",
    items: [
      { label: "Email me monthly leaderboard updates", checked: true },
      {
        label: "Email me when I get over taken on the leader board",
        checked: true,
      },
    ],
  },
];
