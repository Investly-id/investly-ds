import React from "react";

import { RNView } from "../../Primitives";
import Button from "../Button";
import Toast from "../Toast";
import Typography from "../Typography";
import DesignUtils from "../Utils/index";

const ExampleLabel: React.FC = () => {
  return (
    <RNView style="p-5">
      <RNView style="pb-5">
        <Typography containerStyle="pb-2" type="heading"></Typography>

        <Button
          containerStyle="mb-5"
          onPress={() => {
            DesignUtils.showToast({ text: "asdsadsad" });
          }}
        >
          Default Toast
        </Button>
        <Button
          containerStyle="mb-5"
          onPress={() => {
            DesignUtils.showToast({ type: "positive", text: "asdsadsad" });
          }}
        >
          Positive Toast
        </Button>
        <Button
          containerStyle="mb-5"
          onPress={() => {
            DesignUtils.showToast({
              type: "negative",
              leftIcon: "times",
              closeable: true,
              text: "asdsadsad",
            });
          }}
        >
          Negative Toast
        </Button>
      </RNView>
    </RNView>
  );
};

ExampleLabel.defaultProps = {};

export default React.memo(ExampleLabel);
