import React, { Component } from 'react';

import { Grid, Container, Segment, Label } from 'semantic-ui-react';

import SimpleCard from './SimpleCard';
import SlideCard from './SlideCard';

class CardWrapper extends Component {

    /**
     * 카드 가져오기
     * @param card 카드 정보
     * @param type 카드 유형
     */
    getCards(card, type) {

        // 단순 카드
        if(type === "simple") {
            return (
                <SimpleCard
                    key={card.id}
                    name={card.name}
                    meta={card.meta}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    imageUrl2={card.imageUrl2}
                />
            );
        }
        else if(type === "slide") {
            return (
                <SlideCard
                    key={card.id}
                    name={card.name}
                    meta={card.meta}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    imageUrl2={card.imageUrl2}
                    linkUrl={card.linkUrl}
                />
            );
        }
    }


    render() {
        const type = this.props.type;
        const cards = this.props.cardList.map( card => this.getCards(card, type));

        return (
            <Container  textAlign='left'>
                <Segment raised>
                    <Label as='a' color='red' ribbon>
                        {this.props.name}
                    </Label>
                    <Grid container columns={3} >
                        {cards}
                    </Grid>
                </Segment>
            </Container>
        );
    }
}

export default CardWrapper;