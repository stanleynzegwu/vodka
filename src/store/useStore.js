import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

// define the initial state
const initialState = {
    vodka_variant: 'Classic',
    canModel:null,
    bgColor: {
        r:0.01, g:0.0, b: 0.0
    },
    newBgColor: {
        r:0.0, g:0.0, b: 0.0
    },
    isLerpProgress:false,
    controls:null
}

export default create(subscribeWithSelector((set) => {
        return {
            ...initialState,
            updateVodka_variant : (variant) => {
                set(() =>
                {
                   return {
                    vodka_variant: variant
                   }
                })
            },
            update_canModel : (model) => {
                set(() =>
                {
                   return {
                    canModel: model
                   }
                })
            },
            update_bgColor : (r,g,b) => {
                set(() =>
                {
                   return {
                    bgColor: {r:r,g:g,b:b}
                   }
                })
            },
            update_newBgColor : (r,g,b) => {
                set(() =>
                {
                   return {
                    newBgColor: {r,g,b}
                   }
                })
            },
            update_isLerpProgress : (value) => {
                set(() =>
                {
                   return {
                    isLerpProgress: value
                   }
                })
            },
            update_controls : (controls) => {
                set(() =>
                {
                   return {
                    controls
                   }
                })
            },
        }
    }
))
