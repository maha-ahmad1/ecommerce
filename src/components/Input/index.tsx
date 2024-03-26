import { useMemo, forwardRef } from "react";
import usePasswordInput from "./usePasswordInput";
import type { InputProps } from "components/types";
import { MATERIAL_INPUT_CLASSES } from "data";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      helperText,
      className,
      inputClassName,
      startIcon,
      endIcon,
      inputSize = "medium",
      type = "text",
      error = false,
      withoutHelperText = false,
      labelClassName,
      focusableLabel = false,
      isFloatingLabel = false,
      handleEndIcon = () => {},
      endIconClassName,
      ...rest
    },
    ref
  ) => {
    const { passwordInputType, passwordInputIcon } =
      usePasswordInput(inputSize);
    const classNames = useMemo(() => {
      const classes = {
        inputContainer: `flex-1 mb-3 relative text-gray-dark ${
          className ?? ""
        }`,
        label: `block mb-1 ${labelClassName ?? ""} ${
          isFloatingLabel ? MATERIAL_INPUT_CLASSES.label : ""
        }`,
        icon: "absolute text-gray-400 select-none top-1/2 -translate-y-2/4",
        startIcon: "left-4",
        endIcon: `right-4 ${endIconClassName ?? ""}`,
        input: `block w-full border-gray focus:ring-0 focus:border-blue rounded-md  ${
          inputClassName || ""
        } ${isFloatingLabel ? MATERIAL_INPUT_CLASSES.input : ""}`,

        helperText: "inline-flex min-h-[20px] text-xs mt-1",
      };

      if (inputSize === "large") {
        classes.input += " py-4 px-5";
        classes.inputContainer += " text-lg";
      } else if (inputSize === "small") {
        classes.input += " py-2 px-3 text-sm";
        classes.inputContainer += " text-sm";
      } else {
        classes.input += " py-3 px-4";
        classes.inputContainer += " text-base";
      }

      if (error) {
        classes.input += " !border-red focus:border-red ";
      }

      return classes;
    }, [
      className,
      inputClassName,
      inputSize,
      error,
      labelClassName,
      isFloatingLabel,
    ]);

    const inputType = type === "password" ? passwordInputType : type;
    const inputEndIcon = type === "password" ? passwordInputIcon : endIcon;
    return (
      <div className={classNames.inputContainer}>
        {isFloatingLabel
          ? null
          : label && (
              <label htmlFor={id} className={classNames.label}>
                {label}
              </label>
            )}
        <div className="relative flex-1">
          {startIcon && (
            <span className={`${classNames.icon} ${classNames.startIcon}`}>
              {startIcon}
            </span>
          )}
          {isFloatingLabel ? (
            <>
              <div className="relative">
                <input
                  id={id}
                  type={inputType}
                  ref={ref}
                  {...rest}
                  className={classNames.input}
                  placeholder=" "
                />
                <label htmlFor={id} className={classNames?.label}>
                  {label}
                </label>
              </div>
            </>
          ) : (
            <input
              id={id}
              type={inputType}
              className={classNames.input}
              ref={ref}
              {...rest}
            />
          )}
          {inputEndIcon && (
            <span
              className={`${classNames.icon} ${classNames.endIcon} `}
              onClick={() => handleEndIcon()}
            >
              {inputEndIcon}
            </span>
          )}
        </div>
        {!withoutHelperText && error && (
          <p className={classNames.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
