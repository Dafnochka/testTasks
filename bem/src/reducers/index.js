import {combineReducers} from "redux"

import dataReducer from "./dataReducer"
import viewReducer from "./viewReducer"

export default combineReducers({
        data: dataReducer,
        view: viewReducer,
    }
)