import React, { Component } from 'react';

import { CardWrapper } from '../common';

class Skills extends Component {
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
                type="simple"
            />
        );

        return (
            <div className="main">
                {cardInfo}
            </div>
        );
    }
}

export default Skills;