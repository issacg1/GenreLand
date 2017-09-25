import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Results from './results';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      music:  "0",
      waiting:  false,
      results:  null,
      events:   null
    }
  this.onSubmit = this.onSubmit.bind(this)
  this.handleGenreChoice =  this.handleGenreChoice.bind(this)
  this.handleZipcodeInput = this.handleZipcodeInput.bind(this)
  }

  handleZipcodeInput(event) {
    event.preventDefault();
    let input = Number(event.target.value);
    if (isNaN(input))
      return
      this.setState({location: input});
  }
  handleGenreChoice(event) {
    event.preventDefault();
    this.setState({music: event.target.value});
  }
  automatic(){ //isn't working right now. see legacy components for the code
    return
  }
  onSubmit() {
    if (this.state.location === null || this.state.music === "0")
      return
    this.setState({waiting: true})
    let data = {
      zipcode:  this.state.location,
      genre:  Number(this.state.music),
      description:  ' '
    };
    axios({
      method: 'POST',
      url:  'http://localhost:3001/results',
      data
    }).then( res => {
        console.log(res.data);
        this.setState({
          results:  res.data,
          events:   res.data.events,
          waiting:  false
        })
        console.log(this.state.events)
      }).catch( err => console.log(err))
  }
  render() {
    return (
      <div>
        {/* <h1>You live in {this.state.location ? this.state.location.city : ''}, {this.state.location.state}</h1> */}
        <form>
        <label>
          Pick your favorite genre:
          <select value={this.music} onChange={this.handleGenreChoice}>
            <option value="0"></option>
            <option value="1">Rock</option>
            <option value="2">Alternative</option>
            <option value="3">RnB</option>
            <option value="4">Hip Hop</option>
            <option value="5">Pop</option>
            <option value="6">Country</option>
            <option value="7">EDM</option>
            <option value="8">Christian/Gospel</option>
            <option value="9">Seasonal</option>
            <option value="10">Jazz</option>
            <option value="11">Classical</option>
            <option value="12">Heavy Metal</option>
            <option value="13">Blues</option>
            <option value="14">Oldies</option>
            <option value="15">Folk</option>
            <option value="16">Soul</option>
            <option value="17">Punk Rock</option>
            <option value="18">Grunge</option>
            <option value="19">Reggae</option>
            <option value="20">Industrial</option>
            <option value="21">Opera</option>
            <option value="22">Bluegrass</option>
            <option value="23">Disco</option>
          </select>
        </label>
      </form>
      <div className='Please enter your zipcode'>
        <h2>Enter your Zipcode</h2>
        <input type="number" onChange = {this.handleZipcodeInput} value = {this.state.location}></input>
        <button onClick = {this.automatic} >Use your current location</button>
    </div>
        <button 
          onClick = {this.onSubmit}>
          Submit
        </button>
        <Results 
          state = {this.state}
        />
      </div>
    );
  }
}

export default Search;