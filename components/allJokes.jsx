import React from 'react';

export default function allJokes({ jokes }) {
  // console.log(jokes);

  return (
    <React.Fragment>
      <ul>
        {jokes.length === 0 ? (
          //    <Loader/>
          <h1>loading...</h1>
        ) : (
          // console.log(jokes)
          jokes.map((joke) => joke.id)
        )}
      </ul>
    </React.Fragment>
  );
}
