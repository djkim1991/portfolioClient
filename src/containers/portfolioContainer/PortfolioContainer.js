import React, { Component, Fragment } from 'react';

import { HomepageFooter } from '../../components/layout';
import HeaderContainer from '../headerContainer/HeaderContainer';


class PortfolioContainer extends Component {
    render() {
        return (
            <Fragment>
                <HeaderContainer />
                    {this.props.children}
                <HomepageFooter />
            </Fragment>
        );
    }
}

export default PortfolioContainer;