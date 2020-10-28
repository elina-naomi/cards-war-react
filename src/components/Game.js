import React, {Component, Fragment} from 'react';
import Card from "./Card";
import Deck from "./Deck";

const deck = Deck();

class Game extends Component {
    constructor(props) {
        super(props);
        let cardsDeck = deck.sort(() => Math.random() - 0.5);
        this.state = {
            step: 1,
            compWin: 0,
            userWin: 0,
            comCards: cardsDeck.slice(0, 26),
            userCards: cardsDeck.slice(26)
        }
    }

    handleButtonNext = (event) => {
        const userCardValue = this.state.userCards[this.state.step - 1].cardValue;
        const compCardValue = this.state.comCards[this.state.step - 1].cardValue;

        const userGameWin = this.state.userWin;
        const compGameWin = this.state.compWin;

        if (this.state.step === 26) {
            if (userCardValue > compCardValue) {

                if (compGameWin > userGameWin+1) {
                    return this.props.updateRes(-1);
                }
                if (compGameWin < userGameWin+1) {
                    return this.props.updateRes(1);
                } else {
                    return this.props.updateRes(0);
                }
            }
            if (userCardValue < compCardValue) {

                if (compGameWin+1 > userGameWin) {
                    return this.props.updateRes(-1);
                }
                if (compGameWin+1 < userGameWin) {
                    return this.props.updateRes(1);
                } else {
                    return this.props.updateRes(0);
                }
            }
        }

        if (userCardValue > compCardValue) {
            this.setState({
                userWin: userGameWin + 1,
                step: this.state.step + 1
            })
        }
        if (userCardValue < compCardValue) {
            this.setState({
                compWin: compGameWin + 1,
                step: this.state.step + 1
            })
        } else {
            this.setState({
                step: this.state.step + 1
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className='row text-left'>
                    <h1 className='col-12 text-uppercase'>Computer</h1>
                </div>
                <div className='row justify-content-center'>

                    <Card cardSuit={this.state.comCards[this.state.step - 1].cardSuit}
                          cardValue={this.state.comCards[this.state.step - 1].cardValue}/>
                </div>
                <div className='row justify-content-center'>
                    <Card cardSuit={this.state.userCards[this.state.step - 1].cardSuit}
                          cardValue={this.state.userCards[this.state.step - 1].cardValue}/>
                </div>
                <div className='row justify-content-between'>
                    <button onClick={this.handleButtonNext}
                            className='col-3 btn-primary btn-lg ml-3 py-2'>next
                    </button>
                    <h1 className='col-4'>{this.props.userName}</h1>
                </div>
            </Fragment>

        );
    }
}

export default Game;