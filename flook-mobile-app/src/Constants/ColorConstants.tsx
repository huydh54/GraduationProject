const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#262626',
  // PRIMARY COLOR
  PRIMARY_01: '#F0F7FF',
  PRIMARY_02: '#D6EAFF',
  PRIMARY_03: '#BDDDFF',
  PRIMARY_04: '#248EFF',
  PRIMARY_05: '#3D9CFF',
  PRIMARY_06: '#57A9FF',
  PRIMARY_07: '#70B6FF',
  PRIMARY_08: '#8AC3FF',
  PRIMARY_09: '#A3D0FF',
  // ---------------------
  PRIMARY_100: '#0B82FF',
  PRIMARY_200: '#0A7CF5',
  PRIMARY_300: '#0970DB',
  PRIMARY_400: '#0863C2',
  PRIMARY_500: '#0756A8',
  PRIMARY_600: '#06498F',
  PRIMARY_700: '#053C76',
  PRIMARY_800: '#042F5C',
  PRIMARY_900: '#032242',
  PRIMARY_1000: '#021529',
  // SECONDARY 1
  SECONDARY_1_01: '#F7FDFF',
  SECONDARY_1_02: '#E0F6FF',
  SECONDARY_1_03: '#C4EDFF',
  SECONDARY_1_04: '#45C7FF',
  SECONDARY_1_05: '#5ECEFF',
  SECONDARY_1_06: '#78D6FF',
  SECONDARY_1_07: '#91DEFF',
  SECONDARY_1_08: '#ABE5FF',
  // ---------------------
  SECONDARY_1_100: '#2CC0FF',
  SECONDARY_1_200: '#2AB8F5',
  SECONDARY_1_300: '#26A5DB',
  SECONDARY_1_400: '#2192C2',
  SECONDARY_1_500: '#1D7EA8',
  SECONDARY_1_600: '#186B8F',
  SECONDARY_1_700: '#145875',
  SECONDARY_1_800: '#10455C',
  SECONDARY_1_900: '#0B3242',
  SECONDARY_1_1000: '#071F29',
  // SECONDARY 2
  SECONDARY_2_01: '#FFF9E6',
  SECONDARY_2_02: '#FFF4CC',
  SECONDARY_2_03: '#FFEEB3',
  SECONDARY_2_04: '#FFE999',
  SECONDARY_2_05: '#FFE380',
  SECONDARY_2_06: '#FFDD66',
  SECONDARY_2_07: '#FFD84D',
  SECONDARY_2_08: '#FFD233',
  SECONDARY_2_09: '#FFCD1A',
  // ---------------------
  SECONDARY_2_100: '#FFC700',
  SECONDARY_2_200: '#F6C000',
  SECONDARY_2_300: '#DBAB00',
  SECONDARY_2_400: '#C29700',
  SECONDARY_2_500: '#A88300',
  SECONDARY_2_600: '#8F6F00',
  SECONDARY_2_700: '#755C00',
  SECONDARY_2_800: '#5C4800',
  SECONDARY_2_900: '#423400',
  SECONDARY_2_1000: '#292000',
  //SECONDARY_3
  SECONDARY_3_100: '#F7F7F7',
  SECONDARY_3_200: '#E8E8E8',
  SECONDARY_3_300: '#BFBFBF',
  SECONDARY_3_400: '#A6A6A6',
  SECONDARY_3_500: '#8C8C8C',
  SECONDARY_3_600: '#737373',
  SECONDARY_3_700: '#595959',
  SECONDARY_3_800: '#404040',
  // RED
  RED_01: '#F6ECEC',
  RED_02: '#F6D4D4',
  RED_03: '#F6BBBB',
  RED_04: '#F6A2A2',
  RED_05: '#F68A8A',
  RED_06: '#F67171',
  RED_07: '#F65959',
  RED_08: '#F74040',
  RED_09: '#F62727',
  RED_10: '#DB0D0D',
  // GREEN
  GREEN_01: '#4ED24B',
  GREEN_02: '#E3FFE2',
  GREEN_03: '#D5F7D5',
  GREEN_04: '#B5E9B3',
  GREEN_05: '#81DA7F',
  GREEN_06: '#65CC63',
  GREEN_07: '#4EC84C',
  // ORANGE
  ORANGE_02: '#FFEAD6',
  ORANGE_03: '#FFCFA3',
  ORANGE_04: '#FFC28A',
  ORANGE_05: '#FFA757',
  ORANGE_06: '#FF8D23',
  ORANGE_07: '#FF7A00',

  WHITE_OPACITY: (o:any) => `rgba(255,255,255, ${o})`,
  BLACK_OPACITY: (o:any) => `rgba(0,0,0, ${o})`,
};

export default COLORS;