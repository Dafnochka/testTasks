export default function reducer(state=[["Age", "Weight"], [4, 5.5], [8, 12]],
                                action) {

    switch (action.type) {
        case "FETCH_DATA": {
            return {data: action.payload}
        }

        case "ADD_DATA": {
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        }

    }

    return state
}