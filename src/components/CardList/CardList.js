import React from 'react';
import Card from '../Card';

class CardList extends React.Component {
    render() {
        const allCards = this.props.cards.map((card) => <Card 
                                                            key={card.id}
                                                            value={card.id}
                                                            handleClick={this.props.processFunction}
                                                        />
                                        );
        return (

            <div>
                {allCards}
            </div>
        );

    }
}

export default CardList;