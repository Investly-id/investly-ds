import React, { useCallback } from 'react'
import { tw } from '../Utils'
import {
  Tabs,
  TabBarProps,
  MaterialTabBar,
} from './Libraries/CollapsibleTabView'

interface Props {
  scrollEnabled?: boolean
  renderHeader?: () => React.ReactElement | null
  data: {
    label: string
    badgeLabel?: string
    component: () => React.ReactNode
  }[]
}

const TabLine: React.FC<Props> = ({ data, scrollEnabled, renderHeader }) => {
  const renderTabBar = useCallback(
    (props: TabBarProps<string | number>) => (
      <MaterialTabBar
        {...props}
        scrollEnabled={scrollEnabled}
        style={tw`bg-white`}
        contentContainerStyle={scrollEnabled ? tw`px-6` : undefined}
        tabStyle={tw`h-auto py-2 px-3`}
        labelStyle={tw`font-inter-bold text-[14px] leading-[22px] m-0`}
        activeColor={tw.color('purple-600')}
        inactiveColor={tw.color('neutral-700')}
        indicatorStyle={tw`bg-purple-600 h-[2px]`}
      />
    ),
    [scrollEnabled],
  )

  return (
    <Tabs.Container
      // headerHeight={250}
      // allowHeaderOverscroll
      renderTabBar={renderTabBar}
      renderHeader={renderHeader}
      headerContainerStyle={tw`shadow-transparent border-b-neutral-300 border-b`}
      lazy
    >
      {data.map(({ label, badgeLabel, component }, index) => {
        return (
          <Tabs.Tab
            label={label}
            badgeLabel={badgeLabel}
            name={label}
            key={`Tab_${index}`}
          >
            {component()}
          </Tabs.Tab>
        )
      })}
    </Tabs.Container>
  )
}

TabLine.defaultProps = {
  scrollEnabled: false,
  renderHeader: undefined,
}

export default React.memo(TabLine)
