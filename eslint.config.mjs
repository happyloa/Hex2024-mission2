import next from "eslint-config-next";

const config = [
  ...next,
  {
    name: "project-overrides",
    rules: {
      "react/jsx-key": "warn",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;
