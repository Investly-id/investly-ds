import React, { useMemo } from "react";
import { getTwStyle } from "../Utils";
import { ControlSize } from "../Types/Component";
import Ripple from "./Libraries/ButtonRipple";
import { ColorVariant } from "../Types/Component";
import { RNView } from "../Primitives";

interface Props {
  variant?: ColorVariant;
  size?: ControlSize;
  checked?: boolean;
  onPress?: () => void;
}

const ControlRadio: React.FC<Props> = ({ size, checked, onPress, variant }) => {
  const viewStyle = useMemo(() => {
    let sizeMap: Record<ControlSize, string> = {
      sm: "w-5 h-5",
      md: "w-6 h-6",
    };

    return [
      getTwStyle(sizeMap[size ?? "md"]),
      getTwStyle("rounded-full bg-neutral-300 justify-center items-center"),
      getTwStyle(checked ? `bg-${variant}-600 border-${variant}-600` : ""),
    ];
  }, [checked, size, variant]);

  const dotStyle = useMemo(() => {
    let sizeMap: Record<ControlSize, string> = {
      sm: "w-2 h-2",
      md: "w-3 h-3",
    };

    return [
      getTwStyle(sizeMap[size ?? "md"]),
      getTwStyle("bg-white rounded-full "),
    ];
  }, [size]);

  return (
    <Ripple
      rippleContainerBorderRadius={99}
      onPress={onPress}
      style={viewStyle}
    >
      <RNView style={dotStyle} />
    </Ripple>
  );
};

ControlRadio.defaultProps = {
  variant: "purple",
  size: "md",
  checked: false,
  onPress: undefined,
};

export default React.memo(ControlRadio);
