import { createContext } from 'react'

const RandomizerContext = createContext({
    dispatch: (action: Action) => {},
    state: { expConfig: 8, dashWindows: 8}
})

type Action = { type: '50-50 EXP'} | { type: '33-33-34 EXP'}

export { RandomizerContext }