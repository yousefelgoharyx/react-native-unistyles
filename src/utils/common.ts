import { Platform } from 'react-native'

export const throwError = (message: string) => {
    throw new Error(`🦄 [react-native-unistyles]: ${message}`)
}

export const warn = (message: string) => {
    console.warn(`🦄 [react-native-unistyles]: ${message}`)
}

export const isMobile = Platform.OS === 'android' || Platform.OS === 'ios'
export const isWeb = Platform.OS === 'web'
export const isIOS = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const isServer = typeof window === 'undefined'

export const Orientation = {
    Landscape: 'landscape',
    Portrait: 'portrait'
} as const
