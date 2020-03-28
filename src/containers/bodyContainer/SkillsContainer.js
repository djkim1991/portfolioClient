import React, {Component} from 'react';
import axios from 'axios';

import { HomepageBody } from '../../components/layout';
import { Skills } from '../../components/main';

class SkillsContainer extends Component {
    state = {
        cardsInfo: []
    };

    render() {

        // 데이터 불러오기
        axios.get('dummy/skills/cardList.json')
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
                <Skills cardsInfo={this.state.cardsInfo} />
            </HomepageBody>
        );
    }
}

export default SkillsContainer;