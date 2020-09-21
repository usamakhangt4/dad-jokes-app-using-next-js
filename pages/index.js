import Head from 'next/head';
import AllJokes from '../components/allJokes';
import { fetchData } from '../api/index';
import React, { Component } from 'react';
import Layout from '../components/layout';
export default class index extends Component {
  state = {
    jokes: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ jokes: fetchedData.data.results });
    // console.log(this.state.jokes);
  }
  render() {
    return (
      <Layout>
        <AllJokes jokes={this.state.jokes} />
      </Layout>
    );
  }
}
