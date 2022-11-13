import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

type props = {
  valuePasswordField: string;
  toggleRevealPassword: () => void;
  revealPassword: string;
};

export const DivRevealTogglePassword: FC<props> = ({
  valuePasswordField,
  toggleRevealPassword,
  revealPassword,
}): JSX.Element => {
  return (
    <div
      className={`rounded-full h-10 w-10 p-2.5 text-gray-500 absolute right-1.5 active:scale-95
          top-1.5 hover:bg-gray-100 active:bg-gray-200 transition-all duration-100 
          ${valuePasswordField.length === 0 ? "hidden" : ""}`}
      onClick={toggleRevealPassword}
    >
      {revealPassword === "password" ? <EyeIcon /> : <EyeSlashIcon />}
    </div>
  );
};
