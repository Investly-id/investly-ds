import React, { useCallback, useMemo } from "react";
import { ActivityIndicator, StyleProp, ViewStyle } from "react-native";
import Ripple from "./Libraries/ButtonRipple";

import { RNText, RNView } from "../Primitives";
import { colors } from "../Styles";
import { ButtonSize, ColorVariant } from "../Types/Component";
import { getTwStyle } from "../Utils";
import Icon, { IconName } from "./Icon";

interface IconProps {
  fill?: string;
  size?: number;
}

interface Props {
  mode?: "primary" | "outline" | "tertiary";
  variant?: ColorVariant;
  size?: ButtonSize;
  onPress?: (value?: any) => void;
  style?: StyleProp<ViewStyle> | string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode | string;
  leftIcon?: IconName | ((props: IconProps) => React.ReactNode);
  rightIcon?: IconName | ((props: IconProps) => React.ReactNode);
  withContainer?: boolean;
  containerStyle?: StyleProp<ViewStyle> | string;
  pressable?: boolean;
}

/**
 * Primary UIX component for user interaction
 */
const Button: React.FC<Props> = ({
  mode,
  size,
  onPress,
  style,
  loading,
  disabled,
  children,
  leftIcon,
  rightIcon,
  variant,
  withContainer,
  containerStyle,
  pressable,
}) => {
  const iconSize = useMemo(() => {
    const sizeMap: { [key: string]: number } = {
      sm: 12,
      md: 16,
      lg: 20,
    };
    return sizeMap[size ?? "md"];
  }, [size]);

  const typographyProps = useMemo(() => {
    let color = "white";
    if (mode !== "primary") {
      color = colors[variant ?? "purple"][600];

      if (mode === "outline" && disabled) {
        color = colors.neutral[400];
      } else if (mode === "tertiary" && disabled) {
        color = "white";
      }
    }

    const prop: Record<ButtonSize, string> = {
      sm: "text-3 leading-[20px]",
      md: "text-[14px] leading-[22px]",
      lg: "text-4 leading-[24px]",
    };

    return {
      color,
      ...getTwStyle(prop[size! || "md"]),
      ...getTwStyle("font-inter-bold"),
    };
  }, [mode, variant, size, disabled]);

  const rippleStyle = useMemo(() => {
    const styleMode: { [key: string]: string } = {
      primary:
        `border bg-${variant}-600 border-${variant}-600` +
        (disabled ? " bg-neutral-400 border-neutral-400" : ""),
      outline:
        `border border-${variant}-600` +
        (disabled ? " border-neutral-400" : ""),
      tertiary:
        `border bg-${variant}-100 border-${variant}-100` +
        (disabled ? " bg-neutral-400 border-neutral-400" : ""),
    };

    const styleSize: { [key: string]: string } = {
      sm: "py-[6px]",
      md: "py-[9px]",
      lg: "py-3",
    };

    return [
      getTwStyle(styleMode[mode ?? "primary"]),
      getTwStyle(styleSize[size ?? "md"]),
      getTwStyle("rounded-full justify-center px-4"),
      getTwStyle(style),
    ];
  }, [mode, size, style, variant, disabled]);

  const renderIcon = useCallback(
    (position: "left" | "right") => {
      const iconPropsMap = {
        left: leftIcon,
        right: rightIcon,
      };
      const iconStyleMap = {
        left: "pr-2",
        right: "pl-2",
      };

      const iconProps = iconPropsMap[position];
      const wrapperStyle = iconStyleMap[position];

      return (
        <RNView style={wrapperStyle}>
          {typeof iconProps === "string" ? (
            <Icon
              name={iconProps}
              size={iconSize}
              fill={typographyProps.color}
            />
          ) : (
            iconProps?.({
              fill: typographyProps.color,
              size: iconSize,
            })
          )}
        </RNView>
      );
    },
    [typographyProps.color, iconSize, leftIcon, rightIcon]
  );

  const loadingSize = useMemo(() => {
    const sizes: { [key: string]: number } = {
      sm: 20,
      md: 22,
      lg: 24,
    };
    return sizes[size ?? "md"];
  }, [size]);

  const content = useMemo(() => {
    if (typeof children === "string") {
      return (
        <RNView style={"flex-row justify-center items-center"}>
          {loading && (
            <ActivityIndicator
              size={loadingSize}
              color={typographyProps.color}
            />
          )}
          {leftIcon && !loading && renderIcon("left")}
          {!loading && (
            <RNText style={typographyProps} numberOfLines={1}>
              {children}
            </RNText>
          )}
          {rightIcon && !loading && renderIcon("right")}
        </RNView>
      );
    }

    return children;
  }, [
    children,
    loading,
    leftIcon,
    rightIcon,
    renderIcon,
    typographyProps,
    loadingSize,
  ]);

  const RippleButton = (
    <Ripple
      rippleContainerBorderRadius={99}
      style={rippleStyle}
      onPress={onPress}
      disabled={disabled || loading || !pressable}
      rippleColor={colors[variant ?? "purple"][400]}
    >
      {content}
    </Ripple>
  );
  if (withContainer || containerStyle) {
    return <RNView style={containerStyle}>{RippleButton}</RNView>;
  }

  return RippleButton;
};

Button.defaultProps = {
  onPress: () => null,
  style: {},
  loading: false,
  disabled: false,
  children: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  variant: "purple",
  size: "md",
  mode: "primary",
  withContainer: false,
  containerStyle: "",
  pressable: true,
};

/**
 * Primary UI component for user interaction
 */
export default React.memo(Button);
