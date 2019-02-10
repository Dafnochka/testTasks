import React from "react";
import {connect} from 'react-redux';
import {getData} from '../../actions/dataActions';
import {setView} from '../../actions/viewActions';
import {cn} from '@bem-react/classname';
import {Chart} from "react-google-charts";
import './Lyout.css';

const layout = cn('Layout');
const chart = layout('Chart');
const button = layout('Button', {type: 'change_view'});
const title = layout('TItle');
const task = layout('Task');

class Layout extends React.Component {


    getData() {
        this.props.dispatch(getData());
    }

    setView(type) {
        this.props.dispatch(setView(type));
    }

    mapDataDay(data, dataMapped) {

        dataMapped.push([data[0][2], data[0][3], data[0][4]]);
        for (let i = 1; i < data.length; i++) {
            let date = new Date(data[i][0], data[i][1], data[i][2]);
            dataMapped.push([date, data[i][3], data[i][4]]);
        }
    }

    mapDataMonth(data, dataMapped) {
        let years = [2018, 2019];
        let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        dataMapped.push([data[0][1], data[0][3], data[0][4]]);
        for (let year of years) {
            let yearData = data.filter((row) => row[0] === year);
            console.log(yearData);
            for (let month of months) {
                let monthData = yearData.filter((row) => row[1] === month);
                let monthAmount1 = 0;
                let monthAmount2 = 0;
                monthData.forEach((item) => {
                    monthAmount1 += item[3];
                    monthAmount2 += item[4];
                });
                dataMapped.push([year + '-' + month, monthAmount1, monthAmount2]);
            }
        }
    }

    mapDataYear(data, dataMapped) {
        let years = [2018, 2019];
        dataMapped.push([data[0][0], data[0][3], data[0][4]]);
        for (let year of years) {
            let yearData = data.filter((row) => row[0] === year);
            console.log(yearData);
            let yearAmount1 = 0;
            let yearAmount2 = 0;
            yearData.forEach((item) => {
                yearAmount1 += item[3];
                yearAmount2 += item[4];
            });
            dataMapped.push([year, yearAmount1, yearAmount2]);
        }
    }

    render() {
        const data = this.props.data;
        let dataMapped = [];
        if (data) {
            switch (this.props.view) {
                case 'day': {
                    this.mapDataDay(data, dataMapped);
                    break;
                }
                case 'month': {
                    this.mapDataMonth(data, dataMapped);
                    break;
                }
                case 'year': {
                    this.mapDataYear(data, dataMapped);
                    break;
                }
            }
        }

        return <div className='Layout'>
            <h1 className={title}>Гукетлева Дарья. Тестовое задание</h1>
            <p className={task}>Сделать клиентское приложение с выводим графиков и переключениеи вариантов отображения
                инфомрации день/месяц/год</p>
            <Chart
                className={chart}
                chartType="ColumnChart"
                data={dataMapped}
                width="100%"
                height="400px"
                legendToggle
            />
            <button
                className={button}
                onClick={() => this.setView('year')}>
                по годам
            </button>
            <button
                className={button}
                onClick={() => this.setView('month')}>
                по месяцам
            </button>
            <button
                className={button}
                onClick={() => this.setView('day')}>
                по дням
            </button>

        </div>

    }

    componentDidMount() {
        // this.props.dispatch(fetchUser())
        this.getData();
        this.setState({
            chartType: this.props.chartType
        })

    }
}

function mapStateToProps(state) {
    return {
        data: state.data.data,
        view: state.view.view,
        chartType: state.view.chartType,
    };
}

export default connect(mapStateToProps)(Layout);