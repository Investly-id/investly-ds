import React from "react";

import { RNView } from "../../Primitives";
import Button from "../Button";
import Typography from "../Typography";

const ExampleTypography: React.FC = () => {
  return (
    <RNView style="p-5">
      <RNView style="pb-5">
        <Typography containerStyle="pb-2" type="heading">
          Button Primary
        </Typography>
        <RNView style="">
          <Button style="mb-1" size="sm">
            Button Small
          </Button>
          <Button style="mb-1">Button Medium</Button>
          <Button style="mb-1" size="lg">
            Button Large
          </Button>
        </RNView>
        <RNView style="flex-row mb-1">
          <Button style="mr-1 fill" size="sm">
            Button Small
          </Button>
          <Button style="ml-1 fill" loading size="sm">
            Button Small Loading
          </Button>
        </RNView>
        <Button style="mb-1" variant="green">
          Button Variant
        </Button>
        <Button style="mb-1" variant="green" disabled>
          Button Disabled
        </Button>
        <Button
          style="mb-1"
          leftIcon="ambulance"
          rightIcon="arrow-right"
          variant="blue"
        >
          Button w/ Icon
        </Button>
      </RNView>
      <RNView style="pb-5">
        <Typography containerStyle="pb-2" type="heading">
          Button Outline
        </Typography>
        <RNView style="">
          <Button style="mb-1" mode="outline">
            Button
          </Button>
        </RNView>
        <RNView style="flex-row mb-1">
          <Button style="mr-1 fill" size="sm" mode="outline">
            Button Small
          </Button>
          <Button style="ml-1 fill" loading size="sm" mode="outline">
            Button Small Loading
          </Button>
        </RNView>
        <Button
          style="mb-1"
          variant="red"
          mode="outline"
          leftIcon="arrow-left"
          rightIcon="arrow-right"
        >
          Button Variant w/ Icon
        </Button>
        <Button style="mb-1" variant="green" disabled mode="outline">
          Button Disabled
        </Button>
      </RNView>
      <RNView style="pb-5">
        <Typography containerStyle="pb-2" type="heading">
          Button Tertiary
        </Typography>
        <RNView style="">
          <Button style="mb-1" mode="tertiary">
            Button
          </Button>
        </RNView>
        <RNView style="flex-row mb-1">
          <Button style="mr-1 fill" size="sm" mode="tertiary">
            Button Small
          </Button>
          <Button style="ml-1 fill" loading size="sm" mode="tertiary">
            Button Small Loading
          </Button>
        </RNView>
        <Button
          style="mb-1"
          variant="red"
          mode="tertiary"
          leftIcon="arrow-left"
          rightIcon="arrow-right"
        >
          Button Variant w/ Icon
        </Button>
        <Button style="mb-1" variant="green" disabled mode="tertiary">
          Button Disabled
        </Button>
      </RNView>
    </RNView>
  );
};

ExampleTypography.defaultProps = {};

export default React.memo(ExampleTypography);
