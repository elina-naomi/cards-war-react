import React from 'react';


const Deck = () => {
    const cardDeck = [];
    const cardSuits = ['diamonds','spades','clubs','hearts'];
    for (const cardSuit of cardSuits) {
        for (let i = 1; i <=13 ; i++) {
            cardDeck.push({cardSuit: cardSuit, cardValue: i})
        }
    }
    return cardDeck;
};

export default Deck;