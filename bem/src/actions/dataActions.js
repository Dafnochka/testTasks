import data from './data'


export function getData() {
    return {
        type: "FETCH_DATA",
        payload: data
    }
}
export function addData(x,y) {
    return {
        type: "FETCH_DATA",
        payload: [x,y]
    }
}