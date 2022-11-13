import { FC, useState } from "react";
import { DivRevealTogglePassword } from "./DivRevealTogglePassword";
import { Input } from "./Input";
import { LabelInputForm } from "./LabelInputForm";
import { ShowErrorMessageInput } from "./ShowErrorMessageInput";

type props = {
  errorTextField: string | undefined;
  touchedTextField: boolean | undefined;
  valueTextField: string;
  nameTextField: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  showError: boolean;
  displayNameTextField: string;
  typeField: "text" | "password";
};

export const TextField: FC<props> = ({
  displayNameTextField,
  errorTextField,
  handleBlur,
  handleChange,
  nameTextField,
  showError,
  touchedTextField,
  typeField,
  valueTextField,
}): JSX.Element => {
  const isErrorOnTextField = errorTextField && touchedTextField;

  const [revealPassword, setRevealPassword] = useState<"text" | "password">(
    "password"
  );

  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === "password" ? "text" : "password");
  };

  return (
    <div className="pb-7 h-20 relative">
      <Input
        displayNameTextField={displayNameTextField}
        handleBlur={handleBlur}
        handleChange={handleChange}
        isErrorOnTextField={isErrorOnTextField}
        nameTextField={nameTextField}
        revealPassword={revealPassword}
        showError={showError}
        typeField={typeField}
        valueTextField={valueTextField}
      />

      {typeField === "password" && (
        <DivRevealTogglePassword
          revealPassword={revealPassword}
          toggleRevealPassword={toggleRevealPassword}
          valuePasswordField={valueTextField}
        />
      )}

      <LabelInputForm
        displayNameTextField={displayNameTextField}
        isErrorOnTextField={isErrorOnTextField}
        nameTextField={nameTextField}
        showError={showError}
      />

      {showError && (
        <ShowErrorMessageInput
          errorTextField={errorTextField}
          isErrorOnTextField={isErrorOnTextField}
        />
      )}
    </div>
  );
};
