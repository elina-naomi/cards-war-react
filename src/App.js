import './App.css';
import React, {Component} from 'react';
import Game from "./components/Game";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'start',
            compAnnualRes: 0,
            userAnnualRes: 0
        }
    }

    updateResult = (result) => {
        switch (result) {
            case 1: {
                this.setState({
                    mode: 'finish',
                    userAnnualRes: this.state.userAnnualRes + 1,
                    currentResStatus: 'Win'
                })
                break;
            }
            case -1: {
                this.setState({
                    mode: 'finish',
                    compAnnualRes: this.state.compAnnualRes + 1,
                    currentResStatus: 'Lose'
                })
                break;
            }
            default: {
                this.setState({
                    mode: 'finish',
                    currentResStatus: 'Dead heat'
                })
            }
        }
    }

    handleButtonStart = (event) => {
        event.preventDefault(); //игнорировать дефолтное поведение формы
        const userName = event.target.userInputName.value.trim();
        if (userName) {
            this.setState({
                mode: 'play',
                userName: userName
            })
        }
    }

    handleButtonAgain = () => {
        this.setState({
            mode: 'play'
        })

    }

    renderStart() {
        return (
            <div className='container gameWrapper flex-wrap px-3 py-5'>
                <div className='row text-center'>
                    <h1 className='col-12 my-5'>Ready for War</h1>
                </div>
                <form onSubmit={this.handleButtonStart}>
                    <div className='row justify-content-center'>
                        <input className='col-7 form-control-lg my-5' type='text' name='userInputName'
                               placeholder='Enter your name' autoFocus='autoFocus'/>
                    </div>
                    <div className='row justify-content-center'>
                        <button type='submit' className='col-3 btn-primary btn-lg my-5 py-2'>start</button>
                    </div>
                </form>
            </div>
        );
    }

    renderPlayMode() {
        return (
            <div className='container gameWrapper flex-wrap px-3 py-5'>
                <Game userName={this.state.userName} updateRes={this.updateResult}/>
            </div>
        )
    }

    renderResultMode() {
        return (
            <div className='container gameWrapper flex-wrap px-3 py-5'>
                <div className='row text-center'>
                    <h1 className='col-12 my-5 res'>{this.state.currentResStatus}</h1>
                    <h2 className='col-12 res'>{`${this.state.compAnnualRes} - ${this.state.userAnnualRes}`}</h2>
                </div>
                <div className='row justify-content-center'>
                    <button onClick={this.handleButtonAgain} type='button'
                            className='col-3 btn-primary btn-lg my-5 py-2'>Again?
                    </button>
                </div>
            </div>
        )
    }

    render() {

        switch (this.state.mode) {
            case 'play':
                return this.renderPlayMode();
            case 'finish':
                return this.renderResultMode();
            default:
                return this.renderStart();
        }

    }
}

export default App;