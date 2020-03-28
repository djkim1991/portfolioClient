import React, { Component } from 'react';

import { CardWrapper } from '../common';

class Home extends Component {
    static defaultProps = {
        cardsInfo:[]
    }

    render() {
        const cardInfo = this.props.cardsInfo.map(info =>
            <CardWrapper
                key={info.id}
                name={info.name}
                cardList={info.cardList}
                onCardClick={this.props.onCardClick}
                linkUrl={info.linkUrl}
                type="slide"
            />
        );

        return (
            <div className="main">
                {cardInfo}
            </div>
        );
    }
}

export default Home;