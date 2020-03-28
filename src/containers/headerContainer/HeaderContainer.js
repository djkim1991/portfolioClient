import React, {Component} from 'react';

import { HomepageHeader } from '../../components/layout';

class HeaderContainer extends Component {
    state = {
        currentMenu: ""
    };

    componentWillMount() {
        const pathname = window.location.pathname;
        const currentMenu = pathname.substring(pathname.indexOf("/"), pathname.length);

        this.setState({
            currentMenu: currentMenu
        });
    }

    render() {

        return (
            <HomepageHeader currentMenu={this.state.currentMenu}/>
        );
    }
}

export default HeaderContainer;