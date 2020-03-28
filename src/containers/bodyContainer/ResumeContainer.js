import React, {Component} from 'react';
import axios from 'axios';

import { HomepageBody } from '../../components/layout';
import { Resume } from '../../components/main';

class BodyContainer extends Component {
    state = {
        skills: []
    };

    render() {

        // 데이터 불러오기
        axios.get('dummy/resume/resumeSkills.json')
        .then(response => {
            this.setState({
                skills: response.data
            }); 
        })
        .catch(error => {
            console.log(error);
        });

        return (
            <HomepageBody>
                <Resume skills={this.state.skills}/>
            </HomepageBody>
        );
    }
}

export default BodyContainer;