import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

// define the initial state
const initialState = {
    vodka_variant: 'Coconut & pineApple',
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
        }
    }
))
