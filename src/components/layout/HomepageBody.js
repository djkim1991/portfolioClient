import React, { Component } from 'react';

class HomepageBody extends Component {
    render() {
        return (
            <div className="homepage-body">
                {this.props.children}
            </div>
        );
    }
}

export default HomepageBody;