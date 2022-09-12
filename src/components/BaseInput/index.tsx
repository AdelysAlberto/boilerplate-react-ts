
import BaseIcon from "../BaseIcons";
import styles from "./styles/baseInput.module.scss";


type TBaseInput = {
  placeholder?: string
  type?: string
  value?: string | number
  onChange?: (e: string) => void,
  className?: string
  classContainer?: string
  min?: number | string
  max?: number | string
  maxLength?: number
  label?: string | null
  labelError?: boolean
  readOnly?: boolean
  disabled?: boolean
  info?: string
  error?: string | null
  name?: string,
  success?: boolean,
  icon?: string
  iconEvent?: any,
}

const BaseInput: React.FC<TBaseInput> = ({
  placeholder,
  type = "text",
  value,
  onChange,
  classContainer = "",
  className = "",
  min = "",
  max = "",
  maxLength,
  label = null,
  labelError = false,
  readOnly = false,
  disabled = false,
  info,
  error,
  name,
  success = false,
  icon,
  iconEvent
}) => {

  return (
    <div className={`${styles.input} ${classContainer}`}>
      {label &&
        (<span className={`${styles.input__title} ${labelError && styles.label_error}`}> {label} </span>)
      }
      <div className={styles.input__base}>
        <input
          type={type}
          inputMode={type === "number" ? "numeric" : "text"}
          readOnly={readOnly}
          placeholder={placeholder}
          defaultValue={value}
          disabled={disabled}
          name={name}
          min={min}
          max={max}
          maxLength={maxLength}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          className={`${className} `}

        />
        {icon && (
          <div className={styles.input__icon}>
            <BaseIcon icon={icon} width={30} onClick={iconEvent} />
          </div>
        )}


      </div>

      {info && !error && (
        <div className={styles.info}>{info}</div>
      )}

      {error && (
        <div className={styles.input__text_error}>{error}</div>
      )}

    </div>
  );
};

export default BaseInput;
