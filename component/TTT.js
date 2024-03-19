import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Board from './component/Board';
import calculateWinner from './component/helpers';


const TicTacToe = () => {
  // Define initial state
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Event handler to handle square clicks
  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Restart the game
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Determine winner
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <Container>
      <Header as="h1">Tic Tac Toe</Header>
      <Board squares={squares} onClick={handleClick} />
      <div>{status}</div>
      <button onClick={handleRestart}>Restart</button>
    </Container>
  );
};

export default TicTacToe;
