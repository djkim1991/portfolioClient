import React, { Component } from 'react';

class TopMenuItem extends Component {
    render() {

        return (
            <li className="menu-item">
                <a href={this.props.to} className={this.props.isOn}>{this.props.name}</a>
            </li>
        );
    }
}

export default TopMenuItem;