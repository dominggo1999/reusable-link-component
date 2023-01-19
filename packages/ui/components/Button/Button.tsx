import React, { useRef, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { useButton, FocusRing } from "react-aria";
import type { PressEvent } from "@react-types/shared";
import ButtonLoadingIndicator from "./ButtonLoadingIndicator";
import type { IconType } from "react-icons/lib";

const buttonCva = cva(
  "flex items-center justify-center rounded font-medium outline-none select-none gap-x-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-400 enabled:hover:bg-blue-500",
        secondary: "bg-blue-200 enabled:hover:bg-blue-300",
        destructive: "bg-red-400 enabled:hover:bg-red-500",
        transparent:
          "bg-transparent enabled:hover:text-blue-500 dark:text-white",
      },
      size: {
        sm: "text-sm px-2 py-2",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-3",
        xl: "text-xl px-5 py-4",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      isDisabled: {
        true: "opacity-40 dark:opacity-20 cursor-not-allowed",
      },
      isRounded: {
        true: "rounded-full",
      },
      isAspectSquare: {
        true: "aspect-square",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      isDisabled: false,
      isRounded: false,
      isAspectSquare: false,
    },
  },
);

const ringCva = cva("outline-2 outline-offset-2", {
  variants: {
    variant: {
      primary: "outline-blue-400",
      secondary: "outline-blue-400",
      destructive: "outline-red-400",
      transparent: "outline-blue-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const iconCva = cva("outline-2 outline-offset-2", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IButton
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  children?: React.ReactNode;
  icon?: IconType;
  iconPosition?: "right" | "left";
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingPosition?: "right" | "left";
  ref?: React.ForwardedRef<HTMLButtonElement>;
  onPress?: (e: PressEvent) => void;
}

const Button = forwardRef<HTMLButtonElement, IButton>((props, forwardedRef) => {
  const {
    children,
    variant,
    size,
    fullWidth,
    isDisabled,
    className = "",
    isLoading,
    loadingPosition = "left",
    icon,
    iconPosition = "left",
    isRounded,
    isAspectSquare,
  } = props;

  const _ref = useRef<HTMLButtonElement>(null);
  const ref = forwardedRef || _ref;

  const { buttonProps } = useButton(
    props as any,
    ref as React.RefObject<HTMLButtonElement>,
  );

  const iconClassName = iconCva({ size });

  const renderLoadingIndicator = () => {
    let loadingIndicatorSize;

    switch (size) {
      case "sm":
        loadingIndicatorSize = 20;
        break;
      case "md":
        loadingIndicatorSize = 24;
        break;
      case "lg":
        loadingIndicatorSize = 28;
        break;
      case "xl":
        loadingIndicatorSize = 32;
        break;
      default:
        break;
    }

    return (
      <ButtonLoadingIndicator
        width={loadingIndicatorSize}
        height={loadingIndicatorSize}
        isIndeterminate
      />
    );
  };

  return (
    <FocusRing focusRingClass={ringCva({ variant })}>
      <button
        disabled={isDisabled}
        className={`${className} ${buttonCva({
          variant,
          size,
          fullWidth,
          isDisabled,
          isRounded,
          isAspectSquare: isRounded || isAspectSquare,
        })}`}
        {...buttonProps}
      >
        {icon &&
          iconPosition === "left" &&
          !isLoading &&
          icon({ className: iconClassName })}

        {isLoading && loadingPosition === "left" && renderLoadingIndicator()}

        {children && children}

        {icon &&
          iconPosition === "right" &&
          !isLoading &&
          icon({ className: iconClassName })}

        {isLoading && loadingPosition === "right" && renderLoadingIndicator()}
      </button>
    </FocusRing>
  );
});

export default Button;
