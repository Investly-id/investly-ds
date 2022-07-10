export const TypeColorVariant = [
  "purple",
  "blue",
  "green",
  "yellow",
  "red",
  "neutral",
] as const;

export type ColorVariant = typeof TypeColorVariant[number];

export const TypeColorWeight = [100, 200, 300, 400, 500, 600, 700] as const;

export type ColorWeight = typeof TypeColorWeight[number];

export const TypeColor = [
  "purple-700",
  "purple-600",
  "purple-500",
  "purple-400",
  "purple-300",
  "purple-200",
  "purple-100",
  "blue-700",
  "blue-600",
  "blue-500",
  "blue-400",
  "blue-300",
  "blue-200",
  "blue-100",
  "green-700",
  "green-600",
  "green-500",
  "green-400",
  "green-300",
  "green-200",
  "green-100",
  "yellow-700",
  "yellow-600",
  "yellow-500",
  "yellow-400",
  "yellow-300",
  "yellow-200",
  "yellow-100",
  "red-700",
  "red-600",
  "red-500",
  "red-400",
  "red-300",
  "red-200",
  "red-100",
  "neutral-700",
  "neutral-600",
  "neutral-500",
  "neutral-400",
  "neutral-300",
  "neutral-200",
  "neutral-100",
] as const;

export type Colors = typeof TypeColor[number];

export const TypeButtonSize = ["sm", "md", "lg"] as const;

export type ButtonSize = typeof TypeButtonSize[number];

export type ValueLabelOption = { value: string | number; label: string };

export type ValueLabelOptions = Array<ValueLabelOption>;

export type InputFieldSize = "sm" | "md";

export const TypeTypographySize = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs",
  "xxs",
] as const;
export type TypographySize = typeof TypeTypographySize[number];

export const TypeAvatarSize = ["xxl", "xl", "lg", "md", "sm", "xs"] as const;
export type AvatarSize = typeof TypeAvatarSize[number];

export const TypeControlSize = ["sm", "md"] as const;

export type ControlSize = "sm" | "md";
