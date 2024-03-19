import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return (
      <Button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </Button>
    );
  };

  return (
    <Grid columns={3} divided>
      {[0, 1, 2].map((row) => (
        <Grid.Row key={row}>
          {[0, 1, 2].map((col) => (
            <Grid.Column key={col}>{renderSquare(row * 3 + col)}</Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  );
};

export default Board;
