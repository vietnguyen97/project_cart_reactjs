import React, { Component } from 'react';


class Message extends Component {
    render() {
        var {value} = this.props;
        return (
            <h3>
                <span className="badge amber darken-2">
                    {value}
                </span>
            </h3>
        );
    }
}

export default Message;
