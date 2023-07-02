import React from "react";
import type { ISideNavigationGroup } from "../../modals";

// General
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

// Budgets & Forecasts
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";

// Admin
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";

export const navigationItems: ISideNavigationGroup[] = [
  {
    name: "General",
    items: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: <DescriptionOutlinedIcon />,
        featureId: 0,
        supported: false,
      },
    ],
  },
  {
    name: "Budget",
    items: [
      {
        name: "Service Budgets",
        url: "/budget/service-budgets",
        icon: <SavingsOutlinedIcon />,
        featureId: 1,
        supported: false,
      },
    ],
  },
  {
    name: "Forecasts",
    items: [
      {
        name: "Investment Approvals", // Approvals
        url: "/forecasts/investment-approvals",
        icon: <CheckBoxOutlinedIcon />,
        featureId: 2,
        supported: false,
      },
    ],
  },
  {
    name: "Admin",
    items: [
      {
        name: "User Permissions",
        url: "/admin/permissions",
        icon: <PeopleOutlinedIcon />,
        featureId: 999, // Administration
        supported: true,
      },
      {
        name: "Feature Management",
        url: "/admin/feature-management",
        icon: <HubOutlinedIcon />,
        featureId: 999,
        supported: true,
      },
      {
        name: "Audit Log",
        url: "/admin/audit-log",
        icon: <GradingOutlinedIcon />,
        featureId: 999, // Administration
        supported: true,
      },
    ],
  },
];
