import React, { useCallback, useMemo } from "react";
import { ActivityIndicator, StyleProp, ViewStyle } from "react-native";
import Ripple from "./Libraries/ButtonRipple";

import { RNView } from "../Primitives";
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
  icon: IconName;
}

const ButtonIcon: React.FC<Props> = ({
  mode,
  size,
  onPress,
  style,
  loading,
  disabled,
  icon,
  variant,
}) => {
  const iconSize = useMemo(() => {
    const sizeMap: { [key: string]: number } = {
      sm: 16,
      md: 20,
      lg: 24,
    };
    return sizeMap[size ?? "md"];
  }, [size]);

  const color = useMemo(() => {
    let tmpColor = "white";
    if (mode !== "primary") {
      tmpColor = colors[variant ?? "purple"][600];

      if (mode === "outline" && disabled) {
        tmpColor = colors.neutral[400];
      } else if (mode === "tertiary" && disabled) {
        tmpColor = "white";
      }
    }

    return tmpColor;
  }, [mode, variant, disabled]);

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
      sm: "p-2",
      md: "p-[10px]",
      lg: "p-3",
    };

    return [
      getTwStyle(styleMode[mode ?? "primary"]),
      getTwStyle(styleSize[size ?? "md"]),
      getTwStyle("rounded-full justify-center"),
      getTwStyle(style),
    ];
  }, [mode, size, style, variant, disabled]);

  const renderIcon = useCallback(() => {
    return (
      <RNView style={""}>
        <Icon name={icon} size={iconSize} fill={color} />
      </RNView>
    );
  }, [color, iconSize, icon]);

  const loadingSize = useMemo(() => {
    const sizes: { [key: string]: number } = {
      sm: 16,
      md: 18,
      lg: 20,
    };
    return sizes[size ?? "md"];
  }, [size]);

  const content = useMemo(() => {
    return (
      <RNView style={"flex-row justify-center items-center"}>
        {loading && <ActivityIndicator size={loadingSize} color={color} />}
        {!loading && renderIcon()}
      </RNView>
    );
  }, [loading, renderIcon, color, loadingSize]);

  return (
    <RNView style="flex-row rounded-full">
      <Ripple
        rippleContainerBorderRadius={99}
        style={rippleStyle}
        onPress={onPress}
        disabled={disabled || loading}
        rippleColor={colors[variant ?? "purple"][400]}
      >
        {content}
      </Ripple>
    </RNView>
  );
};

ButtonIcon.defaultProps = {
  onPress: () => null,
  style: {},
  loading: false,
  disabled: false,
  variant: "purple",
  size: "md",
  mode: "primary",
};

export default React.memo(ButtonIcon);
