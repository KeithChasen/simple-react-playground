import React, { Component } from 'react';
import Input from "./Input";
import Letter from "./Letter";

class Letters extends Component {
    state = {
        word: '',
        letters: []
    }

    changeWord = (event) => {
        let word = event.target.value
        let letters = word.split('')
        this.setState({
            ...this.state,
           word,
            letters
        })
    }

    removeLetter = (index) => {
        let letters = [...this.state.letters]

        letters = letters.filter((letter, i) => {
            return index !== i
        })

        let word = letters.join('')

        this.setState({
            ...this.state,
            letters,
            word
        })
    }

    render() {

        const letters = this.state.letters.length > 0 ?
            (
                this.state.letters.map(
                (letter, index) => <Letter delete={() => this.removeLetter(index)} letter={letter} key={index}/>
                )
            )
            : null

        return (
            <div>
                <Input change={this.changeWord} word={this.state.word}/>
                <div>
                    {this.state.word}
                </div>
                <div>
                    { letters }
                </div>
            </div>
        )
    }

}

export default Letters