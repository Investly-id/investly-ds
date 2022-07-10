import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Dimensions } from "react-native";
import Ripple from "../Libraries/ButtonRipple";

import { RNFlatList, RNRipple, RNView } from "../../Primitives";
import { ValueLabelOption } from "../../Types/Component";
import Icon from "../Icon";
import InputFieldText from "../InputField/InputFieldText";
import Typography from "../Typography";
import { ModalHandle } from "./Modal.type";
import ModalBase from "./ModalBase";

interface Props {}

export interface ListRenderItemInfo<ItemT> {
  item: ItemT;
  onPress: () => void;
  index: number;
}

export type ListRenderItem<ItemT> = (
  info: ListRenderItemInfo<ItemT>
) => React.ReactElement | null;

export type ModalBottomOptionRenderItem =
  | ListRenderItem<any>
  | null
  | undefined;

export type ModalBottomOptionConfig = {
  title?: string;
  searchable?: boolean;
  options: Array<any>;
  optionsBase: Array<any>;
  onSelect: (data: ValueLabelOption) => void;
  renderItem?: ModalBottomOptionRenderItem;
};

export type ModalBottomOptionHandle = {
  show: (param: Omit<ModalBottomOptionConfig, "optionsBase">) => void;
  hide: () => void;
};

const baseConfig: ModalBottomOptionConfig = {
  title: "",
  searchable: false,
  options: [],
  optionsBase: [],
  onSelect: () => {},
};

const ModalBottomInfo = forwardRef<ModalBottomOptionHandle, Props>((_, ref) => {
  const [config, setConfig] = useState<ModalBottomOptionConfig>(baseConfig);
  const modalBottomRef = useRef<ModalHandle>(null);

  const hide = useCallback(() => {
    modalBottomRef?.current?.hide();
  }, []);

  const onOptionSelect = useCallback(
    (item: ValueLabelOption) => {
      config?.onSelect(item);
      hide();
    },
    [hide, config]
  );

  const renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      if (config.renderItem) {
        return config.renderItem({
          index,
          item,
          onPress: () => onOptionSelect(item),
        });
      }
      if (item.icon) {
        return (
          <RNRipple onPress={() => onOptionSelect(item)} style="flex-row py-4">
            <Icon name={item.icon} fill={item.color || "neutral-400"} />
            <Typography
              containerStyle="pl-3"
              type="heading"
              size="sm"
              color={item.color || "neutral-700"}
            >
              {item.label}
            </Typography>
          </RNRipple>
        );
      }
      return (
        <Ripple onPress={() => onOptionSelect(item)}>
          <RNView style={"py-3"}>
            <Typography
              color={item.color || "neutral-600"}
              type="heading"
              size="sm"
            >
              {item.label}
            </Typography>
          </RNView>
        </Ripple>
      );
    },
    [onOptionSelect, config]
  );

  const keyExtractor = useCallback(
    (item: ValueLabelOption, index: number) =>
      `SelectOption_${item.value}_${index}`,
    []
  );

  const onSearchOptions = useCallback(
    (searchText: string) => {
      const newOptions = config.optionsBase?.filter((item) =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setConfig((prev) => {
        return {
          ...prev,
          options: [...newOptions],
        };
      });
    },
    [config]
  );

  useImperativeHandle(ref, () => ({
    show: (configParam: Omit<ModalBottomOptionConfig, "optionsBase">) => {
      if (configParam) {
        setConfig({
          ...baseConfig,
          ...configParam,
          optionsBase: [...configParam.options],
        });
      }
      modalBottomRef?.current?.show();
    },
    hide: () => {
      modalBottomRef?.current?.hide();
    },
  }));

  return (
    <ModalBase containerStyle="pb-0" ref={modalBottomRef} title={config?.title}>
      {config.searchable && (
        <InputFieldText
          leftIcon="search"
          placeholder="Cari nama..."
          containerStyle="pb-2"
          onChangeText={onSearchOptions}
        />
      )}
      <RNFlatList
        showsVerticalScrollIndicator={false}
        data={config.options}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle="pb-6"
        style={`max-h-[${Dimensions.get("screen").height * 0.35}px]`}
        ListEmptyComponent={
          <RNView style={"justify-center items-center fill"}>
            <Typography size="xl">Data tidak ditemukan</Typography>
          </RNView>
        }
        ItemSeparatorComponent={() => <RNView style="h-[1px] bg-neutral-300" />}
      />
    </ModalBase>
  );
});

export default React.memo(ModalBottomInfo);
