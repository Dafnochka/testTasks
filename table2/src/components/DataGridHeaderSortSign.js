import React, {Component} from 'react';

class DataGridHeaderSortButton extends Component {
    render() {
        const className = this.props.direction === 'up' ?
            'glyphicon glyphicon-triangle-top' :
            'glyphicon glyphicon-triangle-bottom';
        return (
            <button type="button"
                    className="btn btn-default">
                <span className={className}></span>
            </button>);
    }
}

export {DataGridHeaderSortButton};