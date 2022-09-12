import { Link } from "react-router-dom";
import BaseIcon from "../BaseIcons";
import BaseLoading from "../BaseLoading";

import styles from "./baseButton.module.scss";

export type TIndexString = {
  [key: string]: string
}

type TButton = "button" | "submit" | "reset" | undefined;

type TBaseButton = {
  title?: string
  type?: string
  size?: string
  margin?: string
  onClick?: (e: any) => void,
  isLoading?: boolean
  disabled?: boolean
  icon?: string
  toLink?: string
  typeButton?: TButton
}

const BaseButton: React.FC<TBaseButton> = ({
  title = "",
  typeButton = "button",
  type = "primary",
  size = "full",
  margin = "m-2",
  isLoading = false,
  onClick = (e) => e,
  disabled = false,
  icon = null,
  toLink = null,
}) => {
  const getTypeButton = (typeX: string) => {
    const types: TIndexString = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      success: "btn-success",
      warning: "btn-warning",
      danger: "btn-danger",
      info: "btn-info",
      link: "btn-link",
      light: "btn-light",
      default: "btn-default",
    };
    return types[typeX];
  };

  const getSize = (sizeX = "full") => {
    const types: TIndexString = {
      xs: "w-25",
      medium: "w-50",
      large: "w-75",
      full: "w-100",
    };
    return types[sizeX];
  };

  return (
    <div
      aria-hidden
      className={`${styles.container} ${getSize(size)} ${margin}`}
      onClick={disabled || isLoading ? undefined : onClick}
    >
      {icon && (
        <div className={styles.icon}>
          <BaseIcon icon={icon} />
        </div>
      )}

      {toLink ? (
        <Link
          to={disabled ? "#" : toLink}
          onClick={onClick}
          title={title}
          className={`btn ${getSize(size)} ${getTypeButton(type)} ${styles.button} ${disabled && styles.disabled}`}
        >
          {title}
        </Link>
      )
        : (
          <button
            type={typeButton as TButton}
            className={`btn ${getSize(size)} ${getTypeButton(type)} ${styles.button} ${(disabled || isLoading) && styles.disabled}`}
            disabled={disabled || isLoading}
            title={title}
          >
            {isLoading ? <BaseLoading isLoading width={30} /> : !icon && title}
          </button>
        )}
    </div>
  );
};

export default BaseButton;
