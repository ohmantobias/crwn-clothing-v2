import { FC, ButtonHTMLAttributes } from "react";

import "./button.styles.scss";

export interface isStringIndex {
  [key: string]: string;
}

const BUTTON_TYPE_CLASSES: isStringIndex = {
  google: "button-container google-sign-in",
  inverted: "button-container inverted",
  base: "button-container",
};

export type ButtonProps = {
  buttonType?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ""
      }`}
      {...otherProps}
      disabled={isLoading}
    >
      {isLoading ? <div className="spinner-container-button"></div> : children}
    </button>
  );
};

export default Button;
