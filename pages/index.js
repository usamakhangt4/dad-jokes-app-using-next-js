import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Test from '../components/test';
import { fetchData } from '../api/index';
import React, { Component } from 'react';

export default class index extends Component {
  state = {
    jokes: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ jokes: fetchedData });
  }
  render() {
    return <div></div>;
  }
}
