import React from "react";
import Board from './Board'


export default class Game extends React.Component {
    render() {
        return (
            <>
                <h1>Тестовое задание. Крестики-нолики</h1>
                <div className="game">
                    <div className="game-board">
                        <Board/>
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
                <footer>Гукетлева Дарья</footer>
            </>
        );
    }
}
