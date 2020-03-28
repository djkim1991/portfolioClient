import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class ProfileDetail extends Component {
    render() {
        return (
            <Grid.Row columns={3} className="profile">
                <Grid.Column textAlign="center">
                    <div className="ui top attached label">학력사항</div>
                    <div className="timeline">
                        <div className="title">
                            <Icon name="circle"/>
                            <span>야탑고등학교</span>
                        </div>
                        <div className="content">
                            <span>이과</span>
                        </div>
                        <div className="content">
                            <span>2007.03 ~ 2010.02</span>
                        </div>
                        <div className="title">
                            <Icon name="circle"/>
                            <span>경기대학교</span>
                        </div>
                        <div className="content">
                            <span>컴퓨터과학과</span>
                        </div>
                        <div className="content">
                            <span>2010.02 ~ 2017.02</span>
                        </div>
                        <div className="title">
                            <Icon name="circle"/>
                            <span>단국대학교 정보지식대학원</span>
                        </div>
                        <div className="content">
                            <span>인공지능공학과</span>
                        </div>
                        <div className="content">
                            <span>2018.09~</span>
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column textAlign="center">
                    <div className="ui top attached label">경력사항</div>
                    <div className="timeline">
                        <div className="title">
                            <Icon name="circle"/>
                            <span>새얀아이엔씨(주)</span>
                        </div>
                        <div className="content">
                            <span>2017.05 ~ 2017.12</span>
                        </div>
                        <div className="title">
                            <Icon name="circle"/>
                            <span>애니모비(주)</span>
                        </div>
                        <div className="content">
                            <span>2017.12 ~ 2019.12</span>
                        </div>
                        <div className="title">
                            <Icon name="circle"/>
                            <span>dktechin a kakao company</span>
                        </div>
                        <div className="content">
                            <span>2020.01~</span>
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Row columns={1} className="profile">
                    <Grid.Column textAlign="left" >
                        <div><span className="bold color-blue">자격 정보</span></div>
                        <div><span className="bold margin-right-1rem">2018.07</span><span>운전면허증</span></div>
                        <div><span className="bold margin-right-1rem">2018.07</span><span>정보처리기사</span></div>
                    </Grid.Column>
                    <hr />
                    <Grid.Column textAlign="left">
                        <div><span className="bold color-blue">수상 경력</span></div>
                        <div><span className="bold margin-right-1rem">2018.07</span><span>연대배 전국 아마추어 펜싱대회 준우승</span></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Row>
        );
    }
}