import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import ProfileSkill from './profileSkill';

export default class ProfileSkills extends Component {
    
    render() {
        const profileSkillList = this.props.skills.map(
            info => (
                <Grid.Column>
                    <ProfileSkill
                        imgUrl={info.imgUrl}
                        title={info.title}
                        content={info.content}
                        percent={info.percent}
                        grade={info.grade}
                    />
                </Grid.Column>
            )
        );

        return (
            <Grid.Row columns={3}>
                {profileSkillList}
            </Grid.Row>
        );
    }
}