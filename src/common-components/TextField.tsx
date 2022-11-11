import { FC } from "react";

type props = {
  errorTextField: string | undefined;
  touchedTextField: boolean | undefined;
  valueTextField: string;
  nameTextField: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  showError: boolean;
  displayNameTextField: string;
};

export const TextField: FC<props> = ({
  errorTextField,
  touchedTextField,
  valueTextField,
  handleBlur,
  handleChange,
  displayNameTextField,
  nameTextField,
  showError,
}): JSX.Element => {
  return (
    <>
      <input
        className={`peer input-form ${
          showError && errorTextField && touchedTextField
            ? "border border-rose-400 focus:border-2  focus:border-rose-400"
            : ""
        }`}
        autoComplete="off"
        required
        placeholder={displayNameTextField}
        type="text"
        name={nameTextField}
        value={valueTextField}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label
        className={`input-label-form
            ${
              showError && errorTextField && touchedTextField
                ? "text-rose-400 peer-focus:text-rose-400"
                : "text-gray-400 peer-focus:text-gray-400"
            }`}
        htmlFor={nameTextField}
      >
        {displayNameTextField}
      </label>
      {showError && errorTextField && touchedTextField && (
        <p className="p-input-error-form">{errorTextField}</p>
      )}
    </>
  );
};
