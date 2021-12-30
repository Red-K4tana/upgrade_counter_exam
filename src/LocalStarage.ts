
export const saveState = (key: string, state: string)=> {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key,stateAsString)
}

export const restoreState = (key: string) => {
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) return JSON.parse(stateAsString) as string
}


saveState('startValue', '0')
saveState('maxValue', '5')
