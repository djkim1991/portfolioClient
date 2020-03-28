import React, { Component } from 'react';

import { Grid, Card, Image } from 'semantic-ui-react'

export default class SimpleCard extends Component {

    static defaultProps = {
        name:"",
        imageUrl:"https://react.semantic-ui.com/images/avatar/large/matthew.png"
    };

    render() {
        return (
            <Grid.Column textAlign="center">
                <Card onClick="void();">
                    <Image src={this.props.imageUrl} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>
                            <span>{this.props.name}</span>
                        </Card.Header>
                        <Card.Meta>
                            <span>{this.props.meta}</span>
                        </Card.Meta>
                        <Card.Description>
                            <span>{this.props.description}</span>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        );
    }
}