import React, { Component } from 'react';

import { Grid, Card, Reveal, Image } from 'semantic-ui-react'

export default class SlideCard extends Component {

    static defaultProps = {
        name:"",
        imageUrl:"https://react.semantic-ui.com/images/avatar/large/matthew.png"
    };

    render() {
        return (
            <Grid.Column textAlign="center">
                <a href={this.props.linkUrl}>
                    <Card>
                        <Reveal animated='move' instant>
                            <Reveal.Content hidden>
                                <Image src={this.props.imageUrl} wrapped ui={false} />
                            </Reveal.Content>
                            <Reveal.Content visible>
                                <Image src={this.props.imageUrl2} wrapped ui={false} />
                            </Reveal.Content>
                        </Reveal>
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
                </a>
            </Grid.Column>
        );
    }
}