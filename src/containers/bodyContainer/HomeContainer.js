import React, {Component} from 'react';
import axios from 'axios';

import { HomepageBody } from '../../components/layout';
import { Home } from '../../components/main';

class HomeContainer extends Component {
    state = {
        cardsInfo: []
    };

    render() {

        // 카드 불러오기
        axios.get('dummy/home/cardList.json')
            .then(response => {
                this.setState({
                    cardsInfo: response.data
                }); 
            })
            .catch(error => {
                console.log(error);
            });

        return (
            <HomepageBody>
                <Home cardsInfo={this.state.cardsInfo} />
            </HomepageBody>
        );
    }
}

export default HomeContainer;