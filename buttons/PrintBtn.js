import React, { Component } from 'react';
import $ from 'jquery';
import './../../assets/vendor/jQuery.print.js';

export class PrintBtn extends Component {
    constructor(props) {
        super(props)
    }

    handlePrintBtnClick(e) {
        this.print(this.props.selector);
    }

    print(selector) {
        $(selector).print({
            globalStyles: true,
            iframe: true,
            doctype: '<!doctype html>'
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handlePrintBtnClick.bind(this)}>
                    <span className="glyphicon glyphicon-print"></span>&nbsp;
                    Print
                </button>
            </div>
        )
    }
}

