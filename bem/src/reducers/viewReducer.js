export default function reducer(state={view:'day',
                                        chartType:"ColumnChart"}, action) {
    let chartType="ColumnChart";

    switch (action.type) {
        case "SET_VIEW": {
            switch (action.payload) {
                case "day":{
                    chartType="LineChart";
                    break;
                }
            }
            switch (action.payload) {
                case 'month':{
                    chartType="ColumnChart";
                    break;
                }
            }
            switch (action.payload) {
                case 'year':{
                    chartType="ColumnChart";
                    break;
                }
            }
            return {...state, view: action.payload, chartType: chartType }
        }
    }

    return state
}