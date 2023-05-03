import React from "react";
import { TypeButton } from "types";

export const Button = ({
  children,
  className,
  type = "button",
  loading = false,
  ...rest
}:TypeButton) => {
    return (
        <button
          className={className}
          type={type}
          {...rest}
        >
          {loading ? "Loading.." : children}
        </button>
      );
};
export default Button;
