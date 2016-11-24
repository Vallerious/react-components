import React, { Component } from 'react';
import json2csv from 'json2csv';

export class ExportBtn extends Component {
    constructor(props) {
        super(props)
    }

    exportToCSV(data) {
        let dataCSV = json2csv(data);
        let a = document.createElement('a');

        a.href = 'data:attachment/csv,' + encodeURIComponent(dataCSV);
        a.target = '_blank';
        a.download = `${this.props.reportName || 'report'}.csv`;

        document.body.appendChild(a);
        a.click();
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.exportToCSV.bind(this, this.props.data)}>
                    <span className="glyphicon glyphicon-download-alt"></span>&nbsp;
                    Export
                </button>
            </div>
        )
    }
}

