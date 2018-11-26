const themeReducer = (state, action) => {
    if (!state) return {
        array:new Array(),
        text:""
    }

    switch (action.type) {
        case 'CHANGE_ARR':
            return { ...state, array: action.array }
            break
        case 'CHANGE_TXT':
            return { ...state, text: action.text }
            break

        default:
            return state
    }
}
export default themeReducer