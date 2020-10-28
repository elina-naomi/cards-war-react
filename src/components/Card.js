import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.cardSuit) {
            case 'diamonds':
                return (
                    <div className={`card ${this.props.cardSuit}`}>
                        <p>{`${this.props.cardValue}♦`}</p>
                    </div>
                );
            case 'spades':
                return (
                    <div className={`card ${this.props.cardSuit}`}>
                        <p>{`${this.props.cardValue}♠`}</p>
                    </div>
                );
            case 'clubs':
                return (
                    <div className={`card ${this.props.cardSuit}`}>
                        <p>{`${this.props.cardValue}♣`}</p>
                    </div>
                );
            case 'hearts':
                return (
                    <div className={`card ${this.props.cardSuit}`}>
                        <p>{`${this.props.cardValue}♥`}</p>
                    </div>
                );
        }

    }
}

export default Card;