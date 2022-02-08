import { Dimensions } from 'react-native'


import { getStatusBarHeight } from 'react-native-status-bar-height'
// import { storage } from './firebase'


const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export const wp = float => WIDTH * float / 100
export const hp = float => HEIGHT * float / 100
export const sHeight = getStatusBarHeight()
export const currencySymbol = "$"