// @ts-nocheck
import { create } from 'twrnc'

const { plugin } = require('twrnc')
const colors = require('../Styles/colors').default

const spacing = 4

const config = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        fill: {
          flex: 1,
        },
      })
    }),
  ],
  theme: {
    extend: {
      colors,
      borderRadius: {
        1: spacing,
        2: spacing * 2,
        3: spacing * 3,
        4: spacing * 4,
        5: spacing * 5,
        6: spacing * 6,
        7: spacing * 7,
        8: spacing * 8,
        9: spacing * 9,
        10: spacing * 10,
      },
      fontFamily: {
        'inter-regular': 'Inter-Regular',
        'inter-bold': 'Inter-Bold',
        'inter-italic': 'Inter-Italic',
      },
    },
  },
}

// create the customized version...
const tw = create(config) // <- your path may differ

// ... and then this becomes the main function your app uses
export default tw
