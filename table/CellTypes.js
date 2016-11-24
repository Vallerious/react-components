import React, { Component } from 'react';

class AttackStatusBadge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                width: '84px',
                height: '23px',
                lineHeight: '20px',
                borderRadius: '100px',
                margin: '0 auto',
                color: '#fff',
                textTransform: 'capitalize'
            }
        };
    }

    componentWillMount() {
        let background = this.props.data.status === 'ongoing' ? '#f46f6d' : '#8dc63f';
        this.setState({ badgeColor: background });
    }
    render() {
        let {data, field} = this.props;

        return (<div style={Object.assign({ background: this.state.badgeColor }, this.state.style)}>
            {data[field]}
        </div>)
    }
}

class SimpleTextCell extends Component {
    render() {
        let {data, field} = this.props;

        return (
            <div className={this.props.data.status === 'ongoing' ? 'text-bolded' : ''}>
                {data[field]}
            </div>
        )
    }
}

export {
    AttackStatusBadge,
    SimpleTextCell
}