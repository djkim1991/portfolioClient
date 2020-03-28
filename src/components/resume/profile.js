import React, { Component } from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';

export default class Profile extends Component {
    render() {
        return (
            <Grid.Row columns={2} className="profile">
                <Grid.Column textAlign="center">
                    <Image src='/images/resume/profile.png' circular />
                </Grid.Column>
                <Grid.Column textAlign="left">
                    <div><span className="title">끊임없이 발전하는 개발자, <span className="color-blue">김동주</span></span></div>
                    <div><span className="name color-blue">KIM DONG JU</span></div>
                    <div><Icon name="birthday"/>1991.12.25</div>
                    <div><Icon name="phone"/>010-7702-6073</div>
                    <div><Icon name="mail outline"/>djkim1991@naver.com</div>
                    <div><Icon name="home"/>경기도 성남시 분당구</div>
                </Grid.Column>
            </Grid.Row>
        );
    }
}