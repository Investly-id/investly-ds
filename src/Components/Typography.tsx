import React, { useMemo } from "react";
import { ViewStyle, StyleProp, TextProps, TextStyle } from "react-native";
import { getTwColor, getTwStyle } from "../Utils";
import { RNText, RNView } from "../Primitives";
import { TypographySize } from "../Types/Component";

interface Props extends Omit<TextProps, "style"> {
  type?: "paragraph" | "special" | "heading";
  size?: TypographySize;
  color?: string;
  style?: StyleProp<TextStyle> | string;
  containerStyle?: StyleProp<ViewStyle> | string;
  children?: string | React.ReactNode;
  withContainer?: boolean;
}

export type TypographyProps = Props;

const Button: React.FC<Props> = ({
  size,
  style,
  children,
  containerStyle,
  withContainer,
  type,
  color,
  ...props
}) => {
  const textStyle = useMemo(() => {
    let sizeMap: Record<TypographySize, string> = {
      xxs: "text-[8px] leading-[16px]",
      xs: "text-[10px] leading-[18px]",
      sm: "text-[12px] leading-[20px]",
      md: "text-[14px] leading-[22px]",
      lg: "text-[16px] leading-[24px]",
      xl: "text-[18px] leading-[26px]",
      xxl: "text-[20px] leading-[28px]",
    };
    if (type === "heading") {
      sizeMap = {
        xxs: "text-[10px] leading-[18px]",
        xs: "text-[12px] leading-[20px]",
        sm: "text-[14px] leading-[22px]",
        md: "text-[16px] leading-[24px]",
        lg: "text-[20px] leading-[28px]",
        xl: "text-[24px] leading-[32px]",
        xxl: "text-[28px] leading-[36px]",
      };
    }

    const fontFamily = {
      heading: "font-inter-bold",
      paragraph: "font-inter-regular",
      special: "font-inter-italic",
    };

    return [
      getTwStyle(sizeMap[size ?? "md"]),
      getTwStyle(fontFamily[type ?? "paragraph"]),
      { color: getTwColor(color ?? "neutral-700") },
      getTwStyle(style),
    ];
  }, [size, style, type, color]);

  const viewStyle = useMemo(() => {
    return [getTwStyle("items-center flex-row"), getTwStyle(containerStyle)];
  }, [containerStyle]);

  const renderText = useMemo(
    () => (
      <RNText style={textStyle} {...props}>
        {children}
      </RNText>
    ),
    [textStyle, children, props]
  );

  if (!withContainer) {
    return renderText;
  }
  return <RNView style={viewStyle}>{renderText}</RNView>;
};

Button.defaultProps = {
  style: {},
  withContainer: true,
  size: "md",
  type: "paragraph",
  children: undefined,
  containerStyle: undefined,
  color: undefined,
};

export default React.memo(Button);
