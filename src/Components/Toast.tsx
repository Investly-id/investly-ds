import React from "react";
import { Dimensions } from "react-native";
import { ColorVariant } from "../Types/Component";
import Typography from "./Typography";

import ToastMessage from "react-native-toast-message";
import Icon, { IconName } from "./Icon";
import { RNTouchableOpacity, RNView } from "../Primitives";

interface Props {
  text: string;
  leftIcon?: IconName;
  closeable?: boolean;
  width?: number;
}

interface ToastViewProps extends Props {
  variant: ColorVariant;
  width?: number;
}

const ToastView: React.FC<ToastViewProps> = ({
  variant,
  leftIcon,
  closeable,
  text,
  width,
}) => {
  return (
    <RNView
      style={`shadow-lg shadow-${variant}-700 shadow-offset-1/3 w-[${
        width || Dimensions.get("screen").width * 0.93
      }px] py-3 px-4 rounded-2 bg-${variant}-600 flex-row items-center`}
    >
      {leftIcon && (
        <RNView style="mr-4">
          <Icon size={16} name={leftIcon} fill="white" />
        </RNView>
      )}
      <Typography containerStyle="fill" size="sm" style="text-neutral-100">
        {text}
      </Typography>
      {closeable && (
        <RNTouchableOpacity
          activeOpacity={0.5}
          onPress={() => ToastMessage.hide()}
          style="ml-4"
        >
          <Icon size={24} name={"times"} fill="white" />
        </RNTouchableOpacity>
      )}
    </RNView>
  );
};

const Toast: React.FC = ({ width }) => {
  return (
    <ToastMessage
      position="bottom"
      config={{
        default: ({ props }: { props: Props }) => {
          return <ToastView variant="purple" width={width} {...props} />;
        },
        positive: ({ props }: { props: Props }) => {
          return <ToastView variant="green" width={width} {...props} />;
        },
        negative: ({ props }: { props: Props }) => {
          return <ToastView variant="red" width={width} {...props} />;
        },
      }}
    />
  );
};

ToastView.defaultProps = {
  leftIcon: undefined,
  closeable: false,
  width: undefined,
};

export default React.memo(Toast);
