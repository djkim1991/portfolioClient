import React, { Component } from 'react';

import TopMenu from './headerComponents/TopMenu'

class HomepageHeader extends Component {
    render() {
        return (
            <div className="homepage-header">
                <TopMenu currentMenu={this.props.currentMenu} />
            </div>
        );
    }
}

export default HomepageHeader;