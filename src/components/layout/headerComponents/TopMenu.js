import React, { Component } from 'react';

import TopMenuItem from './TopMenuItem'

class TopMenu extends Component {
    state = {
        menuList:[]
    };

    componentDidMount() {
        const menus = [
            {name:"home",               to:"/"},
            {name:"Resume",             to:"/resume"},
            {name:"Skills",             to:"/skills"},
            {name:"Career",             to:"/career"},
            {name:"PersonalProject",    to:"/personalProject"},
            {name:"Blog",               to:"/blog"},
        ];

        const menuList = menus.map(
            menu => <TopMenuItem name={menu.name} isOn={this.props.currentMenu === menu.to? "on":""} to={menu.to} />
        );

        this.setState({
            menuList:menuList
        });
    }

    render() {

        return (
            <ul className="menu">
                {this.state.menuList}
            </ul>
        );
    }
}

export default TopMenu;