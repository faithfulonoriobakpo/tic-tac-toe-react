import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props){
        return (
            <button className="square" onClick={ () => props.onClick()}>
                {props.value}
            </button>
        );
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    handleClick(index){
        if(this.state.squares[index] === null){
            const squares = this.state.squares.slice();
            const xIsNext = this.state.xIsNext;
            squares[index] = xIsNext? 'X' : 'O';
            this.setState({
                squares:squares,
                xIsNext:!xIsNext
            }); 
        }
        
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const status = 'Next Player: ' + (this.state.xIsNext? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{}</div>
                    <ol>{}</ol>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);