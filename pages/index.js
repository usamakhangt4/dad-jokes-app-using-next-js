import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AllJokes from '../components/allJokes';
import { fetchData } from '../api/index';
import React, { Component } from 'react';

export default class index extends Component {
  state = {
    jokes: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ jokes: fetchedData.data.results });
    // console.log(this.state.jokes);
  }
  render() {
    return (
      <div>
        <AllJokes jokes={this.state.jokes} />
      </div>
    );
  }
}
