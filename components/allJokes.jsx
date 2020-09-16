import React from 'react';

export default function allJokes({ jokes }) {
  //   console.log(jokes[1]);

  return (
    <React.Fragment>
      <ul>
        {!jokes ? (
          //    <Loader/>
          <h1>loading...</h1>
        ) : (

            // console.log(jokes);
          Object.keys(jokes).map((i) => {
              console.log(i)
          })
        )}
      </ul>
    </React.Fragment>
  );
}
