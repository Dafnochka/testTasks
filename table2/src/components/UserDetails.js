import React, {Component} from 'react';

class DataGridActive extends Component {
    render() {
        const row = [];
        for (const column of this.props.columns) {
            const value = column.formatter(this.props.rowData);
            row.push(<td key={column.key}>{value}</td>);
        }
        return (<tr>{row}</tr>);
    }
}

export {DataGridActive};