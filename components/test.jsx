import React, { Component } from 'react';
import axios from 'axios';
export default class test extends Component {
  state = {
    jokes: [],
  };
  async fetchData() {
    fetch('https://dad-jokes.p.rapidapi.com/random/jokes', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
        'x-rapidapi-key': '357f5749a4mshb7aeb57e957df71p13eeb8jsn20c573b968dd',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    // const config = {
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // };
    // try {
    //   const res = await axios.get('https://icanhazdadjoke.com/search', config);
    //   this.setState({ jokes: res.data.results });
    //   console.log(this.state.jokes);
    // } catch (error) {}
  }
  render() {
    return <div>hi {this.fetchData()} </div>;
  }
}
