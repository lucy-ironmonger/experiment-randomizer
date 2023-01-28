const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "50-50 EXP":
            console.log("hitting reducer 50-50")
            return {
                ...state,
                expConfig: 128,
                dashWindows: 2
            }
        case "33-33-34 EXP":
            console.log("hitting reducer 33-33-34")
            return {
                ...state,
                expConfig: 85,
                dashWindows: 3
            }
    }
}

export { reducer }
// If 50/50 selected I want...
// 2 windows for code copy
// 128 n passed to the shuffle function